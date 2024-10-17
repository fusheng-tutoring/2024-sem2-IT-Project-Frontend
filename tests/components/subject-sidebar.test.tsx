import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SubjectSidebar from '../../components/subject-sidebar';

describe('SubjectSidebar', () => {
    it('renders the sidebar title', () => {
    render(<SubjectSidebar />);
    expect(screen.getByText('About this subject')).toBeDefined();
    });

    it('renders all sidebar links', () => {
    render(<SubjectSidebar />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);
    });

    it('renders the correct link texts', () => {
    render(<SubjectSidebar />);
    expect(screen.getByText('Overview')).toBeDefined();
    expect(screen.getByText('Eligibility and requirements')).toBeDefined();
    expect(screen.getByText('Assessment')).toBeDefined();
    expect(screen.getByText('Dates and times')).toBeDefined();
    expect(screen.getByText('Further information')).toBeDefined();
    });

    it('applies active styles to the "Eligibility and requirements" link', () => {
    render(<SubjectSidebar />);
    const activeLink = screen.getByText('Eligibility and requirements').closest('li');
    expect(activeLink).toHaveClass('bg-white');
    expect(activeLink).toHaveClass('border-l-4');
    expect(activeLink).toHaveClass('border-unimelbScienceBlue');
    });

    it('renders external links with correct attributes', () => {
    render(<SubjectSidebar />);
    const externalLinks = ['Overview', 'Assessment', 'Dates and times', 'Further information'];
    externalLinks.forEach(linkText => {
        const link = screen.getByText(linkText);
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener');
    });
    });
});