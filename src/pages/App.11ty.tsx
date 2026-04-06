import { Header, Navigation } from "@/components/layout"

export function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="max-w-6xl mx-auto">
        <Header />
      </main>
    </>
  )
}
