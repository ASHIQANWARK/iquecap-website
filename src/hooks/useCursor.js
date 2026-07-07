import { useEffect, useRef } from 'react'

const useCursor = (enabled) => {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
    
    // Don't enable cursor on touch devices or if explicitly disabled
    if (!enabled || isTouchDevice) {
      // Remove any existing cursor elements
      const existingCursor = document.querySelector('.custom-cursor')
      const existingRing = document.querySelector('.custom-cursor-ring')
      if (existingCursor) existingCursor.remove()
      if (existingRing) existingRing.remove()
      document.body.classList.add('touch-device')
      return
    }

    // Remove any existing cursor elements first
    const existingCursor = document.querySelector('.custom-cursor')
    const existingRing = document.querySelector('.custom-cursor-ring')
    if (existingCursor) existingCursor.remove()
    if (existingRing) existingRing.remove()

    // Create cursor elements
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    cursor.style.cssText = `
      width: 10px;
      height: 10px;
      background: #00E676;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.15s ease;
      mix-blend-mode: exclusion;
      will-change: transform;
    `

    const ring = document.createElement('div')
    ring.className = 'custom-cursor-ring'
    ring.style.cssText = `
      width: 34px;
      height: 34px;
      border: 1px solid #00B894;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9998;
      transition: all 0.2s ease;
      opacity: 0.45;
      will-change: transform;
    `

    document.body.appendChild(cursor)
    document.body.appendChild(ring)
    document.body.classList.remove('touch-device')

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0
    let animationId = null

    const onMouseMove = (e) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx - 5 + 'px'
      cursor.style.top = my - 5 + 'px'
    }

    const animate = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx - 17 + 'px'
      ring.style.top = ry - 17 + 'px'
      animationId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    // Interactive elements hover effects
    const interactiveElements = document.querySelectorAll(
      'button, a, .region-card, .blog-card, .sector-item, .orb-node, .nav-cta, .btn-primary, .btn-ghost'
    )

    const onEnter = () => {
      cursor.style.transform = 'scale(2.2)'
      ring.style.transform = 'scale(1.6)'
      ring.style.borderColor = '#00E676'
      ring.style.opacity = '0.8'
    }

    const onLeave = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
      ring.style.borderColor = '#00B894'
      ring.style.opacity = '0.45'
    }

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      if (animationId) cancelAnimationFrame(animationId)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor)
      if (ring.parentNode) ring.parentNode.removeChild(ring)
    }
  }, [enabled])

  return { cursorRef, ringRef }
}

export default useCursor