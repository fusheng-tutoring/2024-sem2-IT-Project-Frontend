import './css/style.css'

import { Inter, Nothing_You_Could_Do } from 'next/font/google';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import MainApp from './mainApp';

import ChatBot from '@/components/chatbox/chatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'The University of Melbourne Handbook',
  description: 'The University of Melbourne Handbook',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${nycd.variable} font-inter antialiased bg-white text-gray-800 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <MainApp>
            {children}
          </MainApp>
          <Footer />
          <ChatBot />
        </div>
      </body>
    </html>
  )
}
