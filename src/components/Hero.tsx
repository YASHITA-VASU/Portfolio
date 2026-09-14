import { ArrowDownRight, FileText, Mail } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { profile } from "../data/content"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-40"
    >
      <HeroAtmosphere reduce={Boolean(reduce)} />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div className="min-w-0 border-l-2 border-ember/70 pl-5 sm:pl-7">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-signal"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
            B.Sc. Biotechnology
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-7 break-words font-display text-[clamp(2.35rem,8vw,6.2rem)] leading-[0.92] tracking-tight text-foam"
          >
            {profile.firstName}
            <span className="mt-1 block italic text-ember">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
          >
            {profile.role} at {profile.organization}.
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-foam/80 sm:text-lg"
          >
            {profile.introduction}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foam px-5 py-3 text-sm font-medium text-ink transition hover:bg-signal"
            >
              Explore My Work
              <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-3 text-sm font-medium text-foam transition hover:border-signal hover:text-signal"
            >
              <FileText size={16} />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-5 py-3 text-sm font-medium text-foam transition hover:border-ember hover:text-ember"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
          transition={{ duration: 0.85, delay: 0.18 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 rounded-[2rem] border border-line" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-line bg-panel card-shadow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(180,92,62,0.12),transparent_58%)]" />
            <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
              Portrait · Placeholder
            </div>
            <div className="absolute inset-0 grid place-items-center px-6">
              <div className="text-center">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-foam font-display text-4xl text-ink">
                  {profile.initials}
                </div>
                <p className="mt-6 font-display text-3xl text-foam">
                  {profile.name}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                  Biotech · Product · Community
                </p>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
              <span className="min-w-0 truncate">{profile.location}</span>
              <span className="shrink-0">Expected 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HeroAtmosphere({ reduce }: { reduce: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute right-[8%] top-[18%] h-72 w-72 rounded-full border border-line"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[4%] top-[12%] h-[26rem] w-[26rem] rounded-full border border-signal/20"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[18%] top-[32%] h-40 w-40 rounded-[1.5rem] border border-ember/25"
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute right-[12%] top-[22%] h-2 w-2 rounded-full bg-ember/80" />
      <div className="absolute right-[28%] top-[40%] h-1.5 w-1.5 rounded-full bg-signal/70" />
    </div>
  )
}
