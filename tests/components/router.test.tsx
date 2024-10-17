import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Faculty from '../../app/(default)/home-section/faculty'
import Page from "../../app/(science)/science/page"

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: ({ src, alt }: { src: string, alt: string }) => <img src={src} alt={alt} data-testid="next-image" />
}))

// Mock Next.js Link component
const mockPush = vi.fn()
vi.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode, href: string }) => (
    <a href={href} onClick={() => mockPush(href)}>
      {children}
    </a>
  ),
}))

describe('Faculty component', () => {
  it('renders correctly', () => {
    render(<Faculty />)
    
    // Check if images are rendered
    const images = screen.getAllByTestId('next-image')
    expect(images).toHaveLength(2)
    
    // Check the first image
    expect(images[0]).toHaveAttribute('src', '/public/images/unimelb-others.png')
    expect(images[0]).toHaveAttribute('alt', 'Unimelb')
    
    // Check the second image
    expect(images[1]).toHaveAttribute('src', '/public/images/unimelb-main.png')
    expect(images[1]).toHaveAttribute('alt', 'Unimelb')
    
    // Check if the link is rendered
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/science')
  })
})

describe('Page component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('navigates to cs when "Learn More" is clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    )

    // Find all "Learn More" buttons and click the first one
    const learnMoreButtons = screen.getAllByText("Learn More")
    await user.click(learnMoreButtons[0])

    // Check if the mockPush was called with the correct path
    expect(mockPush).toHaveBeenCalledWith('cs')
  })

  it('renders the correct number of "Learn More" buttons', () => {
    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>
    )

    const learnMoreButtons = screen.getAllByText("Learn More")
    expect(learnMoreButtons).toHaveLength(12)
  })
})