"use client";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <div className="sticky-cta fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-lg border-t border-line md:hidden">
      <button
        onClick={scrollToForm}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all duration-300 cursor-pointer"
      >
        무료 상담 신청하기
      </button>
    </div>
  );
}
