import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import type { FormEvent } from "react"
import { profile } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-32 bg-ink-soft/55 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="08"
            eyebrow="Connect"
            title="Let's build something meaningful."
            description="For internships, research, product work, or a conversation — I read every note."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-[1.6rem] border border-line bg-panel p-6 card-shadow sm:p-8">
              <ul className="space-y-6">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-start gap-4"
                  >
                    <Mail className="mt-1 shrink-0 text-signal" size={18} />
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                        Email
                      </span>
                      <span className="break-all text-foam group-hover:text-signal">
                        {profile.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.phoneHref}
                    className="group flex items-start gap-4"
                  >
                    <Phone className="mt-1 shrink-0 text-signal" size={18} />
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                        Phone
                      </span>
                      <span className="text-foam group-hover:text-signal">
                        {profile.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <LinkedInMark className="mt-1 shrink-0 text-signal" />
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                        LinkedIn
                      </span>
                      <span className="break-all text-foam group-hover:text-signal">
                        {profile.linkedinLabel}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 shrink-0 text-signal" size={18} />
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                      Location
                    </span>
                    <span className="text-foam">{profile.location}</span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="rounded-[1.6rem] border border-line bg-panel p-6 card-shadow sm:p-8"
            >
              <div className="grid gap-5">
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="rounded-xl border border-line bg-ink px-4 py-3 text-foam outline-none transition focus:border-signal"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-xl border border-line bg-ink px-4 py-3 text-foam outline-none transition focus:border-signal"
                    placeholder="you@email.com"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                    Message
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="resize-y rounded-xl border border-line bg-ink px-4 py-3 text-foam outline-none transition focus:border-signal"
                    placeholder="What should we build or discuss?"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foam px-5 py-3 text-sm font-medium text-ink transition hover:bg-signal"
                >
                  <Send size={16} />
                  Send Message
                </button>
                {sent ? (
                  <p className="text-sm text-mist" role="status">
                    Opening your email app to send the note. If nothing appears,
                    write directly to {profile.email}.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.5 8.5h4.37v2.11h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.77h-4.56v-7.78c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24H8.5V8.5z" />
    </svg>
  )
}
