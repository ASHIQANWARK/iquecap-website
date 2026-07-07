// hooks/useCursor.js

import { useEffect, useRef } from 'react'

const useCursor = (enabled) => {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Check if it's a touch device (mobile, tablet, etc.)
    const isTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      )
    }

    const isMobile = isTouchDevice()
    
    // Don't enable cursor on touch devices or if explicitly disabled
    if (!enabled || isMobile) {
      // Remove any existing cursor elements
      const existingCursor = document.querySelector('.custom-cursor')
      const existingRing = document.querySelector('.custom-cursor-ring')
      if (existingCursor) existingCursor.remove()
      if (existingRing) existingRing.remove()
      
      // Add touch-device class for any CSS adjustments
      document.body.classList.add('touch-device')
      document.body.classList.remove('desktop-device')
      
      // Reset cursor style for touch devices
      document.body.style.cursor = 'auto'
      
      return
    }

    // Remove any existing cursor elements first
    const existingCursor = document.querySelector('.custom-cursor')
    const existingRing = document.querySelector('.custom-cursor-ring')
    if (existingCursor) existingCursor.remove()
    if (existingRing) existingRing.remove()

    // Add desktop class
    document.body.classList.add('desktop-device')
    document.body.classList.remove('touch-device')

    // Hide default cursor on desktop
    document.body.style.cursor = 'none'

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
      transition: transform 0.15s ease, opacity 0.3s ease;
      mix-blend-mode: exclusion;
      will-change: transform;
      opacity: 0;
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
      opacity: 0;
      will-change: transform;
    `

    document.body.appendChild(cursor)
    document.body.appendChild(ring)

    // Fade in after a small delay
    setTimeout(() => {
      cursor.style.opacity = '1'
      ring.style.opacity = '0.45'
    }, 100)

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0
    let animationId = null
    let isHovering = false

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

    // Mouse leave window - hide cursor
    const onMouseLeaveWindow = () => {
      cursor.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const onMouseEnterWindow = () => {
      cursor.style.opacity = '1'
      ring.style.opacity = isHovering ? '0.8' : '0.45'
    }

    document.addEventListener('mouseleave', onMouseLeaveWindow)
    document.addEventListener('mouseenter', onMouseEnterWindow)

    // Interactive elements hover effects
    const interactiveElements = document.querySelectorAll(
      'button, a, .region-card, .blog-card, .sector-item, .orb-node, .nav-cta, .btn-primary, .btn-ghost, .contact-item, .value-card, .blog-card, .region-highlight, .sector-pill, .form-submit'
    )

    const onEnter = () => {
      isHovering = true
      cursor.style.transform = 'scale(2.2)'
      ring.style.transform = 'scale(1.6)'
      ring.style.borderColor = '#00E676'
      ring.style.opacity = '0.8'
    }

    const onLeave = () => {
      isHovering = false
      cursor.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
      ring.style.borderColor = '#00B894'
      ring.style.opacity = '0.45'
    }

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // Also handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(
        'button, a, .region-card, .blog-card, .sector-item, .orb-node, .nav-cta, .btn-primary, .btn-ghost, .contact-item, .value-card, .blog-card, .region-highlight, .sector-pill, .form-submit'
      )
      newElements.forEach(el => {
        if (!el._cursorListener) {
          el.addEventListener('mouseenter', onEnter)
          el.addEventListener('mouseleave', onLeave)
          el._cursorListener = true
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeaveWindow)
      document.removeEventListener('mouseenter', onMouseEnterWindow)
      if (animationId) cancelAnimationFrame(animationId)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        delete el._cursorListener
      })
      
      observer.disconnect()
      
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor)
      if (ring.parentNode) ring.parentNode.removeChild(ring)
      
      // Reset cursor
      document.body.style.cursor = 'auto'
      document.body.classList.remove('desktop-device')
    }
  }, [enabled])

  return { cursorRef, ringRef }
}

export default useCursor