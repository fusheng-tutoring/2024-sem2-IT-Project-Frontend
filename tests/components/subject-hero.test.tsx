import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SubjectHero from '../../components/subject-hero';

// Mock the next/image component
vi.mock('next/image', () => ({
  default: (props: any) => <img {...props} />
}));

// Mock the SVG import
vi.mock('../../public/svgs/arrow-right-svgrepo-com.svg', () => ({
  default: '/mocked-arrow-icon.svg'
}));

describe('SubjectHero', () => {
  it('renders the component', () => {
    render(<SubjectHero />);
    expect(screen.getByRole('heading', { name: /Algorithms and Data Structures \(COMP20003\)/i })).toBeDefined();
  });

  it('displays the correct heading', () => {
    render(<SubjectHero />);
    const heading = screen.getByRole('heading', { name: /Algorithms and Data Structures \(COMP20003\)/i });
    expect(heading).toHaveTextContent('Algorithms and Data Structures (COMP20003)');
  });

  it('shows the eligibility and requirements text', () => {
    render(<SubjectHero />);
    expect(screen.getByText('Eligibility and requirements')).toBeDefined();
  });

  it('displays the arrow icon', () => {
    render(<SubjectHero />);
    const arrowIcon = screen.getByAltText('arrow');
    expect(arrowIcon).toBeDefined();
    expect(arrowIcon).toHaveAttribute('src', '/mocked-arrow-icon.svg');
  });

  it('shows the handbook year selection', () => {
    render(<SubjectHero />);
    expect(screen.getByText("You're viewing the 2024 Handbook:")).toBeDefined();
    expect(screen.getByRole('combobox')).toBeDefined();
  });

  it('has the correct option in the year select', () => {
    render(<SubjectHero />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue('2024');
  });

  it('shows the archived handbooks text', () => {
    render(<SubjectHero />);
    expect(screen.getByText('Or view archived Handbooks')).toBeDefined();
  });
});