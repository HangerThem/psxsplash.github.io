import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { itemVariants } from "@/utils/animations"

const GLOW_COLOR = "124, 58, 174"

function SpotlightCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(-999)
  const rawY = useMotionValue(-999)

  const x = useSpring(rawX, { stiffness: 180, damping: 24, mass: 0.5 })
  const y = useSpring(rawY, { stiffness: 180, damping: 24, mass: 0.5 })

  const opacity = useMotionValue(0)
  const springOpacity = useSpring(opacity, { stiffness: 120, damping: 20 })

  const blobGradient = useTransform(
    [x, y],
    ([cx, cy]: number[]) =>
      `radial-gradient(500px circle at ${cx}px ${cy}px, rgba(${GLOW_COLOR}, 0.10), transparent 65%)`,
  )

  const borderGradient = useTransform(
    [x, y],
    ([cx, cy]: number[]) =>
      `radial-gradient(280px circle at ${cx}px ${cy}px, rgba(${GLOW_COLOR}, 0.75), transparent 55%)`,
  )

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    rawX.set(e.clientX - rect.left)
    rawY.set(e.clientY - rect.top)
  }

  function handleMouseEnter() {
    opacity.set(1)
  }

  function handleMouseLeave() {
    opacity.set(0)
    setTimeout(() => {
      rawX.set(-999)
      rawY.set(-999)
    }, 300)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants({ from: "left" })}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative border border-border rounded-2xl p-8 bg-bg-card flex-1 min-h-0 overflow-hidden group"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl z-0"
        style={{
          background: blobGradient,
          opacity: springOpacity,
        }}
      />

      <motion.div
        aria-hidden
        className="card-border-highlight pointer-events-none absolute inset-0 rounded-2xl p-px z-2"
        style={{
          background: borderGradient,
          opacity: springOpacity,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export { SpotlightCard }
