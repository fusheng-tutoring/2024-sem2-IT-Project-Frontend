import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CSSidebar from "../../components/major-sidebar";
import { SUBJECT_TAB } from '../../components/constant';

describe('CSSidebar', () => {
    const mockSetCurTab = vi.fn();

    it('renders all tabs from SUBJECT_TAB', () => {
        render(<CSSidebar curTab={SUBJECT_TAB[0]} setCurTab={mockSetCurTab} />);
        
        SUBJECT_TAB.forEach((tab) => {
            expect(screen.getByText(tab)).toBeInTheDocument();
        });
    });

    it('highlights the current tab', () => {
        const currentTab = SUBJECT_TAB[0];
        render(<CSSidebar curTab={currentTab} setCurTab={mockSetCurTab} />);
        
        const currentTabElement = screen.getByText(currentTab).closest('li');
        expect(currentTabElement).toHaveClass('bg-tabGreen');
    });
});