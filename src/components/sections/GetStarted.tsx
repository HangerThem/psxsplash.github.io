import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Section } from "@/components/sections"

function ArrowForSteps() {
  return <ArrowRight className="inline-block" size={12} strokeWidth={4} />
}

const steps = [
  {
    title: "Install the Package",
    description: (
      <>
        Download the
        <span className="text-sm px-2 py-1 font-mono rounded bg-primary/10 text-primary-light">
          .tgz
        </span>{" "}
        from GitHub Releases. In Unity: <b>Package Manager</b>
        <ArrowForSteps />
        <b>Add package from tarball.</b>
      </>
    ),
  },
  {
    title: "Open the Control Panel",
    description: (
      <>
        <b>PlayStation 1</b> <ArrowForSteps /> <b>SplashEdit Control Panel</b>{" "}
        (Ctrl+Shift+L). This is your central hub.
      </>
    ),
  },
  {
    title: "Install Dependencies",
    description:
      'Click "Install" for each tool in the Dependencies tab. SplashEdit downloads the MIPS compiler, Make, PCSX-Redux, and more.',
  },
  {
    title: "Design Your Scene",
    description:
      "Add a Scene Exporter, place objects with PSXObjectExporter, set up a player, and add your first room.",
  },
  {
    title: "Build & Run",
    description: (
      <>
        Hit the <b>BUILD & RUN</b> button. SplashEdit exports, compiles, and
        launches your game on the emulator.
      </>
    ),
  },
]

function GetStarted() {
  return (
    <Section id="get-started">
      <Section.Pill>Up and Running in Minutes</Section.Pill>
      <Section.Title>Two Parts, One Workflow</Section.Title>
      <Section.Description>
        Five steps from zero to a running PS1 game.
      </Section.Description>
      <div className="flex flex-col mt-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            className="flex flex-row items-start gap-6"
          >
            <div className="flex flex-col items-center w-11 shrink-0">
              <div className="w-11 h-11 rounded-full bg-primary/10 text-primary-light flex items-center justify-center text-base font-medium z-10">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px flex-1 min-h-6 bg-primary/25" />
              )}
            </div>

            <div
              className={`flex-1 pt-2.5 ${index < steps.length - 1 ? "pb-7" : "pb-2"}`}
            >
              <h3 className="text-base font-medium mb-1.5">{step.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export { GetStarted }
