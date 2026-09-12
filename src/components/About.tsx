import { aboutCards, profile } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Identity"
            title="About me"
            description="A concise portrait of how I work — research first, interfaces when they help, decisions as the destination."
          />
        </Reveal>

        <Reveal>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-mist">
            {profile.summary}
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {aboutCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.06}
              className={index < 2 ? "xl:col-span-3" : "xl:col-span-2"}
            >
              <article className="hover-sheen h-full rounded-3xl border border-line bg-panel/70 p-6 transition hover:border-signal/40">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-2xl text-foam">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
