import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ScienceSearch from '../../components/science-search';
import { TITLES } from '../../components/constant';

// Mock the DropdownTemp component

vi.mock('./dropdown-temp', () => ({
    default: ({ title }: { title: string }) => <div data-testid="mock-dropdown">{title}</div>
    }));

describe('ScienceSearch', () => {
    it('renders the component with correct title', () => {
    render(<ScienceSearch />);
    expect(screen.getByText('Explore Our Programmes')).toBeInTheDocument();
    });

    it('renders correct number of DropdownTemp components', () => {
    render(<ScienceSearch />);
    const dropdowns = screen.getAllByRole('button', { name: /select option/i });
    expect(dropdowns).toHaveLength(TITLES.length);
    });

    it('renders DropdownTemp components with correct titles', () => {
    render(<ScienceSearch />);
    TITLES.forEach((title) => {
        expect(screen.getByText(title)).toBeInTheDocument();
    });
    });

    it('renders search input with correct placeholder', () => {
    render(<ScienceSearch />);
    const searchInput = screen.getByPlaceholderText('Search Anything…');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
    });

    it('renders search icon', () => {
    render(<ScienceSearch />);
    const searchContainer = screen.getByLabelText('Search').closest('div');
    const searchIcon = searchContainer?.querySelector('svg');
    expect(searchIcon).toBeInTheDocument();
    });
});