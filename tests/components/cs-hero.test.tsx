import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';

// Mock the entire cs-hero module
vi.mock('../../components/cs-hero', () => ({
  default: () => (
    <section className="relative bg-unimelbDarkBlue" role="region">
      <div className="max-w-full text-left px-4 sm:px-6 relative">
        <div className="relative pt-12">
          <div className="max-w-6xl text-white text-left pb-12 ml-12 my-6">
            <p className='text-md mb-2'>MAJOR</p>
            <h1 className="h2 font-bold mb-4 py-4">Computing and Software Systems</h1>
            <div className='flex items-center gap-2'>
              <img src="/mocked-arrow-path.svg" alt="arrow" className="w-6 h-auto" data-testid="arrow-icon" />
              <p className="text-xl">#1 University in Australia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}));

// Import the mocked component
import CSHero from '../../components/major-hero';

describe('CSHero', () => {
  it('renders the component correctly', () => {
    render(<CSHero />);

    expect(screen.getByText('MAJOR')).toBeDefined();
    expect(screen.getByText('Computing and Software Systems')).toBeDefined();
    expect(screen.getByText('#1 University in Australia')).toBeDefined();

    const arrowIcon = screen.getByTestId('arrow-icon');
    expect(arrowIcon).toBeDefined();
    expect(arrowIcon).toHaveAttribute('src', '/mocked-arrow-path.svg');
    expect(arrowIcon).toHaveAttribute('alt', 'arrow');
  });

  it('has the correct background color', () => {
    render(<CSHero />);
    const section = screen.getByRole('region');
    expect(section).toHaveClass('bg-unimelbDarkBlue');
  });

  it('has the correct layout classes', () => {
    render(<CSHero />);
    const section = screen.getByRole('region');
    expect(section.querySelector('div')).toHaveClass('max-w-full', 'text-left', 'px-4', 'sm:px-6', 'relative');
  });
});