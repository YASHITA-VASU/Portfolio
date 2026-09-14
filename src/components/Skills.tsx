import { skillGroups } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Capability"
            title="Skills"
            description="A working stack that spans programming, AI systems, analysis, and the tools that carry insight into interfaces."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="h-full rounded-3xl border border-line bg-panel/70 p-6">
                <h3 className="font-display text-2xl text-foam">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1.5 text-sm text-mist transition hover:border-signal hover:text-signal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
