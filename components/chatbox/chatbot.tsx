'use client'

import Image from 'next/image';
import { useState } from 'react';

import CHATBOT_ICON from '@/public/images/chatbot.png';
import ChatbotModal from '../chatbox-modal';

export default function ChatBot() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {!isModalOpen && (
        <button
          title='Chat BOT'
          type='button'
          className="fixed right-4 bottom-4 z-50 cursor-pointer transition-opacity duration-300"
          onClick={() => { setIsModalOpen(!isModalOpen) }}
        >
          <Image
            src={CHATBOT_ICON}
            alt="Fixed image"
            className="w-20 h-auto rounded-full"
            priority
          />
        </button>
      )}

      <ChatbotModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  )
}
