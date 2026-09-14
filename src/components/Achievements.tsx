import { achievements } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-32 bg-ink-soft/55 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Milestones"
            title="Achievements & certifications"
            description="Courses, programmes, and practice that mark the path through science, product, and public speaking."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <article className="group relative h-full overflow-hidden rounded-[1.4rem] border border-line bg-panel p-6 card-shadow transition hover:border-signal/30">
                <p className="font-display text-5xl leading-none text-signal/15 transition group-hover:text-ember/25">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="mt-6">
                  {item.year ? (
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                      {item.year}
                    </p>
                  ) : null}
                  <h3 className="mt-2 font-display text-2xl leading-snug text-foam">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
