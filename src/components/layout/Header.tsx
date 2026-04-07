import { ChevronsRightLeft, Download } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui"
import { containerVariants, itemVariantsBottom } from "@/utils/animations"

const features = [
  { title: "Lua", description: "Scripting" },
  { title: "1-Click", description: "Build & Run" },
  { title: "Real HW", description: "+ Emulator" },
]

function Header() {
  const [numOfClicks, setNumOfClicks] = useState(0)
  const [revealValue, setRevealValue] = useState(50)

  const previewRef = useRef<HTMLDivElement | null>(null)
  const isDraggingRef = useRef(false)

  const setRevealFromClientX = (clientX: number) => {
    const rect = previewRef.current?.getBoundingClientRect()
    if (!rect) return

    const percent = ((clientX - rect.left) / rect.width) * 100
    const clamped = Math.max(0, Math.min(100, percent))
    setRevealValue(clamped)
  }

  useEffect(() => {
    if (numOfClicks >= 10) {
      document.body.style.cursor =
        "url('assets/images/easter-egg.png') 8 8, auto"
      const audio = new Audio("assets/sounds/easter-egg.mp3")
      audio.play()
    }
  }, [numOfClicks])

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current) return
      setRevealFromClientX(e.clientX)
    }

    const onPointerUp = () => {
      isDraggingRef.current = false
    }

    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)

    return () => {
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
    }
  }, [])

  return (
    <header className="w-full mt-18">
      <div className="hero-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute opacity-15 -top-1/10 left-1/5 h-150 w-150 rounded-full bg-primary blur-[120px]"
      />

      <motion.div
        className="flex flex-col items-center py-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={itemVariantsBottom}
          className="text-sm text-primary-light border border-primary-light/25 bg-primary-light/10 rounded-full px-4 py-2 select-none"
          onClick={() => setNumOfClicks((v) => v + 1)}
        >
          PlayStation 1 Development
        </motion.span>

        <motion.h1
          variants={itemVariantsBottom}
          className="text-5xl md:text-[5rem] tracking-tighter leading-none font-black text-center my-8"
        >
          Build <span className="hero-accent">PS1 Games</span>
          <br />
          in Unity
        </motion.h1>

        <motion.p
          variants={itemVariantsBottom}
          className="text-xl text-center max-w-lg text-text-dim px-4"
        >
          Design scenes in Unity&apos;s editor. Write game logic in Lua. Export
          to real PlayStation 1 hardware or emulator with a single click.
        </motion.p>

        <motion.div
          variants={itemVariantsBottom}
          className="flex flex-col items-center md:flex-row gap-4 my-10"
        >
          <Button
            href="https://github.com/psxsplash/splashedit/releases"
            size="lg"
          >
            <Download className="mr-2" size={18} />
            Download splashedit
          </Button>
          <Button
            href="https://psxsplash.github.io/docs/latest/getting-started/quick-start/"
            size="lg"
            variant="outline"
          >
            Quick Start Guide
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariantsBottom}
          className="flex items-center gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariantsBottom}
              className="flex items-center gap-6"
            >
              <div className="flex flex-col items-center">
                <h2 className="text-lg font-bold">{feature.title}</h2>
                <span className="text-sm text-text-dim">
                  {feature.description}
                </span>
              </div>
              {index < features.length - 1 && (
                <span className="w-px h-8 bg-border-light" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariantsBottom}
          className="w-full max-w-5xl px-4 my-12"
        >
          <div
            ref={previewRef}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border-light bg-black/30"
          >
            <img
              src="assets/images/psx.png"
              alt="PS1 scene preview"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <span className="absolute top-4 right-4 uppercase text-sm font-semibold bg-accent-dark rounded-full px-3 py-1 text-white">
              PlayStation 1
            </span>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - revealValue}% 0 0)` }}
            >
              <img
                src="assets/images/unity.png"
                alt="PS1 wireframe preview"
                className="h-full w-full object-cover"
              />
              <span className="absolute top-4 left-4 uppercase text-sm font-semibold bg-primary rounded-full px-3 py-1 text-white">
                Unity Editor
              </span>
            </div>

            <div
              className="absolute inset-y-0 z-10 w-8 -translate-x-1/2 cursor-col-resize touch-none"
              style={{ left: `${revealValue}%` }}
              onPointerDown={(e) => {
                e.preventDefault()
                isDraggingRef.current = true
                setRevealFromClientX(e.clientX)
              }}
              aria-label="Reveal handle"
              role="slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(revealValue)}
            >
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/80" />
              <div className="flex items-center justify-center absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                <ChevronsRightLeft size={28} className="text-black" />
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-md text-text-dim">
            Move the handle to reveal the magic of psxsplash
          </p>
        </motion.div>
      </motion.div>
    </header>
  )
}

export { Header }
