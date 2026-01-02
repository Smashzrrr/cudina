"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number; // ms
    id?: string;
}

export function Reveal({ children, className = "", delay = 0, id }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate once
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    // Construct transition delay style
    const style = {
        transitionDelay: `${delay}ms`,
    };

    return (
        <div
            id={id}
            ref={ref}
            style={style}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                } ${className}`}
        >
            {children}
        </div>
    );
}
