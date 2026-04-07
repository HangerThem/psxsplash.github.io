import { Header, Navigation } from "@/components/layout"
import {
  Architecture,
  Features,
  GetStarted,
  Scripting,
} from "@/components/sections"

export function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="max-w-6xl mx-auto">
        <Header />
        <Architecture />
        <Features />
        <Scripting />
        <GetStarted />
      </main>
    </>
  )
}
