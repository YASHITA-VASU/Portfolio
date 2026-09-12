import { Award, ScrollText } from "lucide-react"
import { achievements, certifications } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Milestones"
            title="Achievements & certifications"
            description="Papers, boards, summits, and courses that mark the path from classroom to conference floor."
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-3xl border border-line bg-panel/75 p-6">
                <div className="flex items-center justify-between gap-3">
                  <Award className="text-ember" size={20} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                    {item.year}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-foam">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <ScrollText className="text-signal" size={18} />
            <h3 className="font-display text-2xl text-foam">
              Courses & workshops
            </h3>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="rounded-2xl border border-line bg-ink-soft/80 p-5 transition hover:border-ember/40">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                  {item.year}
                </p>
                <h4 className="mt-2 font-display text-lg leading-snug text-foam">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-mist">{item.issuer}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
