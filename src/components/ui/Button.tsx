import { motion } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"

import { cn } from "@/utils/cn"

type ButtonBaseProps = {
  variant?: "primary" | "outline" | "primary-outline"
  size?: "sm" | "md" | "lg"
  children?: React.ReactNode
  className?: string
  animated?: boolean
}

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<"button">, "size"> & { href?: never }

type ButtonAsLinkProps = ButtonBaseProps & Omit<HTMLMotionProps<"a">, "size">

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  animated = true,
  ...props
}: ButtonProps) {
  const baseClasses =
    "h-fit w-fit inline-flex items-center justify-center font-semibold transition-colors cursor-pointer rounded-lg select-none"

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline:
      "border border-border-light text-white hover:border-primary-light hover:text-primary-light",
    "primary-outline":
      "bg-transparent border border-border-light text-primary-light hover:border-primary-light hover:bg-primary-light/10",
  }

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  }

  if (props.href) {
    const linkProps = props as Omit<HTMLMotionProps<"a">, "size">
    return (
      <motion.a
        href={props.href}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        target={props.href.startsWith("http") ? "_blank" : undefined}
        rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...linkProps}
        {...(animated && {
          whileHover: { y: -2 },
          whileTap: { scale: 0.98 },
        })}
      >
        {children}
      </motion.a>
    )
  }

  const buttonProps = props as Omit<HTMLMotionProps<"button">, "size">
  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...buttonProps}
      type={buttonProps.type || "button"}
      {...(!buttonProps.disabled &&
        animated && {
          whileHover: { y: -2 },
          whileTap: { scale: 0.98 },
        })}
    >
      {children}
    </motion.button>
  )
}

export { Button }
