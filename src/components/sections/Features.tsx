import {
  Camera,
  Clock,
  Cloud,
  CodeXml,
  FileText,
  Headphones,
  Hexagon,
  House,
  Image,
  Layers,
  Monitor,
  Settings,
} from "lucide-react"

import { Section } from "@/components/sections"
import { SpotlightCard } from "@/components/common"

const features = [
  {
    icon: Image,
    title: "Visual Scene Editing",
    description:
      "Place objects, set up rooms, configure portals, and preview your PS1 scene directly in Unity's editor.",
  },
  {
    icon: Layers,
    title: "Texture Quantization",
    description:
      "Automatic Floyd-Steinberg dithering to 4-bit, 8-bit, or 16-bit color. VRAM packing with texture deduplication.",
  },
  {
    icon: CodeXml,
    title: "Lua Scripting",
    description:
      "Full event-driven scripting API. Entities, camera, UI, audio, cutscenes, persistence, input — all from Lua.",
  },
  {
    icon: Monitor,
    title: "UI System",
    description:
      "Canvases with images, text, progress bars, and custom bitmap fonts. Full Lua control over visibility, color, and position.",
  },
  {
    icon: Camera,
    title: "Cutscenes & Animations",
    description:
      "Keyframed tracks with easing. Camera, object, UI, and FOV control. Audio events. Editor preview with scrubbing.",
  },
  {
    icon: Headphones,
    title: "PS1 Audio",
    description:
      "Automatic conversion to SPU ADPCM format. 24 simultaneous voices with volume and panning control.",
  },
  {
    icon: Clock,
    title: "Navigation Mesh",
    description:
      "Auto-generated nav mesh via DotRecast. Player walking, collision with static and dynamic objects, trigger volumes.",
  },
  {
    icon: House,
    title: "Room/Portal Culling",
    description:
      "Interior occlusion system with per-room cells and indexed portal references. Only visible rooms are rendered.",
  },
  {
    icon: Settings,
    title: "One-Click Build",
    description:
      "Build to PCSX-Redux emulator, real hardware via serial (Unirom), or a full ISO disc image. All from one button.",
  },
  {
    icon: FileText,
    title: "Multi-Scene Support",
    description:
      "Multiple scenes with seamless loading. Persistent key-value storage survives scene transitions. Loading screens included.",
  },
  {
    icon: Hexagon,
    title: "Vertex Color Modes",
    description:
      "Choose baked lighting, flat color, or mesh vertex colors per object. Full control over your PS1 art style.",
  },
  {
    icon: Cloud,
    title: "Distance Fog",
    description:
      "Silent Hill-style two-pass fog with per-vertex blending and additive overlay. Customizable density and color.",
  },
]

function Features() {
  return (
    <Section id="features">
      <Section.Pill>Features</Section.Pill>
      <Section.Title>Everything You Need</Section.Title>
      <Section.Description>
        From scene design to disc image — SplashEdit covers the full PS1
        development pipeline.
      </Section.Description>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 px-4">
        {features.map((feature) => (
          <SpotlightCard key={feature.title}>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 w-fit rounded-lg bg-primary/10">
                <feature.icon className="text-primary-light" size={28} />
              </div>
              <h2 className="text-lg font-bold">{feature.title}</h2>
            </div>
            <p className="text-sm text-text-dim">{feature.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  )
}

export { Features }
