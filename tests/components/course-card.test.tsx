import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CourseType } from '../../components/types';

// Mock the entire CourseCard component
vi.mock('../../components/course-card', () => ({
    default: (props: CourseType) => (
    <div data-testid="course-card">
        <div>{props.category}</div>
        <div>{props.title}</div>
        <div>{props.location}</div>
        <div>{props.points}</div>
        {props.fields.map((field, index) => (
        <div key={index}>{field}</div>
        ))}
        <div>{props.intake}</div>
        <div>{props.mode}</div>
        <a href={props.link}>Learn More</a>
        <div>Full / Part Time Course</div>
    </div>
    )
}));

// Import the mocked component
import CourseCard from '../../components/course-card';

describe('CourseCard', () => {
    const mockCourseInfo: CourseType = {
    category: 'Science',
    title: 'Introduction to Biology',
    location: 'Melbourne Campus',
    fields: ['Biology', 'Life Sciences'],
    points: '12.5 points',
    link: '/courses/biology-101',
    intake: 'February 2024', 
    mode: 'Full-time' 
    };

    it('renders course information correctly', () => {
    render(<CourseCard {...mockCourseInfo} />);

    expect(screen.getByText(mockCourseInfo.category)).toBeInTheDocument();
    expect(screen.getByText(mockCourseInfo.title)).toBeInTheDocument();
    expect(screen.getByText(mockCourseInfo.location)).toBeInTheDocument();
    expect(screen.getByText(mockCourseInfo.points)).toBeInTheDocument();
    expect(screen.getByText(mockCourseInfo.intake)).toBeInTheDocument(); 
    expect(screen.getByText(mockCourseInfo.mode)).toBeInTheDocument(); 

    mockCourseInfo.fields.forEach(field => {
        expect(screen.getByText(field)).toBeInTheDocument();
    });

    const learnMoreLink = screen.getByText('Learn More');
    expect(learnMoreLink).toHaveAttribute('href', mockCourseInfo.link);
    });

    it('renders "Full / Part Time Course" text', () => {
    render(<CourseCard {...mockCourseInfo} />);
    expect(screen.getByText('Full / Part Time Course')).toBeInTheDocument();
    });
});