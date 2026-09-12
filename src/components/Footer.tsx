import { profile } from "../data/content"

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
          Decision science · AI & ML · Mangalore
        </p>
      </div>
    </footer>
  )
}
