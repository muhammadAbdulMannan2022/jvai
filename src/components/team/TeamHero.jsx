"use client";

import React, { useEffect, useRef } from "react";
import { User, Users, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

export default function TeamHero({
    teamName = "Team JVAI",
    tagline = "Building the future, one line of code at a time.",
    leaderName = "Rafsun Ahmed",
    leaderTitle = "Team Lead",
    bgImage =
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80",
}) {
    const heroRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
            gsap.from(".hero-title-underline", {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.8,
                delay: 0.5,
                ease: "power2.out",
            });
            gsap.from(".hero-tagline", {
                y: 30,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: "power3.out",
            });
            gsap.from(".hero-leader", {
                x: -30,
                opacity: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out",
            });
            gsap.to(bgRef.current, {
                scale: 1.05,
                duration: 20,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
            });
            gsap.to(".scroll-icon", {
                y: 10,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                duration: 1.2,
                delay: 2,
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative w-full min-h-[400px] h-[60vh] flex flex-col items-center justify-center text-white overflow-hidden"
        >
            {/* Background Image */}
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center filter brightness-75"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 pointer-events-none"></div>

            {/* Content */}
            <div className="relative max-w-5xl px-6 text-center md:text-left z-10">
                <h1 className="hero-title text-4xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight">
                    {teamName}{" "}
                    <Users className="inline ml-3 w-12 h-12 align-bottom text-indigo-400" />
                </h1>

                {/* Animated underline */}
                <div className="hero-title-underline mx-auto md:mx-0 h-1 w-28 bg-indigo-400 origin-left scale-x-0 mt-2 rounded"></div>

                <p className="hero-tagline mt-6 text-lg md:text-2xl max-w-xl mx-auto md:mx-0 drop-shadow-md tracking-wide">
                    {tagline}
                </p>

                <div className="hero-leader mt-12 inline-flex items-center gap-4 bg-white/20 rounded-lg px-6 py-4 backdrop-blur-sm max-w-md mx-auto md:mx-0 shadow-lg">
                    <User className="w-10 h-10 text-indigo-400" />
                    <div className="text-left">
                        <p className="font-semibold text-white text-xl">{leaderName}</p>
                        <p className="text-white/80 text-base">{leaderTitle}</p>
                    </div>
                </div>
            </div>

            {/* Scroll Down Icon */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <ChevronDown
                    className="scroll-icon w-10 h-10 text-indigo-400 drop-shadow-lg"
                    aria-label="Scroll down"
                />
            </div>
        </section>
    );
}
