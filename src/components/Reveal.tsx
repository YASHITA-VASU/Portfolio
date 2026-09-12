import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-12">
      <div className="flex items-baseline gap-3 text-signal">
        <span className="font-mono text-xs tracking-[0.28em]">{index}</span>
        <span className="h-px w-10 bg-signal/50" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-mist">
          {eyebrow}
        </span>
      </div>
      <div>
        <h2 className="font-display text-3xl leading-tight text-foam sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
