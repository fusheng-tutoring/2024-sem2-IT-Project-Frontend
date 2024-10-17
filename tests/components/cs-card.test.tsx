import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CSCard from '../../components/major-card';
import { CSType } from '../../components/types';

// Mock Next.js Link component
vi.mock('next/link', () => {
    return {
    __esModule: true,
    default: ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    ),
    };
});

describe('CSCard', () => {
    const mockCSInfo: CSType = {
        "name": "Foundations of Makapaka",
        "code": "MAKA10001",
        "offeredSemesters": ["Semester 1, Semester 2, 2024"],
        "level": "Undergraduate Level 1",
        "creditPoints": 12.5,
        "requisites": false
    };

    it('renders the CS card with correct information', () => {
        render(<CSCard {...mockCSInfo} />);
    
        // Check if the name is rendered and linked correctly
        const nameLink = screen.getByRole('link', { name: mockCSInfo.name });
        expect(nameLink).toBeInTheDocument();
        expect(nameLink).toHaveAttribute('href', '/subject');
    
        // Check if the code is rendered
        expect(screen.getByText(mockCSInfo.code)).toBeInTheDocument();
    
        // Check if offered semesters are rendered
        expect(screen.getByText(mockCSInfo.offeredSemesters.join(', '))).toBeInTheDocument();
    
        // Check if "Requisites Apply" and "Subject" labels are present
        expect(screen.getByText('Requisites Apply')).toBeInTheDocument();
        expect(screen.getByText('Subject')).toBeInTheDocument();

        // Check if level is rendered
        expect(screen.getByText(mockCSInfo.level)).toBeInTheDocument();

        // Check if credit points are rendered
        const creditPointsContainer = screen.getByText((content, element) => {
            return content.includes(`${mockCSInfo.creditPoints}`) && content.includes('credit points');
        });
        expect(creditPointsContainer).toBeInTheDocument();
    
});

    it('renders multiple offered semesters correctly', () => {
    const multiSemesterCSInfo = {
        ...mockCSInfo,
        offeredSemesters: ['Semester 1', 'Semester 2', 'Summer Term'],
    };

    render(<CSCard {...multiSemesterCSInfo} />);

    multiSemesterCSInfo.offeredSemesters.forEach((semester) => {
        expect(screen.getByText(semester)).toBeInTheDocument();
        });
    });
});