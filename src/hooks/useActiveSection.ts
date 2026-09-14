import { useEffect, useState } from "react"

export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? "")

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const id = visible[0]?.target.id
        if (id) setActive(id)
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1],
      },
    )

    for (const element of elements) observer.observe(element)
    return () => observer.disconnect()
  }, [ids])

  return active
}
