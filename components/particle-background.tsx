"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
    }> = []

    const colors = ["#00FF88", "#ff33cc", "#8e2de2", "#00d4ff"]

    // Adjust particle count based on screen size
    const getParticleCount = () => {
      const width = window.innerWidth
      if (width < 640) return 30 // Mobile (sm)
      if (width < 768) return 50 // Tablet (md)
      if (width < 1024) return 70 // Small desktop (lg)
      return 100 // Large desktop
    }

    // Adjust connection distance based on screen size
    const getConnectionDistance = () => {
      const width = window.innerWidth
      if (width < 640) return 60 // Shorter connections on mobile
      if (width < 768) return 80 // Medium connections on tablet
      return 100 // Full connections on desktop
    }

    const createParticles = () => {
      particles.length = 0 // Clear existing particles
      const particleCount = getParticleCount()

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (window.innerWidth < 640 ? 0.3 : 0.5), // Slower on mobile
          vy: (Math.random() - 0.5) * (window.innerWidth < 640 ? 0.3 : 0.5), // Slower on mobile
          size: Math.random() * (window.innerWidth < 640 ? 2 : 3) + 1, // Smaller on mobile
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
    }

    createParticles()

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const connectionDistance = getConnectionDistance()

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.shadowBlur = window.innerWidth < 640 ? 5 : 10 // Reduced glow on mobile
        ctx.shadowColor = particle.color
        ctx.fill()
      })

      // Draw connections (reduced on mobile for performance)
      if (window.innerWidth >= 640) {
        // Only show connections on larger screens
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = `rgba(0, 255, 136, ${0.1 * (1 - distance / connectionDistance)})`
              ctx.stroke()
            }
          })
        })
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createParticles() // Recreate particles with new count based on new screen size
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ background: "transparent" }} />
}
