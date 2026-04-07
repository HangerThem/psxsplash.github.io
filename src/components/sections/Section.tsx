import { cn } from "@/utils/cn"
import * as React from "react"
import { JSX } from "react/jsx-runtime"
import { motion, type HTMLMotionProps } from "framer-motion"
import { containerVariants, itemVariantsBottom } from "@/utils/animations"

type SectionRootProps = HTMLMotionProps<"section">
type SectionPartProps<T extends keyof JSX.IntrinsicElements> =
  React.ComponentPropsWithoutRef<T>

function SectionRoot({ className, ...props }: SectionRootProps) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className={cn("flex flex-col items-center py-24", className)}
      {...props}
    />
  )
}

SectionRoot.displayName = "Section"

function SectionPill({ className, ...props }: HTMLMotionProps<"span">) {
  return (
    <motion.span
      variants={itemVariantsBottom}
      className={cn(
        "uppercase tracking-wider text-sm font-semibold text-primary-light bg-primary/15 rounded-full px-4 py-1.5 select-none",
        className,
      )}
      {...props}
    />
  )
}

function SectionTitle({ className, ...props }: SectionPartProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight md:text-6xl py-8",
        className,
      )}
      {...props}
    />
  )
}

function SectionDescription({ className, ...props }: SectionPartProps<"p">) {
  return (
    <p
      className={cn("text-text-dim md:text-lg max-w-2xl text-center", className)}
      {...props}
    />
  )
}

type SectionCompoundComponent = React.ForwardRefExoticComponent<
  SectionRootProps & React.RefAttributes<HTMLElement>
> & {
  Pill: typeof SectionPill
  Title: typeof SectionTitle
  Description: typeof SectionDescription
}

const Section = Object.assign(SectionRoot, {
  Pill: SectionPill,
  Title: SectionTitle,
  Description: SectionDescription,
}) as SectionCompoundComponent

export default Section
