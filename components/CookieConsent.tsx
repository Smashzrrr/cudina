"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentSettings = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
};

const CONSENT_VERSION = "2024-02-16"; // Update this date to force re-consent

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [settings, setSettings] = useState<ConsentSettings>({
        necessary: true,
        analytics: true,
        marketing: true,
    });

    useEffect(() => {
        const storedConsent = localStorage.getItem("cookieConsent");
        if (storedConsent) {
            const parsedConsent = JSON.parse(storedConsent);
            // Check if consent is from an older version
            if (parsedConsent.version === CONSENT_VERSION) {
                return;
            }
        }

        // Show banner if no consent or old version
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const saveConsent = (preferences: ConsentSettings) => {
        const consentData = {
            settings: preferences,
            date: new Date().toISOString(),
            version: CONSENT_VERSION,
        };
        localStorage.setItem("cookieConsent", JSON.stringify(consentData));
        setIsVisible(false);
        setShowSettings(false);
    };

    const handleAcceptAll = () => {
        saveConsent({ necessary: true, analytics: true, marketing: true });
    };

    const handleDeclineAll = () => {
        saveConsent({ necessary: true, analytics: false, marketing: false });
    };

    const handleSaveSettings = () => {
        saveConsent(settings);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-surface/95 backdrop-blur-md border-t border-white/10 shadow-2xl transition-transform duration-500 ease-in-out animate-in slide-in-from-bottom-10 max-h-[90vh] overflow-y-auto">
            <div className="mx-auto max-w-7xl">
                {!showSettings ? (
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                        <div className="text-sm text-neutral-300 text-center md:text-left flex-1">
                            <h3 className="text-white font-bold mb-2 uppercase">Postavke Kolačića</h3>
                            <p>
                                Koristimo kolačiće kako bismo vam pružili najbolje iskustvo.
                                Neki su nužni za rad stranice, dok nam drugi pomažu razumjeti kako je koristite.
                                Saznajte više u našoj <Link href="/privatnost" className="text-accent hover:underline">Politici privatnosti</Link>.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <button
                                onClick={() => setShowSettings(true)}
                                className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-colors rounded-sm text-xs sm:text-sm whitespace-nowrap"
                            >
                                Postavke
                            </button>
                            <button
                                onClick={handleDeclineAll}
                                className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-colors rounded-sm text-xs sm:text-sm whitespace-nowrap"
                            >
                                Odbij Sve
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-6 py-3 bg-accent text-neutral-900 font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors rounded-sm text-xs sm:text-sm whitespace-nowrap"
                            >
                                Prihvati Sve
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="border-b border-white/10 pb-4">
                            <h3 className="text-white font-bold text-lg mb-2 uppercase">Postavke Kolačića</h3>
                            <p className="text-neutral-400 text-sm">Ovdje možete prilagoditi koje kolačiće želite prihvatiti.</p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {/* Necessary */}
                            <div className="bg-white/5 p-4 rounded-sm border border-white/10">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-white text-sm uppercase">Nužni</span>
                                    <input type="checkbox" checked={true} disabled className="accent-accent w-4 h-4 cursor-not-allowed opacity-50" />
                                </div>
                                <p className="text-xs text-neutral-500">Neophodni za ispravan rad web stranice. Ne mogu se isključiti.</p>
                            </div>

                            {/* Analytics */}
                            <label className="bg-surface p-4 rounded-sm border border-white/10 cursor-pointer hover:border-white/30 transition-colors group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-white text-sm uppercase group-hover:text-accent transition-colors">Analitika</span>
                                    <input
                                        type="checkbox"
                                        checked={settings.analytics}
                                        onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                                        className="accent-accent w-4 h-4 cursor-pointer"
                                    />
                                </div>
                                <p className="text-xs text-neutral-500">Pomažu nam razumjeti kako koristite stranicu radi poboljšanja iskustva.</p>
                            </label>

                            {/* Marketing */}
                            <label className="bg-surface p-4 rounded-sm border border-white/10 cursor-pointer hover:border-white/30 transition-colors group">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-white text-sm uppercase group-hover:text-accent transition-colors">Marketing</span>
                                    <input
                                        type="checkbox"
                                        checked={settings.marketing}
                                        onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                                        className="accent-accent w-4 h-4 cursor-pointer"
                                    />
                                </div>
                                <p className="text-xs text-neutral-500">Koriste se za prikazivanje relevantnih oglasa i mjerenje učinkovitosti kampanja.</p>
                            </label>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                            <button
                                onClick={() => setShowSettings(false)}
                                className="px-6 py-3 text-neutral-400 font-bold uppercase tracking-wider hover:text-white transition-colors text-xs sm:text-sm"
                            >
                                Povratak
                            </button>
                            <button
                                onClick={handleSaveSettings}
                                className="px-8 py-3 bg-accent text-neutral-900 font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors rounded-sm text-xs sm:text-sm"
                            >
                                Spremi Postavke
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
