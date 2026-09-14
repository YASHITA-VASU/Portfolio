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
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
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
    <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end lg:gap-16">
      <div className="relative">
        <p className="font-display text-[4.5rem] leading-none text-signal/12 sm:text-7xl">
          {index}
        </p>
        <div className="-mt-8 sm:-mt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-[2.15rem] leading-[1.05] text-foam sm:text-5xl lg:text-[3.35rem]">
            {title}
          </h2>
        </div>
      </div>
      {description ? (
        <p className="max-w-xl border-l border-line pl-5 text-base leading-relaxed text-mist sm:text-lg lg:justify-self-end lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5">
          {description}
        </p>
      ) : null}
    </div>
  )
}
