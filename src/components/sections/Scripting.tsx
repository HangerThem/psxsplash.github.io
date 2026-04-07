import { Section } from "@/components/sections"
import { Button } from "../ui"
import { ArrowRight } from "lucide-react"
import CodeBlock from "../common/CodeBlock"

const pills = [
  "Entity",
  "Camera",
  "Player",
  "Input",
  "UI",
  "Audio",
  "Cutscene",
  "Animation",
  "Scene",
  "Persist",
  "Vec3",
  "Controls",
  "Timer",
  "Debug",
]

const codeExample = `local collected = false

function onCollideWithPlayer(self)
    if collected then return end
    collected = true

    -- Hide the object
    Entity.SetActive(self, false)

    -- Play a sound
    Audio.Play("pickup", 100, 64)

    -- Update the score
    addScore(100)
    setStatus("Got it!")
end
`

function Scripting() {
  return (
    <Section id="lua" className="flex-row gap-16 items-center">
      <div className="flex-1">
        <Section.Pill>Scripting</Section.Pill>
        <Section.Title>Game Logic in Lua</Section.Title>
        <Section.Description className="text-left">
          Write all your game logic in Lua with an event-driven architecture. No
          game loop needed — respond to interactions, collisions, button
          presses, and timers.
        </Section.Description>
        <div className="flex flex-wrap gap-2 my-8">
          {pills.map((pill) => (
            <div
              key={pill}
              className="bg-primary/10 border border-primary/25 text-xs text-primary-light py-2 px-4 rounded-full font-mono"
            >
              {pill}
            </div>
          ))}
        </div>
        <Button
          href="https://psxsplash.github.io/docs/latest/lua/api-reference/"
          variant="outline"
          size="lg"
        >
          Full API Reference
          <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
      <div className="flex-1">
        <CodeBlock>{codeExample}</CodeBlock>
      </div>
    </Section>
  )
}

export { Scripting }
