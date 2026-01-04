export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-sm text-white/60">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p>
            <span className="font-semibold text-white">Owly</span>
            <span className="text-white/80">Dev</span> © {new Date().getFullYear()}
          </p>
          <p className="text-white/50">Next.js • Tailwind • shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}
