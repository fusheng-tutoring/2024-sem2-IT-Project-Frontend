import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import DropdownTemp from '../../components/dropdown-temp';

// Mock the Headless UI components
vi.mock('@headlessui/react', () => ({
  Menu: ({ children }: { children: (props: any) => React.ReactNode }) => children({}),
  MenuButton: ({ children, ...props }: { children: React.ReactNode }) => <button data-testid="menu-button" {...props}>{children}</button>,
  MenuItems: ({ children }: { children: React.ReactNode }) => <div data-testid="menu-items">{children}</div>,
  MenuItem: ({ children }: { children: (props: any) => React.ReactNode }) => children({ active: false }),
  Transition: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('DropdownTemp', () => {
  const title = 'Test Dropdown';

  it('renders with the correct title', () => {
    render(<DropdownTemp title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders the dropdown button with correct aria-label', () => {
    render(<DropdownTemp title={title} />);
    const button = screen.getByTestId('menu-button');
    expect(button).toHaveAttribute('aria-label', 'Select option');
  });

  it('renders the dropdown icon', () => {
    render(<DropdownTemp title={title} />);
    const icon = screen.getByTestId('menu-button').querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders the menu items', () => {
    render(<DropdownTemp title={title} />);
    expect(screen.getByTestId('menu-items')).toBeInTheDocument();
  });

  it('renders the default option', () => {
    render(<DropdownTemp title={title} />);
    expect(screen.getByText('Temp Value')).toBeInTheDocument();
  });

  it('changes selected option when clicked', () => {
    render(<DropdownTemp title={title} />);
    const option = screen.getByText('Temp Value');
    fireEvent.click(option);
    expect(option.parentElement).toHaveClass('text-unimelbScienceBlue');
  });

  it('renders the check icon for the selected option', () => {
    render(<DropdownTemp title={title} />);
    const option = screen.getByText('Temp Value');
    fireEvent.click(option);
    const checkIcon = option.parentElement?.querySelector('svg:not(.invisible)');
    expect(checkIcon).toBeInTheDocument();
  });
});