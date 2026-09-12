import { GraduationCap } from "lucide-react"
import { education } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Formation"
            title="Education"
            description="Academic grounding in computer science with a specialization built around intelligent systems."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-0 left-[15px] top-3 w-px bg-gradient-to-b from-signal via-ember/50 to-transparent md:left-1/2" />
          {education.map((item) => (
            <Reveal key={item.institution}>
              <article className="relative grid gap-6 md:grid-cols-2 md:gap-16">
                <div className="md:text-right">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
                    {item.years}
                  </p>
                  <p className="mt-2 text-sm text-mist">{item.highlight}</p>
                </div>
                <div className="relative rounded-3xl border border-line bg-panel/80 p-6 pl-12 md:pl-6">
                  <span className="absolute left-[-29px] top-8 grid h-4 w-4 place-items-center rounded-full border border-signal bg-ink md:left-[-40px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  </span>
                  <GraduationCap className="mb-4 text-ember" size={22} />
                  <h3 className="font-display text-2xl text-foam">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-signal">{item.specialization}</p>
                  <p className="mt-3 text-mist">{item.institution}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
