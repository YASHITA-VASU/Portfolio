export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute -left-32 top-[-10%] h-[520px] w-[520px] rounded-full bg-signal/12 blur-[140px]" />
      <div className="absolute right-[-8%] top-24 h-[420px] w-[420px] rounded-full bg-ember/10 blur-[130px]" />
      <div className="absolute bottom-[-10%] left-1/3 h-[480px] w-[480px] rounded-full bg-signal/8 blur-[150px]" />
      <div className="grid-fade absolute inset-0 opacity-40" />
      <div className="noise absolute inset-0 opacity-[0.07] mix-blend-overlay" />
    </div>
  )
}
