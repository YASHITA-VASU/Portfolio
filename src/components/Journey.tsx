import { journey } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="Trajectory"
            title="My journey"
            description="From first-year foundations to decision science — a five-year arc of study, product work, and research."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-4 left-4 top-4 hidden w-px bg-gradient-to-b from-signal via-ember to-transparent md:block" />
          <ol className="space-y-4">
            {journey.map((step, index) => (
              <Reveal key={step.year} delay={index * 0.05}>
                <li className="group grid gap-4 rounded-3xl border border-line bg-panel/60 p-5 transition hover:border-signal/40 hover:bg-panel md:grid-cols-[8rem_1fr] md:items-center md:pl-14">
                  <div className="relative">
                    <span className="absolute top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border border-signal bg-ink group-hover:bg-signal md:left-[-2.65rem] md:block" />
                    <p className="font-display text-3xl text-ember">{step.year}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foam sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">
                      {step.detail}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
