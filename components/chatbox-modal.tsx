'use client'

import Image from 'next/image';
import { ModalProps } from './types';
import UNIMELB from '@/public/images/unimelb-logo.jpeg';
import CHATBOT_ICON from '@/public/images/chatbot.png'; // Make sure this path is correct
import { useEffect, useRef } from 'react';

export default function ChatbotModal({
  isOpen,
  setIsOpen
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
          } z-40`}
        onClick={() => setIsOpen(false)}
      />
      <div
        ref={modalRef}
        className={`fixed bottom-0 right-0 w-100 h-96 bg-white shadow-lg rounded-tl-lg flex flex-col z-50 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between bg-unimelbBlue text-white p-2 px-6">
          <Image className="w-12 h-auto" priority src={UNIMELB} alt="Unimelb" />
          <p className="text-sm leading-tight text-center">
            University of Melbourne<br />
            Handbook Chat Bot
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-300 text-xl scale-150"
          >
            ×
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4">
          <div className="flex gap-4 items-start mb-4">
            <Image className="w-8 h-auto" alt="CHAT BOT" src={CHATBOT_ICON} priority />
            <div className="text-sm p-2 rounded-lg bg-messageBackgroundColor">
              Hi there! What can I help you with?
            </div>
          </div>
        </div>

        <div className="p-4 border-t">
          <textarea
            className="w-full p-2 border rounded-lg resize-none bg-messageBackgroundColor"
            placeholder="Type your message..."
            rows={1}
          />
        </div>
      </div>
    </>
  )
}