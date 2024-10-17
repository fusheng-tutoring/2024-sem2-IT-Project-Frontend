import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Subject from '../../components/subjectContent';

// Mock the next/image component
vi.mock('next/image', () => ({
  default: vi.fn().mockImplementation(({ src, alt }) => (
    <img src={src} alt={alt} />
  )),
}));

// Mock the next/link component
vi.mock('next/link', () => ({
  default: vi.fn().mockImplementation(({ children, href }) => (
    <a href={href}>{children}</a>
  )),
}));

describe('Subject Component', () => {
  it('renders the component without crashing', () => {
    render(<Subject />);
    expect(screen.getByText('Eligibility and requirements')).toBeDefined();
  });

  it('displays the correct headings', () => {
    render(<Subject />);
    expect(screen.getByText('Prerequisites')).toBeDefined();
    expect(screen.getByText('Corequisites')).toBeDefined();
    expect(screen.getByText('Inherent requirements (core participation requirements)')).toBeDefined();
  });

  it('displays the correct options', () => {
    render(<Subject />);
    expect(screen.getByText('Option 1')).toBeDefined();
    expect(screen.getByText('Option 2')).toBeDefined();
  });

  it('renders the Image component', () => {
    render(<Subject />);
    const image = screen.getByAltText('Unimelb-Subject');
    expect(image).toBeDefined();
    expect(image.tagName).toBe('IMG');
  });

  it('renders the correct links', () => {
    render(<Subject />);
    const assessmentLink = screen.getByText('Assessment and Results Policy (MPF1326)');
    expect(assessmentLink).toBeDefined();
    expect(assessmentLink.getAttribute('href')).toBe('https://policy.unimelb.edu.au/MPF1326/#section-4.30');

    const equityLink = screen.getByText('http://services.unimelb.edu.au/student-equity/home');
    expect(equityLink).toBeDefined();
    expect(equityLink.getAttribute('href')).toBe('http://services.unimelb.edu.au/student-equity/home');
  });

  it('renders navigation links', () => {
    render(<Subject />);
    const prevLink = screen.getByText('Prev: Overview');
    const nextLink = screen.getByText('Next: Assessment');

    expect(prevLink).toBeDefined();
    expect(nextLink).toBeDefined();

    expect(prevLink.closest('a')).toHaveAttribute('href', 'https://handbook.unimelb.edu.au/2024/subjects/comp20003');
    expect(nextLink.closest('a')).toHaveAttribute('href', 'https://handbook.unimelb.edu.au/2024/subjects/comp20003/assessment');
  });

  it('displays the last updated date', () => {
    render(<Subject />);
    expect(screen.getByText('Last updated: 01 September 2024')).toBeDefined();
  });
});