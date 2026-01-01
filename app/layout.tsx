import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cudina Fitness | Pakoštane",
  description:
    "Fitness trener Duje Čudina. Grupni, individualni i poluindividualni treninzi u Pakoštanima i okolici.",
};

const WHATSAPP_LINK =
  "https://wa.me/385915232333?text=Bok%20Duje%2C%20zanima%20me%20trening%20u%20Cudina%20Fitnessu.";
const CALL_LINK = "tel:+385915232333";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={inter.variable}>
      <body
        className="bg-background text-foreground antialiased font-sans selection:bg-accent/30 selection:text-accent"
        suppressHydrationWarning
      >
        <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-0 group"
            >
              {/* Logo */}
              <div className="relative h-14 w-32 overflow-hidden">
                <Image
                  src="/logo-new.png"
                  alt="Cudina Fitness Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-lg font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors">
                Cudina Fitness
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-400 md:flex">
              <Link href="/o-meni" className="hover:text-white transition-colors">
                O meni
              </Link>
              <Link href="/#coaching" className="hover:text-white transition-colors">
                Coaching
              </Link>
              <Link href="/#paketi" className="hover:text-white transition-colors">
                Paketi
              </Link>
              <Link href="/c24-gym" className="hover:text-white transition-colors">
                C24 Gym
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/#kontakt" className="hover:text-white transition-colors">
                Kontakt
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <a
                className="hidden text-sm font-medium text-neutral-400 hover:text-white transition-colors md:block"
                href={CALL_LINK}
              >
                {/* Removed visible text */}
              </a>
              <a
                className="rounded-sm bg-[#25D366] px-5 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#128C7E]"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-white/5 bg-surface py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-3">

              {/* Column 1: Navigation */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-2">Navigacija</h4>
                <Link href="/o-meni" className="text-neutral-400 hover:text-accent transition-colors text-sm">O meni</Link>
                <Link href="/#coaching" className="text-neutral-400 hover:text-accent transition-colors text-sm">Coaching</Link>
                <Link href="/#paketi" className="text-neutral-400 hover:text-accent transition-colors text-sm">Paketi</Link>
                <Link href="/blog" className="text-neutral-400 hover:text-accent transition-colors text-sm">Blog</Link>
              </div>

              {/* Column 2: Information */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-2">Informacije</h4>
                <div className="text-neutral-400 text-sm">
                  <p className="hover:text-white transition-colors cursor-default">Lokacija: Pakoštane</p>
                </div>
                <a href={WHATSAPP_LINK} className="text-neutral-400 hover:text-accent transition-colors text-sm">Besplatne konzultacije</a>
                <Link href="/#kontakt" className="text-neutral-400 hover:text-accent transition-colors text-sm">Kontakt</Link>
              </div>

              {/* Column 3: Legal */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold uppercase text-white tracking-wider mb-2">Pravno</h4>
                <Link href="/uvjeti" className="text-neutral-400 hover:text-accent transition-colors text-sm">Opći uvjeti poslovanja</Link>
                <Link href="/privatnost" className="text-neutral-400 hover:text-accent transition-colors text-sm">Politika privatnosti</Link>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div>
                <h3 className="text-lg font-bold uppercase text-white">Cudina Fitness</h3>
                <p className="text-sm text-neutral-500 mt-1">Profesionalni trening. Pakoštane.</p>
              </div>

              <div className="text-neutral-500 text-sm flex flex-col md:items-end gap-1">
                <a href={CALL_LINK} className="hover:text-white transition-colors">Poziv</a>
                <a href={WHATSAPP_LINK} className="hover:text-white transition-colors">WhatsApp</a>
                <span className="mt-2 text-xs opacity-50">ul. Ivana Meštrovića 30, 23210 Pakoštane</span>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-neutral-700">
              © {new Date().getFullYear()} Cudina Fitness.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
