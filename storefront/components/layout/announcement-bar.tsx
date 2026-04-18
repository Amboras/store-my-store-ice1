'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const MESSAGES = [
  '✨ FREE SHIPPING OVER $75',
  '🔥 NEW DROPS WEEKLY',
  '💸 STUDENT DISCOUNT INSIDE',
  '🌈 SHOP THE FUNKY COLLECTION',
  '⚡ LIMITED EDITIONS',
  '💖 MADE WITH LOVE',
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  // Duplicate the strip so the marquee loops seamlessly
  const strip = [...MESSAGES, ...MESSAGES]

  return (
    <div className="relative bg-funky-stripes border-b-[3px] border-foreground overflow-hidden">
      <div className="bg-foreground text-background">
        <div className="relative flex overflow-hidden py-2.5 text-sm font-bold uppercase tracking-widest">
          <div className="flex animate-marquee whitespace-nowrap">
            {strip.map((msg, i) => (
              <span key={i} className="mx-8 flex items-center gap-3">
                {msg}
                <span className="text-funky-yellow">✦</span>
              </span>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {strip.map((msg, i) => (
              <span key={`dup-${i}`} className="mx-8 flex items-center gap-3">
                {msg}
                <span className="text-funky-yellow">✦</span>
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity z-10"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
