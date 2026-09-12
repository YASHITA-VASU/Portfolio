import { Download, ExternalLink } from "lucide-react"
import { profile } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="08"
            eyebrow="Specification"
            title="Resume"
            description="The complete record of education, roles, projects, and credentials — ready to view or keep."
          />
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line bg-panel/80">
            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                  Yashita_Resume.pdf
                </p>
                <h3 className="mt-4 font-display text-3xl text-foam sm:text-4xl">
                  A concise brief of the journey so far.
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-mist">
                  Open the latest resume for role history, research, and skills in
                  a single document. The file hosted here is the same resume used
                  to build this site.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={profile.resumePath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-foam px-5 py-3 text-sm font-semibold text-ink transition hover:bg-signal"
                  >
                    <ExternalLink size={16} />
                    View Resume
                  </a>
                  <a
                    href={profile.resumePath}
                    download="Yashita_Vasu_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-foam transition hover:border-ember hover:text-ember"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              </div>
              <div className="relative min-h-56 rounded-3xl border border-line bg-ink p-6">
                <div className="absolute inset-4 rounded-2xl border border-dashed border-signal/25" />
                <div className="relative flex h-full flex-col justify-between">
                  <p className="font-display text-2xl text-foam">
                    {profile.name}
                  </p>
                  <p className="text-sm text-mist">
                    {profile.role}
                    <br />
                    {profile.organization}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                    B.E. CSE (AI & ML) · CGPA {profile.cgpa}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
