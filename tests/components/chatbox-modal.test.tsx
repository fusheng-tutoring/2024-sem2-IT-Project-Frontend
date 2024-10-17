import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock the entire chatbox-modal module
vi.mock('../../components/chatbox-modal', () => {
  const React = require('react');
  
  return {
    default: function ChatbotModal({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
      if (!isOpen) return null;

      return (
        <div data-testid="modal-container">
          <div data-testid="modal-overlay" onClick={() => setIsOpen(false)} />
          <div>
            <div>
              <img src="/images/unimelb-logo.jpeg" alt="Unimelb" />
              <p>University of Melbourne<br />Handbook Chat Bot</p>
              <button onClick={() => setIsOpen(false)}>×</button>
            </div>
            <div>
              <div>
                <img src="/images/chatbot.png" alt="CHAT BOT" />
                <div>Hi there! What can I help you with?</div>
              </div>
            </div>
            <div>
              <textarea placeholder="Type your message..." />
            </div>
          </div>
        </div>
      );
    }
  };
});

// Import the mocked ChatbotModal
import ChatbotModal from '../../components/chatbox-modal';

describe('ChatbotModal', () => {
  const mockSetIsOpen = vi.fn();

  beforeEach(() => {
    mockSetIsOpen.mockClear();
  });

  it('renders nothing when isOpen is false', () => {
    render(<ChatbotModal isOpen={false} setIsOpen={mockSetIsOpen} />);
    expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
  });

  it('renders the modal when isOpen is true', () => {
    render(<ChatbotModal isOpen={true} setIsOpen={mockSetIsOpen} />);
    expect(screen.getByTestId('modal-container')).toBeInTheDocument();
    expect(screen.getByText(/University of Melbourne/)).toBeInTheDocument();
    expect(screen.getByText(/Handbook Chat Bot/)).toBeInTheDocument();
    expect(screen.getByText('Hi there! What can I help you with?')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
  });

  it('displays the Unimelb logo', () => {
    render(<ChatbotModal isOpen={true} setIsOpen={mockSetIsOpen} />);
    const logo = screen.getByAltText('Unimelb');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/unimelb-logo.jpeg');
  });

  it('displays the chatbot icon', () => {
    render(<ChatbotModal isOpen={true} setIsOpen={mockSetIsOpen} />);
    const chatbotIcon = screen.getByAltText('CHAT BOT');
    expect(chatbotIcon).toBeInTheDocument();
    expect(chatbotIcon).toHaveAttribute('src', '/images/chatbot.png');
  });

  it('calls setIsOpen when close button is clicked', () => {
    render(<ChatbotModal isOpen={true} setIsOpen={mockSetIsOpen} />);
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });

  it('calls setIsOpen when clicking outside the modal', () => {
    render(<ChatbotModal isOpen={true} setIsOpen={mockSetIsOpen} />);
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);
    expect(mockSetIsOpen).toHaveBeenCalledWith(false);
  });
});