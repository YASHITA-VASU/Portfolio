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
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="09"
            eyebrow="Connect"
            title="Let's connect and create something meaningful together."
            description="Whether it is research, product, or a decision-science brief — I read every note."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-line bg-panel/75 p-6 sm:p-8">
              <ul className="space-y-5">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-start gap-4"
                  >
                    <Mail className="mt-1 text-signal" size={18} />
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                        Email
                      </span>
                      <span className="text-foam group-hover:text-signal">
                        {profile.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone}`}
                    className="group flex items-start gap-4"
                  >
                    <Phone className="mt-1 text-signal" size={18} />
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
                    <BrandMark className="mt-1 text-signal" path="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V24H.22V8.5zM8.5 8.5h4.37v2.11h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.77h-4.56v-7.78c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24H8.5V8.5z" />
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                        LinkedIn
                      </span>
                      <span className="text-foam group-hover:text-signal">
                        linkedin.com/in/yashita-vasu
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <BrandMark className="mt-1 text-signal" path="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.79 8.21 11.37.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                    <span>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                        GitHub
                      </span>
                      <span className="text-foam group-hover:text-signal">
                        github.com/YashitaVasu
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 text-signal" size={18} />
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                      Location
                    </span>
                    <span className="text-foam">{profile.address}</span>
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="rounded-[2rem] border border-line bg-ink-soft/90 p-6 sm:p-8"
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-ink transition hover:bg-foam"
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

function BrandMark({
  className,
  path,
}: {
  className?: string
  path: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  )
}
