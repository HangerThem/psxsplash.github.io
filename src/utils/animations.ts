import type { Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
}

type ItemVariants =
  | {
      from?: "left" | "right" | "top" | "bottom"
    }
  | undefined

const itemVariants = ({ from = "bottom" }: ItemVariants = {}): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: from === "bottom" ? 20 : from === "top" ? -20 : 0,
      x: from === "left" ? -20 : from === "right" ? 20 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  }
}

const itemVariantsTop = itemVariants({ from: "top" })
const itemVariantsLeft = itemVariants({ from: "left" })
const itemVariantsRight = itemVariants({ from: "right" })
const itemVariantsBottom = itemVariants({ from: "bottom" })

export {
  containerVariants,
  itemVariants,
  itemVariantsTop,
  itemVariantsLeft,
  itemVariantsRight,
  itemVariantsBottom,
}
