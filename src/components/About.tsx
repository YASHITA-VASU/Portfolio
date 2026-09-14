import { about, profile } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function About() {
  return (
    <section id="about" className="scroll-mt-32 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Profile"
            title="About"
            description="A concise portrait of background, interests, strengths, and where the work is heading."
          />
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <Reveal>
            <div className="min-w-0">
              <p className="font-display text-2xl leading-snug text-foam sm:text-[1.85rem]">
                {profile.tagline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
                {about.biography}
              </p>
              <p className="mt-5 text-base leading-relaxed text-mist sm:text-lg">
                {profile.summary}
              </p>
              <div className="mt-8">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
                  Strengths
                </h3>
                <ul className="mt-4 grid gap-2">
                  {about.strengths.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-mist sm:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="grid min-w-0 gap-4">
            <Reveal delay={0.06}>
              <article className="rounded-[1.4rem] border border-line bg-panel p-6 card-shadow">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  Key facts
                </h3>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  {about.facts.map((fact) => (
                    <div key={fact.label} className="min-w-0">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-sm text-foam">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <article className="rounded-[1.4rem] border border-line bg-panel p-6 card-shadow">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  Areas of interest
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {about.interests.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-ink px-3 py-1.5 text-sm text-mist"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.14}>
              <article className="rounded-[1.4rem] border border-ember/20 bg-gradient-to-br from-ember/10 via-panel to-ink-soft p-6">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember">
                  Current focus
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foam/90 sm:text-base">
                  {about.focus}
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.18}>
              <article className="rounded-[1.4rem] border border-line bg-panel p-6 card-shadow">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  Languages
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {about.languages.map((language) => (
                    <li key={language.name} className="min-w-0">
                      <p className="text-sm text-foam">{language.name}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
                        {language.level}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
