'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Props {
  beforeImg: string
  afterImg: string
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfterSlider({ beforeImg, afterImg, beforeLabel = 'Before', afterLabel = 'After' }: Props) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(Math.max(pct, 2), 98))
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none cursor-ew-resize"
      style={{ userSelect: 'none' }}
      onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX) }}
      onMouseMove={(e) => { if (isDragging.current) updatePosition(e.clientX) }}
      onMouseUp={() => { isDragging.current = false }}
      onMouseLeave={() => { isDragging.current = false }}
      onTouchStart={(e) => { isDragging.current = true; updatePosition(e.touches[0].clientX) }}
      onTouchMove={(e) => { if (isDragging.current) updatePosition(e.touches[0].clientX) }}
      onTouchEnd={() => { isDragging.current = false }}
    >
      {/* After (full width base) */}
      <Image src={afterImg} alt={afterLabel} width={800} height={500} className="w-full object-cover h-80 pointer-events-none" />

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${position}%` }}>
        <Image src={beforeImg} alt={beforeLabel} width={800} height={500}
          className="object-cover h-80 pointer-events-none"
          style={{ width: `${10000 / position}%`, maxWidth: 'none' }} />
      </div>

      {/* Divider line */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-gold shadow-gold-glow pointer-events-none" style={{ left: `${position}%` }}>
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-lg cursor-ew-resize pointer-events-auto"
          whileHover={{ scale: 1.1 }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-concrete-900">
            <path d="M7 8l-4 4 4 4M17 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="font-display text-white text-xs uppercase tracking-widest bg-concrete/70 px-3 py-1">{beforeLabel}</span>
      </div>
      <div className="absolute top-4 right-4 pointer-events-none">
        <span className="font-display text-white text-xs uppercase tracking-widest bg-concrete/70 px-3 py-1">{afterLabel}</span>
      </div>
    </div>
  )
}
