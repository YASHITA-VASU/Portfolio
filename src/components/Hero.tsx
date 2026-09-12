import { ArrowDownRight, FileText, Mail } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { profile } from "../data/content"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:pt-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-signal/30 bg-signal/8 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-signal"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Live path · {profile.role}
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 font-display text-[clamp(3.4rem,10vw,7.2rem)] leading-[0.88] tracking-tight text-foam"
          >
            {profile.firstName}
            <span className="block text-ember">{profile.lastName}</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl"
          >
            {profile.status} at Mangalore Institute of Technology & Engineering.
            Currently a {profile.role} at {profile.organization}.
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-foam/80"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:bg-foam"
            >
              Explore My Journey
              <ArrowDownRight size={16} />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-foam transition hover:border-ember hover:text-ember"
            >
              <FileText size={16} />
              View Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-foam transition hover:border-signal hover:text-signal"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-3 max-w-lg"
          >
            {[
              { label: "CGPA", value: profile.cgpa },
              { label: "Research", value: "ITAI 2026" },
              { label: "Focus", value: "AI + Decisions" },
            ].map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-line bg-panel/60 px-3 py-3"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-lg text-foam">{item.value}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-[-8%] rounded-full border border-signal/15" />
          <div className="absolute inset-[-16%] rounded-full border border-ember/10" />
          <div className="absolute inset-[-24%] hidden rounded-full border border-white/5 sm:block" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-panel">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(62,224,197,0.16),transparent_55%)]" />
            <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
              Profile // Placeholder
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-signal/40 bg-ink/40 font-display text-4xl text-signal">
                  {profile.initials}
                </div>
                <p className="mt-6 font-display text-2xl text-foam">
                  {profile.name}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-mist">
                  Decision Science · AI/ML
                </p>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
              <span>{profile.location}</span>
              <span>2022 — 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
