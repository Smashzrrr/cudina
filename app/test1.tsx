"use client";

import { Reveal } from "@/components/Reveal";

const WHATSAPP_LINK =
    "https://wa.me/YOURNUMBER?text=Bok%20Duje%2C%20zanima%20me%20trening%20u%20Cudina%20Fitnessu.";

export default function HomePage() {
    return (
        <main className="flex flex-col">
            <div id="top" className="absolute top-0 -z-10 h-0 w-0" />

            {/* Hero Section */}
            <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 to-background" />

                <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        Pakoštane &bull; Biograd
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-white">
                        Postigni <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">formu</span>
                        <br /> života
                    </h1>

                    <p className="mx-auto mt-8 max-w-xl text-lg text-neutral-400 md:text-xl">
                        Bez da ti život postane pakao. Trening prilagođen tebi, za realne rezultate koje možeš održati.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href={WHATSAPP_LINK}
                            className="group relative inline-flex min-w-[200px] items-center justify-center overflow-hidden rounded-sm bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wider text-neutral-900 transition-all hover:bg-accent-hover"
                        >
                            <span className="relative z-10">Dogovori Termin</span>
                        </a>
                        <a
                            href="#upitnik"
                            className="group inline-flex min-w-[200px] items-center justify-center rounded-sm border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-accent hover:text-accent"
                        >
                            Ispuni Upitnik
                        </a>
                    </div>
                </Reveal>
            </section>

            {/* Benefits Grid */}
            <section className="bg-surface py-24 px-6 border-y border-white/5">
                <div className="mx-auto max-w-7xl">
                    <Reveal>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                { title: "Fleksibilan Pristup", desc: "Program koji prati tvoj stil života, a ne obrnuto." },
                                { title: "Efikasan Trening", desc: "Jasne upute. Tehnika. Progres. Bez gubljenja vremena." },
                                { title: "Podrška Zajednice", desc: "Okruženje gdje je rad ozbiljan, ali atmosfera opuštena." }
                            ].map((item, i) => (
                                <div key={i} className="group relative p-8 bg-background border border-white/5 hover:border-accent/50 transition-colors rounded-sm">
                                    <div className="mb-4 h-10 w-10 text-accent">
                                        {/* Icon placeholder */}
                                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-full">
                                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                                    <p className="mt-2 text-neutral-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Results / Transformations */}
            <section id="rezultati" className="py-24 px-6">
                <div className="mx-auto max-w-7xl">
                    <Reveal>
                        <div className="mb-12 md:flex md:items-end md:justify-between border-b border-white/10 pb-6">
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">Rezultati</h2>
                            <p className="text-neutral-500">Pravi ljudi. Realni ciljevi.</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="aspect-[3/4] w-full bg-surface border border-white/5 relative group cursor-pointer overflow-hidden rounded-sm">
                                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold uppercase text-neutral-600 group-hover:text-accent transition-colors">
                                        Transformacija {i + 1}
                                    </div>
                                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coaching Packages */}
            <section id="coaching" className="py-24 px-6 bg-surface border-y border-white/5">
                <div className="mx-auto max-w-7xl">
                    <Reveal className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tighter">Coaching Paketi</h2>
                    </Reveal>

                    <Reveal>
                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Card 1 */}
                            <div className="bg-background border border-white/10 p-8 rounded-sm hover:border-accent/50 transition-all group">
                                <h3 className="text-2xl font-bold text-white uppercase">Grupni</h3>
                                <p className="mt-2 text-sm text-neutral-400">Motivirajuća atmosfera.</p>
                                <ul className="mt-8 space-y-4 text-sm text-neutral-300">
                                    <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent rounded-full" /> Vođeni treninzi</li>
                                    <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent rounded-full" /> Fokus na tehniku</li>
                                </ul>
                            </div>

                            {/* Card 2 - Highlight */}
                            <div className="relative bg-background border border-accent p-8 rounded-sm shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)] transform md:-translate-y-4">
                                <div className="absolute top-0 right-0 bg-accent text-neutral-900 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-bl-sm">
                                    Popularno
                                </div>
                                <h3 className="text-2xl font-bold text-accent uppercase">Poluindividualni</h3>
                                <p className="mt-2 text-sm text-white">Individualiziran pristup.</p>
                                <ul className="mt-8 space-y-4 text-sm text-white">
                                    <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent rounded-full" /> Max 4 osobe</li>
                                    <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent rounded-full" /> Osobni program</li>
                                    <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent rounded-full" /> Fleksibilni termini</li>
                                </ul>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-background border border-white/10 p-8 rounded-sm hover:border-accent/50 transition-all group">
                                <h3 className="text-2xl font-bold text-white uppercase">1 na 1</h3>
                                <p className="mt-2 text-sm text-neutral-400">Maksimalna posvećenost.</p>
                                <ul className="mt-8 space-y-4 text-sm text-neutral-300">
                                    <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent rounded-full" /> 100% fokus</li>
                                    <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-accent rounded-full" /> Nutricionistički savjeti</li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Contact & Map */}
            <section id="kontakt" className="py-24 px-6 relative">
                <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2">

                    {/* Form */}
                    <Reveal id="upitnik">
                        <h2 className="text-3xl font-black uppercase text-white mb-8">Započni Danas</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">Ime i Prezime</label>
                                <input type="text" className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm" placeholder="IVAN IVANIĆ" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-surface border border-white/10 p-4 text-white focus:border-accent focus:outline-none transition-colors rounded-sm" placeholder="IVAN@EMAIL.COM" />
                            </div>
                            <button type="button" className="w-full bg-accent text-neutral-900 font-bold uppercase tracking-wider py-4 hover:bg-accent-hover transition-colors rounded-sm">
                                Pošalji Prijavu
                            </button>
                        </form>
                    </Reveal>

                    {/* Map Info */}
                    <Reveal delay={200}>
                        <h2 className="text-3xl font-black uppercase text-white mb-8">Lokacija</h2>
                        <div className="bg-surface border border-white/10 p-2 rounded-sm h-[400px]">
                            <iframe
                                src="https://www.google.com/maps?q=43.907558,15.507878&z=17&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                        <div className="mt-8 flex flex-col gap-4 text-neutral-400">
                            <div className="flex items-center gap-4">
                                <span className="text-accent font-bold">ADRESA:</span> ul. Ivana Meštrovića 30, 23210 Pakoštane
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-accent font-bold">RADNO VRIJEME:</span> Pon - Pet: 08:00 - 22:00
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

        </main>
    );
}
