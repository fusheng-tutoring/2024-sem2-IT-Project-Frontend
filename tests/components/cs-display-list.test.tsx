import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import CSDisplayList from '../../components/major-display-list';
import { SUBJECT_TAB } from '../../components/constant'; // Make sure to import or mock this


// Mock both components
vi.mock('../../components/cs-sidebar', () => ({
    default: vi.fn(() => (
    <aside className='mt-12 w-full'>
        <ul>
        {SUBJECT_TAB.map((tab) => (
            <li key={tab}>
            <button>{tab}</button>
            </li>
        ))}
        </ul>
    </aside>
    )),
}));

vi.mock('../../components/cs-subject-list', () => ({
    default: vi.fn(() => <div data-testid="mock-subject-list">Mocked Subject List</div>),
}));

describe('CSDisplayList', () => {
    it('renders without crashing', () => {
    render(<CSDisplayList />);
    
    // Check for the presence of the aside element
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toBeDefined();
    
    // Check for the presence of buttons within the sidebar
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(SUBJECT_TAB.length);
    
    // Check that the first tab is rendered
    expect(screen.getByText(SUBJECT_TAB[0])).toBeDefined();
    
    // Check for the mock subject list
    expect(screen.getByTestId('mock-subject-list')).toBeDefined();
    });



    it('initializes with the correct default tab', () => {
        render(<CSDisplayList />);
        expect(screen.getByText('Major Structure')).toBeDefined();
    });



    it('renders correctly and handles tab changes', () => {
        // Render the component
        render(<CSDisplayList />);

        // a) Verify initial state: "Mocked Subject List" is rendered
        const subjectList = screen.getByTestId('mock-subject-list');
        expect(subjectList.textContent).toBe('Mocked Subject List');

        // b) Find and click the second tab button
        const secondTabButton = screen.getByText(SUBJECT_TAB[1]);
        expect(secondTabButton).toBeDefined();

        // Attempt to click the second tab button
        let error;
        try {
            fireEvent.click(secondTabButton);
        } catch (e) {
            error = e;
        }

        // c) Verify that clicking didn't cause a crash (implicitly tested by reaching this point)
        expect(error).toBeUndefined();

        // Additional verification: component still renders after click
        const subjectListAfterClick = screen.getByTestId('mock-subject-list');
        expect(subjectListAfterClick).toBeDefined();
        expect(subjectListAfterClick.textContent).toBe('Mocked Subject List');

        // Verify that all tab buttons are still present after the click
        SUBJECT_TAB.forEach(tab => {
            const tabButton = screen.getByText(tab);
            expect(tabButton).toBeDefined();
        });
    });
});
