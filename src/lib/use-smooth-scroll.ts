import { useEffect, useRef } from 'react'

export const useSmoothScrollTo = (id: unknown) => {
  const ref = useRef(null)

  useEffect(() => {
    const listener = (e) => {
      if (ref.current && location.hash === id) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', listener, true)
    return () => {
      window.removeEventListener('hashchange', listener)
    }
  }, [id])

  return {
    'data-anchor-id': id,
    ref,
  }
}
