"use client";

import { useState } from "react";
import Panda from "@/components/Panda";
import Bear from "@/components/Bear";
import BokehCanvas from "@/components/BokehCanvas";
import HeartsRain from "@/components/HeartsRain";
import ApologyEnvelope from "@/components/ApologyEnvelope";

const MY_PHONE = "919967629986"; // Vrushal's number with country code: 919967629986

interface Treat {
  emoji: string;
  name: string;
  tagline: string;
}

const FOODS: Treat[] = [
  { emoji: "🥟", name: "Momos", tagline: "Steaming hot & juicy" },
  { emoji: "🍕", name: "Pizza", tagline: "Extra cheesy comfort" },
  { emoji: "🍦", name: "Ice cream", tagline: "Sweet & creamy cold scoop" },
];

const PHOTOS = [
  { src: "/1.jpeg", deg: -3 },
  { src: "/2.jpeg", deg: 2 },
  { src: "/3.jpeg", deg: -2 },
  { src: "/4.jpeg", deg: 3 },
  { src: "/5.jpeg", deg: -2 },
  { src: "/6.jpeg", deg: 2 },
];

const PLEAD_PHRASES = [
  "Pretty please? 🥺🐼🐻",
  "Pretty pretty please? 🥺",
  "Pretty pretty pretty please? 🐼💗",
  "Pleeeease, I promise to make you smile! 🥹",
  "Pretty please with extra cherries on top? 🍒🐻",
];

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [pleadText, setPleadText] = useState("");
  const [showLoveModal, setShowLoveModal] = useState(false);
  const [showGiftSection, setShowGiftSection] = useState(false);

  const [selectedFood, setSelectedFood] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const [heartsTrigger, setHeartsTrigger] = useState(0);

  const triggerHearts = (count = 25) => {
    setHeartsTrigger(Date.now() + count);
  };

  const handleNoClick = () => {
    const nextCount = noCount + 1;
    setNoCount(nextCount);
    setPleadText(PLEAD_PHRASES[noCount % PLEAD_PHRASES.length]);
  };

  const handleYesClick = () => {
    setShowLoveModal(true);
    triggerHearts(35);
  };

  const handleOneMoreSurprise = () => {
    setShowLoveModal(false);
    setShowGiftSection(true);
    setTimeout(() => {
      document.getElementById("gift-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  const openDirectWhatsApp = (messageText: string) => {
    const encoded = encodeURIComponent(messageText);
    const isMobile =
      typeof navigator !== "undefined" &&
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // Direct mobile deep-link: opens WhatsApp app directly into chat with Vrushal
      window.location.href = `whatsapp://send?phone=${MY_PHONE}&text=${encoded}`;
      setTimeout(() => {
        window.open(
          `https://api.whatsapp.com/send/?phone=${MY_PHONE}&text=${encoded}`,
          "_blank"
        );
      }, 1500);
    } else {
      // Desktop: opens WhatsApp Web directly into the conversation
      window.open(
        `https://web.whatsapp.com/send?phone=${MY_PHONE}&text=${encoded}`,
        "_blank"
      );
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFood) {
      setErrorMessage("Please pick a treat first 🐻");
      return;
    }
    if (!address.trim()) {
      setErrorMessage("Please enter a delivery address 💌");
      return;
    }

    setErrorMessage("");

    const orderDetails = [
      `Hi Vrushal 💗 I accepted your sorry! I’d like ${selectedFood}.`,
      name.trim() ? `Name: ${name.trim()}` : "",
      `Address: ${address.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const directLink = `whatsapp://send?phone=${MY_PHONE}&text=${encodeURIComponent(
      orderDetails
    )}`;
    setWhatsAppUrl(directLink);
    setSubmittedDetails(orderDetails);
    setIsSubmitted(true);
    triggerHearts(30);

    // Directly open WhatsApp chat without intermediate landing gateway
    openDirectWhatsApp(orderDetails);
  };

  const yesScale = Math.min(1.4, 1 + noCount * 0.1);

  return (
    <main className="min-h-screen text-[var(--ink)] selection:bg-[var(--rose2)] selection:text-[var(--ink)] relative overflow-x-hidden">
      <HeartsRain trigger={heartsTrigger} count={30} />

      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:p-6 text-center relative overflow-hidden">
        {/* Soft radial background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[650px] h-[300px] sm:h-[500px] md:h-[650px] bg-[radial-gradient(ellipse_at_center,_var(--rose2)_0%,_transparent_70%)] opacity-35 pointer-events-none" />

        <div className="flex items-end justify-center gap-1 mb-4 relative z-10">
          <Panda className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 animate-float" />
          <Bear className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 animate-float-delayed" />
        </div>

        <span className="relative z-10 inline-block px-3.5 py-1 mb-3 text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase rounded-full bg-[var(--rose2)] text-[var(--rose-dark)] border border-[var(--rose)]/30">
          For someone truly irreplaceable
        </span>

        <h1 className="relative z-10 font-serif-title italic text-[var(--rose)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold mb-3 tracking-tight drop-shadow-xs break-words">
          I’m sorry
        </h1>

        <p className="relative z-10 text-[var(--soft)] max-w-md text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-2">
          I built this little corner of the internet just for you, with a panda
          and a bear guarding a message straight from my heart 🐼🐻
        </p>

        <a
          href="#letter-section"
          className="relative z-10 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--rose)] hover:text-[var(--rose-dark)] transition-colors py-2 px-5 rounded-full bg-white/70 border border-[var(--line)] shadow-xs animate-hint"
        >
          Open your letter ↓
        </a>
      </section>

      {/* SECTION 2: INTERACTIVE APOLOGY ENVELOPE & LETTER */}
      <section
        id="letter-section"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:p-6 text-center relative"
      >
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[var(--soft)] font-semibold mb-1">
          From Vrushal with love
        </span>
        <h2 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-semibold mb-2 text-[var(--ink)]">
          An Apology for You
        </h2>
        <p className="text-[var(--soft)] text-xs sm:text-sm md:text-base max-w-md mb-6 px-2">
          A personal, handwritten letter is sealed inside. Tap the seal to gently unfold it 💌
        </p>

        <ApologyEnvelope onOpenLetter={() => triggerHearts(20)} />
      </section>

      {/* SECTION 3: POLAROID GALLERY */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:p-6 text-center relative">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[var(--soft)] font-semibold mb-1">
          Cherished memories
        </span>
        <h2 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-semibold mb-2 text-[var(--ink)]">
          Us, my favourite moments
        </h2>
        <p className="text-[var(--soft)] text-xs sm:text-sm md:text-base max-w-md mb-8 px-2">
          Every memory with you is a reminder of how lucky I am to have you in my life.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-2xl w-full">
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className="bg-[var(--card)] p-2.5 sm:p-3 pb-6 sm:pb-8 rounded-xl shadow-[0_10px_28px_-14px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:-translate-y-1.5 cursor-pointer border border-[var(--line)] group"
              style={{ transform: `rotate(${p.deg}deg)` }}
            >
              <div className="aspect-square rounded-lg overflow-hidden relative bg-neutral-100 shadow-inner">
                <img
                  src={p.src}
                  alt={`Us memory ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-[var(--soft)] mt-8 text-xs sm:text-sm md:text-base">
          Every picture of us brings a genuine smile to my face.
        </p>
      </section>

      {/* SECTION 4: APOLOGY DECISION */}
      <section
        id="ask"
        className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:p-6 text-center relative"
      >
        <div className="flex items-end justify-center gap-1 mb-4">
          <Panda className="w-20 h-20 sm:w-24 sm:h-24 animate-float" />
          <Bear className="w-20 h-20 sm:w-24 sm:h-24 animate-float-delayed" />
        </div>
        <h2 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-semibold mb-2 text-[var(--ink)]">
          Do you accept my sorry?
        </h2>
        <p className="text-[var(--soft)] text-xs sm:text-sm md:text-base max-w-md mb-8 px-2">
          I promise to never take your sweet smile for granted again.
        </p>

        <div className="flex gap-4 sm:gap-6 items-center justify-center min-h-[100px] flex-wrap px-2">
          <button
            onClick={handleYesClick}
            type="button"
            style={{ transform: `scale(${yesScale})` }}
            className="cursor-pointer border-0 rounded-full py-3.5 sm:py-4 px-8 sm:px-10 font-semibold text-white bg-[var(--rose)] shadow-[0_12px_28px_-10px_var(--rose)] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base md:text-lg origin-center"
          >
            {noCount > 0 ? "Yes, okay Vrushal 💗" : "Yes 💗"}
          </button>
          <button
            onClick={handleNoClick}
            type="button"
            className="cursor-pointer rounded-full py-3.5 sm:py-4 px-8 sm:px-10 font-semibold text-[var(--soft)] bg-[var(--card)] border border-[var(--line)] hover:bg-[var(--line)]/40 active:scale-95 transition-all text-sm sm:text-base md:text-lg"
          >
            {noCount > 0 ? "Pretty please? 🥺" : "No"}
          </button>
        </div>
        <div className="min-h-[3.2em] text-[var(--rose)] font-serif-title italic text-lg sm:text-xl md:text-2xl mt-4 px-4 max-w-md">
          {pleadText}
        </div>
      </section>

      {/* MODAL: CELEBRATION / LOVE */}
      {showLoveModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[radial-gradient(circle_at_50%_40%,#3b1d2e,#160b13)] text-white p-4 sm:p-6 animate-fade-in flex items-center justify-center min-h-screen">
          <BokehCanvas />
          <div className="relative z-10 max-w-md w-full flex flex-col items-center my-auto py-8">
            <div className="flex items-end justify-center gap-1 mb-2">
              <Panda className="w-20 h-20 sm:w-24 sm:h-24 animate-float" />
              <Bear className="w-20 h-20 sm:w-24 sm:h-24 animate-float-delayed" />
            </div>
            <h2 className="font-serif-title italic text-[#ffd6df] text-4xl sm:text-6xl md:text-7xl font-bold mb-3 drop-shadow-[0_0_30px_#ff8fab]">
              I love you
            </h2>
            <p className="text-[#ffe9ee] leading-relaxed mb-4 text-sm sm:text-base md:text-lg px-2">
              Thank you for forgiving me. You are truly the most precious part of
              my life, and I’ll keep choosing you every single day.
            </p>
            <p className="text-xs sm:text-sm text-[#ffd6df]/80 italic mb-6">
              — Yours, Vrushal 🤍
            </p>
            <button
              onClick={handleOneMoreSurprise}
              type="button"
              className="cursor-pointer border-0 rounded-full py-3.5 sm:py-4 px-8 sm:px-10 font-semibold text-white bg-[var(--rose)] shadow-[0_10px_24px_-10px_var(--rose)] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base md:text-lg"
            >
              One more surprise for you 🎁
            </button>
          </div>
        </div>
      )}

      {/* SECTION 5: GIFT / TREAT ORDER */}
      {showGiftSection && (
        <section
          id="gift-section"
          className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:p-6 text-center animate-fade-in relative"
        >
          <div className="flex items-end justify-center gap-1 mb-3">
            <Panda className="w-16 h-16 sm:w-20 sm:h-20 animate-float" />
            <Bear className="w-16 h-16 sm:w-20 sm:h-20 animate-float-delayed" />
          </div>
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[var(--soft)] font-semibold mb-1">
            A small treat to make you smile
          </span>
          <h2 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-semibold mb-2 text-[var(--ink)]">
            Pick your favourite treat
          </h2>
          <p className="text-[var(--soft)] text-xs sm:text-sm md:text-base mb-6 max-w-sm px-2">
            Choose what you crave right now and tell Vrushal where to send it 💌
          </p>

          {!isSubmitted ? (
            <>
              {/* FOOD SELECTOR */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md w-full mb-6">
                {FOODS.map((f) => {
                  const isSelected = selectedFood === f.name;
                  return (
                    <button
                      key={f.name}
                      type="button"
                      onClick={() => setSelectedFood(f.name)}
                      className={`cursor-pointer rounded-2xl py-3 sm:py-4 px-1.5 sm:px-2 border-2 transition-all flex flex-col items-center justify-center gap-1 ${
                        isSelected
                          ? "border-[var(--rose)] bg-[var(--rose2)] text-[#4a3640] -translate-y-1 scale-102 sm:scale-105 shadow-md"
                          : "border-[var(--line)] bg-[var(--card)] text-[var(--ink)] hover:border-[var(--rose2)]"
                      }`}
                    >
                      <span className="text-2xl sm:text-3xl md:text-4xl">{f.emoji}</span>
                      <b className="text-[11px] sm:text-xs md:text-sm font-semibold truncate w-full px-1">{f.name}</b>
                      <span className="text-[9px] sm:text-[10px] text-[var(--soft)] hidden sm:block">
                        {f.tagline}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmitOrder}
                className="max-w-md w-full flex flex-col gap-3 text-left"
              >
                <div>
                  <input
                    id="order-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full py-3 sm:py-3.5 px-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--rose)] transition"
                  />
                </div>
                <div>
                  <textarea
                    id="order-address"
                    placeholder="Delivery address (where should Vrushal send it?)"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    className="w-full py-3 sm:py-3.5 px-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--rose)] transition resize-y"
                  />
                </div>
                <div>
                  <input
                    id="order-phone"
                    type="tel"
                    placeholder="Phone number (for the delivery rider)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-3 sm:py-3.5 px-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] text-[var(--ink)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--rose)] transition"
                  />
                </div>

                {errorMessage && (
                  <p className="text-[var(--rose)] text-xs sm:text-sm text-center font-medium">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="cursor-pointer border-0 rounded-full py-3.5 sm:py-4 px-8 font-semibold text-white bg-[var(--rose)] shadow-[0_12px_28px_-10px_var(--rose)] hover:scale-105 active:scale-95 transition-all text-sm sm:text-base md:text-lg mt-2 text-center"
                >
                  Send my choice to Vrushal 🐼
                </button>
              </form>
            </>
          ) : (
            /* CONFIRMATION / DONE SCREEN */
            <div className="max-w-md w-full flex flex-col items-center p-6 sm:p-8 bg-[var(--card)] border border-[var(--line)] rounded-3xl shadow-xl animate-fade-in">
              <div className="flex items-end justify-center gap-1 mb-3">
                <Panda className="w-16 h-16 sm:w-20 sm:h-20 animate-float" />
                <Bear className="w-16 h-16 sm:w-20 sm:h-20 animate-float-delayed" />
              </div>
              <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[var(--rose)] mb-2">
                Sent to Vrushal! 💌
              </h2>
              <p className="text-sm sm:text-base text-[var(--ink)] mb-6 leading-relaxed">
                Your treat choice: <span className="font-bold text-[var(--rose)]">{selectedFood}</span>! It has been dispatched to Vrushal on WhatsApp so he can order it right away.
              </p>
              {submittedDetails && (
                <button
                  type="button"
                  onClick={() => openDirectWhatsApp(submittedDetails)}
                  className="cursor-pointer border-0 rounded-full py-3.5 px-8 font-semibold text-white bg-[var(--rose)] shadow-[0_10px_24px_-10px_var(--rose)] hover:scale-105 transition-all text-sm sm:text-base flex items-center gap-2"
                >
                  Open WhatsApp chat 💬
                </button>
              )}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
