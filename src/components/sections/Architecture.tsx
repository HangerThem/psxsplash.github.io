import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, Layers, Monitor } from "lucide-react"

import { SpotlightCard } from "@/components/common"
import { Section } from "@/components/sections"
import { itemVariants } from "@/utils/animations"
import { cn } from "@/utils/cn"

const parts = [
  {
    icon: Monitor,
    iconColor: "text-primary-light",
    iconBg: "bg-primary/10",
    title: "SplashEdit",
    type: "Unity Package",
    description:
      "Editor tools, scene exporters, inspectors, texture quantization, VRAM packing, Lua compilation, and the Control Panel.",
    features: [
      "Scene & object exporters",
      "Texture atlas & VRAM manager",
      "Cutscene & animation editors",
      "UI canvas designer",
      "One-click build pipeline",
    ],
  },
  {
    icon: Layers,
    iconColor: "text-accent-light",
    iconBg: "bg-accent/10",
    title: "psxsplash",
    type: "C++ Runtime",
    description:
      "PS1 runtime that loads and runs the exported scenes. Built with a custom software renderer and OpenGL for modern features.",
    features: [
      "GTE-accelerated 3D renderer",
      "Room/portal & BVH culling",
      "SPU audio playback",
      "Embedded Lua VM",
      "Navigation mesh traversal",
    ],
  },
]

function Architecture() {
  return (
    <Section id="how-it-works">
      <Section.Pill>Architecture</Section.Pill>
      <Section.Title>Two Parts, One Workflow</Section.Title>
      <Section.Description>
        SplashEdit is a Unity package for editing. psxsplash is the C++ PS1
        runtime. You only touch Unity — the rest is automatic.
      </Section.Description>
      <div className="flex gap-8 items-center mt-16 flex-col md:flex-row px-4">
        {parts.map((part, index) => (
          <>
            <SpotlightCard key={part.title}>
              <div
                className={cn(
                  "p-3 w-fit rounded-lg flex items-center justify-center mb-4",
                  part.iconBg,
                )}
              >
                <part.icon className={part.iconColor} size={32} />
              </div>

              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold mb-1">{part.title}</h3>
                <span className="text-xs text-text-dim bg-border px-2 py-1 rounded-full tracking-wide">
                  {part.type}
                </span>
              </div>

              <p className="mt-4 text-text-dim">{part.description}</p>

              <ul className="mt-6 space-y-4">
                {part.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <ArrowRight className="text-primary-light" size={16} />
                    <span className="text-sm text-text-dim">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://github.com/psxsplash/splashedit"
                className="inline-flex items-center gap-2 mt-6 text-primary-light font-sm hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ArrowRight size={16} />
              </a>
            </SpotlightCard>
            {index < parts.length - 1 && (
              <motion.span variants={itemVariants({ from: "left" })}>
                <ArrowRight
                  size={32}
                  className="hidden md:block text-text-dim"
                />
                <ArrowDown
                  size={32}
                  className="block md:hidden text-text-dim"
                />
              </motion.span>
            )}
          </>
        ))}
      </div>
    </Section>
  )
}

export { Architecture }
