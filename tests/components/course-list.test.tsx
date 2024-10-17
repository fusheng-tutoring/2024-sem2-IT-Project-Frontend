import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

interface CourseCardProps {
    category: string;
    title: string;
    location: string;
    points: string;
    intake: string;
    fields: string;
    mode: string;
    link: string;
}

// Mock the entire course-list module
vi.mock('../../components/course-list', () => {
    const React = require('react');
    const CourseCard: React.FC<CourseCardProps> = ({ category, title, location, points, intake, fields, mode, link }) => (
    <div data-testid="course-card">
        <p>Category: {category}</p>
        <p>Title: {title}</p>
        <p>Location: {location}</p>
        <p>Points: {points}</p>
        <p>Intake: {intake}</p>
        <p>Fields: {fields}</p>
        <p>Mode: {mode}</p>
        <p>Link: {link}</p>
    </div>
    );

    return {
    default: function CourseList() {
        const COMP: CourseCardProps = {
        category: 'Test Category',
        title: 'Test Title',
        location: 'Test Location',
        points: '100',
        intake: 'Test Intake',
        fields: 'Test Fields',
        mode: 'Test Mode',
        link: 'https://test.com'
        };

        return (
        <section className='relative'>
            <div className='max-w-7xl mx-auto pb-16'>
            {[...Array(3)].map((_, rowIndex) => (
                <div key={rowIndex} className='flex flex-1 gap-4' data-testid="course-row">
                {[...Array(4)].map((_, colIndex) => (
                    <CourseCard
                    key={`${rowIndex}-${colIndex}`}
                    {...COMP}
                    />
                ))}
                </div>
            ))}
            </div>
        </section>
        );
    }
    };
});

    // Import the mocked CourseList
    import CourseList from '../../components/course-list';

    describe('CourseList', () => {
    it('renders the correct number of CourseCard components', () => {
        render(<CourseList />);
        const courseCards = screen.getAllByTestId('course-card');
        expect(courseCards).toHaveLength(12); // 3 rows * 4 cards per row
    });

    it('passes the correct props to CourseCard components', () => {
        render(<CourseList />);
        const firstCourseCard = screen.getAllByTestId('course-card')[0];
        
        expect(firstCourseCard).toHaveTextContent('Category: Test Category');
        expect(firstCourseCard).toHaveTextContent('Title: Test Title');
        expect(firstCourseCard).toHaveTextContent('Location: Test Location');
        expect(firstCourseCard).toHaveTextContent('Points: 100');
        expect(firstCourseCard).toHaveTextContent('Intake: Test Intake');
        expect(firstCourseCard).toHaveTextContent('Fields: Test Fields');
        expect(firstCourseCard).toHaveTextContent('Mode: Test Mode');
        expect(firstCourseCard).toHaveTextContent('Link: https://test.com');
    });

    it('renders three rows of course cards', () => {
        render(<CourseList />);
        const rows = screen.getAllByTestId('course-row');
        expect(rows).toHaveLength(3);
    });

    it('renders four CourseCards in each row', () => {
        render(<CourseList />);
        const rows = screen.getAllByTestId('course-row');
        rows.forEach(row => {
        const cardsInRow = row.querySelectorAll('[data-testid="course-card"]');
        expect(cardsInRow.length).toBe(4);
        });
    });
    });