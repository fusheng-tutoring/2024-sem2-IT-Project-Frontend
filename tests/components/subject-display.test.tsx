import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import SubjectDisplay from '../../components/subject-display';


vi.mock('../../components/subject-sidebar', () => ({
    default: () => <div data-testid="subject-sidebar">Mocked SubjectSidebar</div>
}));

vi.mock('../../components/subject', () => ({
    default: () => <div data-testid="subject">Mocked Subject</div>
}));

describe('SubjectDisplay', () => {
    it('renders SubjectSidebar and Subject components', () => {
    render(<SubjectDisplay />);

    expect(screen.getByTestId('subject-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('subject')).toBeInTheDocument();
    });

    it('renders with correct layout', () => {
    const { container } = render(<SubjectDisplay />);

    const section = container.querySelector('section');
    expect(section).not.toBeNull();
    expect(section).toHaveClass('relative');

    const flexContainer = section?.firstElementChild;
    expect(flexContainer).not.toBeNull();
    expect(flexContainer).toHaveClass('flex flex-row');
    });
});