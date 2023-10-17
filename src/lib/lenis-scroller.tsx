'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

const scrollOptions = {
  duration: 1.2,
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  smoothTouch: false,
  touchMultiplier: 2,
}

export function LenisScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root {...scrollOptions}>
      {children}
    </ReactLenis>
  )
}
