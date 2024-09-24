'use client'

import { useEffect } from 'react'

const Sticky = require('sticky-js')

export default function MainApp({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    const stickyEls = document.querySelectorAll('[data-sticky]');
    if (stickyEls.length > 0) {
      const sticky = new Sticky('[data-sticky]');
    }
  })

  return (
    <main className="grow">
      {children}
    </main>
  )
}
