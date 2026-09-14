import { Download, ExternalLink } from "lucide-react"
import { profile } from "../data/content"
import { Reveal } from "./Reveal"

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-32 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="overflow-hidden rounded-[1.8rem] bg-foam text-ink">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-14">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                  Resume
                </p>
                <h2 className="mt-4 font-display text-[2.1rem] leading-tight sm:text-5xl">
                  Want to know more about my journey?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70">
                  Open or keep the full record of education, internships,
                  certifications, and skills — the same document this site is
                  built from.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={profile.resumePath}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-foam transition hover:bg-signal hover:text-ink"
                  >
                    <ExternalLink size={16} />
                    View Resume
                  </a>
                  <a
                    href={profile.resumePath}
                    download={profile.resumeFileName}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition hover:border-ember hover:text-ember"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="relative min-h-52 overflow-hidden rounded-[1.4rem] border border-ink/15 bg-foam/40 p-6">
                <div className="absolute inset-4 rounded-2xl border border-dashed border-ink/20" />
                <div className="relative flex h-full min-h-40 flex-col justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                    {profile.resumeFileName}
                  </p>
                  <div>
                    <p className="font-display text-3xl">{profile.name}</p>
                    <p className="mt-2 text-sm text-ink/70">
                      {profile.status}
                      <br />
                      {profile.organization}
                    </p>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
                    Expected May 2026 · Chennai
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
