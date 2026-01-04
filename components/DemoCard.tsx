import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type DemoCardProps = {
  title: string;
  desc: string;
  href: string;
  imageSrc?: string; // opcional: cuando no exista, se muestra placeholder
};

export default function DemoCard({ title, desc, href, imageSrc }: DemoCardProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/9] w-full bg-black/20">
        {hasImage ? (
          <Image
            src={imageSrc!}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-white/50">
            Screenshot pendiente (WebP)
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{desc}</p>

        <div className="mt-4">
          <Button
            asChild
            className="rounded-full bg-[#23ADCF] text-black hover:bg-[#23ADCF]/90"
          >
            <Link href={href}>Abrir demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
