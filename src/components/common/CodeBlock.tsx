import { cn } from "@/utils/cn"
import hljs from "highlight.js"
import { useEffect, useRef } from "react"

function CodeBlock({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const codeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [children])

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="border-b border-border flex justify-between items-center px-3 py-2 bg-bg-card-hover">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#FF5F57] rounded-full" />
          <div className="w-3 h-3 bg-[#FEBC2E] rounded-full" />
          <div className="w-3 h-3 bg-[#28C840] rounded-full" />
        </div>
        <span className="text-xs text-text-dim font-mono">collectible.lua</span>
      </div>
      <pre
        className={cn(
          "bg-bg-card p-4 text-sm overflow-x-auto whitespace-pre",
          className,
        )}
      >
        <code className="font-mono block" ref={codeRef}>
          {children}
        </code>
      </pre>
    </div>
  )
}

export default CodeBlock
