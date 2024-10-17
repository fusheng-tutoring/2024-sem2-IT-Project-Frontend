import { vi } from 'vitest'
import React from 'react'

// Mock specific image imports
vi.mock('@/public/images/unimelb-main.png', () => ({
  default: { src: 'mocked-unimelb-main-image-url' }
}))

vi.mock('@/public/images/unimelb-others.png', () => ({
  default: { src: 'mocked-unimelb-others-image-url' }
}))

vi.mock('@/public/images/science-0.png', () => ({
  default: { src: 'mocked-science-0-image-url' }
}))

// Mock next/image
vi.mock('next/image', () => ({
  __esModule: true,
  default: vi.fn().mockImplementation(
    ({ src, alt, ...props }: { src: string; alt: string }) => 
      React.createElement('img', { src, alt, ...props })
  )
}))

// Mock next/link
vi.mock('next/link', () => ({
  __esModule: true,
  default: vi.fn().mockImplementation(
    ({ href, children }: { href: string; children: React.ReactNode }) => 
      React.createElement('a', { href }, children)
  )
}))

// Mock useRouter
vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
    pathname: '',
  }),
}))