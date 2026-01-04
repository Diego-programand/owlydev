import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#16263a]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-extrabold text-white">
              Discord Dashboard
            </h1>
            <p className="mt-2 text-white/70">
              Demo de panel para administración del bot (UI base).
            </p>
          </div>

          <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
            <Link href="/">Volver</Link>
          </Button>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="rounded-2xl bg-black/20 p-6 text-white/70">
            Aquí irá la demo (captura WebP + componentes).
          </div>
        </div>
      </div>
    </main>
  );
}
