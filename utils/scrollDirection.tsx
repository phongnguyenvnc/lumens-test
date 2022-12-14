import { useEffect, useState } from 'react'
import { delay } from './utils'

export const SCROLL_DIRECTION = {
  UP: 'up',
  DOWN: 'down'
}

export const useScrollDirection = (ref: any) => {
  const threshold = 10
  const debounce = 100
  const scrollHeightThreshold = 0
  const [scrollDir, setScrollDir] = useState(SCROLL_DIRECTION.UP)

  useEffect(() => {
    let lastScrollY = ref?.current?.scrollTop
    let lastScrollDir: string
    let ticking = false
    const hasScrollHeightThreshold =
      ref?.current?.scrollHeight - ref?.current?.clientHeight >
      scrollHeightThreshold

    const updateScrollDir = async () => {
      const scrollY = ref?.current?.scrollTop
      if (
        Math.abs(scrollY - lastScrollY) < threshold ||
        !hasScrollHeightThreshold
      ) {
        ticking = false
        return
      }
      const newScroll = scrollY > lastScrollY ? SCROLL_DIRECTION.DOWN : SCROLL_DIRECTION.UP
      if (newScroll !== lastScrollDir) {
        await delay(debounce)
        setScrollDir(newScroll)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
      lastScrollDir = newScroll
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    ref?.current?.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [ref])

  return scrollDir
}
