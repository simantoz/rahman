import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    dot.style.display = 'block'
    ring.style.display = 'block'

    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15
      ring.style.left = `${ringPos.current.x}px`
      ring.style.top = `${ringPos.current.y}px`
      requestAnimationFrame(animate)
    }

    const onPointerEnter = () => {
      dot.classList.add('hover')
      ring.classList.add('hover')
    }

    const onPointerLeave = () => {
      dot.classList.remove('hover')
      ring.classList.remove('hover')
    }

    const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea, .glass-card')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onPointerEnter)
      el.addEventListener('mouseleave', onPointerLeave)
    })

    window.addEventListener('mousemove', onMove)
    const rAF = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rAF)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ display: 'none' }} />
      <div ref={ringRef} className="cursor-ring" style={{ display: 'none' }} />
    </>
  )
}
