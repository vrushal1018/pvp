"use client";

import { useState } from "react";
import Panda from "./Panda";
import Bear from "./Bear";

interface ApologyEnvelopeProps {
  onOpenLetter?: () => void;
}

export default function ApologyEnvelope({ onOpenLetter }: ApologyEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isOpen && onOpenLetter) {
      onOpenLetter();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-4 sm:my-6 px-2 sm:px-4">
      <div className="flex flex-col items-center">
        {/* PEEPING CHARACTERS */}
        <div className="flex items-end justify-center gap-1 -mb-5 sm:-mb-6 z-20 pointer-events-none">
          <Panda className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 animate-float" />
          <Bear className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 animate-float-delayed" />
        </div>

        {/* CLOSED ENVELOPE STATE */}
        {!isOpen ? (
          <div
            onClick={handleToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggle();
              }
            }}
            className="group relative cursor-pointer w-full bg-gradient-to-b from-[#fffaf7] to-[#fff0f3] border-2 border-[var(--line)] rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_20px_50px_-20px_rgba(229,138,158,0.4)] hover:shadow-[0_25px_60px_-15px_rgba(229,138,158,0.6)] hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden"
          >
            {/* Top envelope flap triangle using responsive SVG */}
            <svg
              className="absolute top-0 left-0 w-full h-14 sm:h-18 md:h-22 text-[var(--line)]/60 pointer-events-none"
              viewBox="0 0 100 30"
              preserveAspectRatio="none"
            >
              <path d="M 0,0 L 50,30 L 100,0 Z" fill="currentColor" />
            </svg>

            {/* Subtle postage stamp in corner */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 border border-[var(--rose)]/30 rounded-lg p-1 sm:p-1.5 bg-white/80 shadow-xs rotate-6 group-hover:rotate-12 transition-transform">
              <span className="text-base sm:text-xl">💌</span>
            </div>

            {/* WAX SEAL */}
            <div className="relative z-10 my-4 sm:my-6 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#9e2a44] via-[#c94b68] to-[#e58a9e] shadow-[0_8px_25px_rgba(158,42,68,0.4)] border-2 border-[#fcd5de] animate-pulse-seal group-hover:scale-105 transition-transform duration-300">
                <div className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border border-dashed border-[#ffccd5] flex items-center justify-center">
                  <span className="text-xl sm:text-2xl md:text-3xl select-none">🤍</span>
                </div>
              </div>
              <span className="inline-block mt-3 sm:mt-4 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--soft)] bg-white/90 py-1 px-3 sm:px-4 rounded-full border border-[var(--line)] shadow-xs">
                Tap seal to open letter
              </span>
            </div>

            <h3 className="font-serif-title italic text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--ink)] mb-1">
              A Letter from Vrushal
            </h3>
            <p className="text-[var(--soft)] text-xs sm:text-sm md:text-base px-2">
              Written from the deepest place in my heart, especially for you
            </p>
          </div>
        ) : (
          /* OPENED VINTAGE LUXURY LETTER */
          <div className="relative w-full bg-[#fffdfa] border-2 border-[#e8d5cb] rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_25px_60px_-15px_rgba(74,54,64,0.18)] animate-fade-in text-left leading-relaxed">
            {/* Elegant Double Border Accent */}
            <div className="absolute inset-2 sm:inset-3 md:inset-4 border border-[#e8d5cb]/60 rounded-2xl pointer-events-none" />
            <div className="absolute inset-3 sm:inset-4 md:inset-5 border border-dashed border-[#dfc3b2]/40 rounded-xl pointer-events-none" />

            {/* Faint Watermark of Panda & Bear in center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] overflow-hidden">
              <div className="flex gap-2 sm:gap-4 scale-125 sm:scale-150">
                <Panda className="w-40 h-40 sm:w-56 sm:h-56" />
                <Bear className="w-40 h-40 sm:w-56 sm:h-56" />
              </div>
            </div>

            {/* Header info */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#eedcd2] pb-3 sm:pb-4 mb-4 sm:mb-6">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-neutral-700 font-bold">
                  Personal & Confidential
                </span>
                <p className="font-serif-title italic text-xs sm:text-sm text-neutral-700 mt-0.5">
                  To the one who holds my whole world
                </p>
              </div>
              <button
                onClick={handleToggle}
                type="button"
                className="cursor-pointer text-[11px] sm:text-xs font-semibold py-1 sm:py-1.5 px-3 sm:px-3.5 rounded-full bg-[var(--card)] border border-[var(--line)] text-neutral-800 hover:text-black hover:bg-[var(--line)]/50 transition-colors"
                title="Fold back into envelope"
              >
                Fold back ✉️
              </button>
            </div>

            {/* Letter Body */}
            <div className="relative z-10 font-serif-title text-black text-base sm:text-lg md:text-xl space-y-4 sm:space-y-5 leading-relaxed break-words font-medium">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black italic">
                My Dearest,
              </p>

              <p className="text-black">
                If I could turn back time to the exact moment I caused you any
                sadness or pain, I would do it without a second thought. The
                heaviest feeling in the world is knowing that I hurt the person
                who brings the purest warmth, the sweetest smiles, and the
                gentlest light into my life.
              </p>

              <p className="text-black">
                I never, ever want to be the reason for silence between us or
                weight in your heart. You are my safe place, my peace after the
                longest days, and someone I cherish far beyond what words can
                measure. Seeing you hurt breaks something inside me too, because
                you deserve only tenderness, patience, and love that makes you
                feel entirely safe and adored.
              </p>

              <p className="text-black">
                Please know, from the bottom of my heart, that I never thought
                anything bad about you—never for a single second. It’s just that
                you mean the entire world to me, and all I ever want is just the
                two of us, with no third person ever coming between us.
              </p>

              <p className="text-black">
                I am not making excuses—I am taking this truly to heart. I
                promise to listen to you with open ears and an open heart, to be
                more thoughtful, more patient, and to always protect your
                happiness like the rarest treasure.
              </p>

              <p className="text-black">
                Thank you for being the beautiful soul that you are. I hope this
                little letter reminds you how precious you are to me, and how
                deeply sorry I truly am. Please give me the chance to make you
                smile again, to hold your hand, and to make everything right.
              </p>

              {/* Decorative divider */}
              <div className="text-center text-[var(--rose)] py-1 sm:py-2 select-none text-sm sm:text-base font-bold">
                ❦ • 🤍 • ❦
              </div>

              {/* Signature */}
              <div className="pt-2 text-right">
                <p className="text-sm sm:text-base md:text-lg text-neutral-800 italic mb-1 font-semibold">
                  Forever yours, with all my love,
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-black italic tracking-wide">
                  Vrushal 🤍
                </p>
              </div>
            </div>

            {/* Action footer inside letter */}
            <div className="relative z-10 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#eedcd2] text-center">
              <p className="text-xs sm:text-sm text-neutral-600 italic">
                Read with all my sincerity • Always here for you
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
