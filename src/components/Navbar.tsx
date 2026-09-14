import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { navItems, profile } from "../data/content"
import { useActiveSection } from "../hooks/useActiveSection"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.slice(1)),
    [],
  )
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled || open
            ? "border-line bg-panel shadow-[0_12px_40px_-24px_rgba(28,25,21,0.35)]"
            : "border-transparent bg-panel/70 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
          <a
            href="#home"
            className="flex min-w-0 items-center gap-3 text-foam"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foam font-display text-sm text-ink">
              {profile.initials}
            </span>
            <span className="truncate font-mono text-[10px] uppercase tracking-[0.22em] text-mist sm:text-[11px]">
              {profile.name}
            </span>
          </a>

          <nav
            className="relative hidden min-w-0 items-center lg:flex"
            aria-label="Primary"
          >
            <ul className="flex flex-wrap items-center justify-end gap-0.5">
              {navItems.map((item) => {
                const id = item.href.slice(1)
                const isActive = active === id
                return (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative z-10 block rounded-full px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition xl:px-3 xl:text-[11px] ${
                        isActive ? "text-foam" : "text-mist hover:text-foam"
                      }`}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 -z-10 rounded-full bg-ink-soft"
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        />
                      ) : null}
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-foam lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.nav
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line lg:hidden"
              aria-label="Mobile"
            >
              <ul className="grid max-h-[80vh] gap-1 overflow-y-auto px-4 py-4">
                {navItems.map((item) => {
                  const isActive = active === item.href.slice(1)
                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        aria-current={isActive ? "true" : undefined}
                        className={`block rounded-xl px-3 py-3 font-mono text-sm uppercase tracking-[0.16em] ${
                          isActive
                            ? "bg-ink-soft text-foam"
                            : "text-mist hover:bg-ink-soft/70 hover:text-foam"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
