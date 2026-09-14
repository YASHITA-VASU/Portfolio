export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,74,134,0.09),transparent_46%)]" />
      <div className="absolute -left-36 top-[-12%] h-[520px] w-[520px] rounded-full bg-ember/12 blur-[140px]" />
      <div className="absolute right-[-16%] top-24 h-[460px] w-[460px] rounded-full bg-signal/12 blur-[150px]" />
      <div className="absolute bottom-[-18%] left-[22%] h-[480px] w-[480px] rounded-full bg-ember/8 blur-[160px]" />
      <div className="grid-fade absolute inset-0 opacity-50" />
      <div className="noise absolute inset-0 opacity-[0.04] mix-blend-multiply" />
    </div>
  )
}
