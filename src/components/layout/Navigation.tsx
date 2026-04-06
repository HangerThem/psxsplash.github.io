import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui"

const links = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Get Started", href: "#get-started" },
  { name: "Lua API", href: "#lua" },
  { name: "Community", href: "#community" },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 z-50 h-18 w-full border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-lg">
          <img
            src="assets/images/logo.png"
            alt="psxsplash"
            className="h-8 w-8 object-contain"
          />
          <span>
            psx<b>splash</b>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-md text-text-dim md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <Button
            href="https://psxsplash.github.io/docs/latest/"
            variant="primary-outline"
            animated={false}
          >
            Documentation <ArrowRight className="ml-1" size={16} />
          </Button>
        </div>

        <button
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden cursor-pointer"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-full w-full border-b border-border bg-bg/95 px-6 py-4 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-4 text-text-dim">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors hover:text-white w-fit"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                href="https://psxsplash.github.io/docs/latest/"
                variant="primary-outline"
                animated={false}
              >
                Documentation <ArrowRight className="ml-1" size={16} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export { Navigation }
