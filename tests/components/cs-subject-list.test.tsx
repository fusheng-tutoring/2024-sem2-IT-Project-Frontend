import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CSSubjectList from '../../components/major-subject-list';
import { CORE_SUBJECT, RELATIVE_SUBJECT } from '../../components/constant';
import { CSType } from '../../components/types'; 

// Mock the CSCard component
vi.mock('./cs-card', () => ({
    default: ({ name, code }: CSType) => (
    <div className="cs-card">
        <a href="/subject" className="text-xl text-gray-800 font-semibold">{name}</a>
        <div>{code}</div>
    </div>
    )
}));

    describe('CSSubjectList', () => {
    it('renders core subjects when curTab is "Major Structure"', () => {
        render(<CSSubjectList curTab="Major Structure" />);

        expect(screen.getByText('Subjects')).toBeInTheDocument();

        CORE_SUBJECT.forEach(subject => {
        expect(screen.getByText(subject.name)).toBeInTheDocument();
        expect(screen.getByText(subject.code)).toBeInTheDocument();
        });
    });

    it('renders relative subjects when curTab is not "Major Structure"', () => {
        render(<CSSubjectList curTab="Other Tab" />);
        
        expect(screen.getByText('Subjects')).toBeInTheDocument();

        RELATIVE_SUBJECT.forEach(subject => {
        expect(screen.getByText(subject.name)).toBeInTheDocument();
        expect(screen.getByText(subject.code)).toBeInTheDocument();
        });
    });

    it('renders the correct number of subject items', () => {
        render(<CSSubjectList curTab="Major Structure" />);

        const subjectLinks = screen.getAllByRole('link');
        expect(subjectLinks.length).toBe(CORE_SUBJECT.length);
    });
});