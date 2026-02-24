"use client";
import { Heart, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-28 md:py-36 lg:py-44 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-line rounded-full px-4 py-2 mb-8">
          <Heart className="w-4 h-4 text-primary" fill="currentColor" />
          <span className="text-sm font-medium text-body">재가급여보험 무료 설계</span>
        </div>

        {/* Main Hook */}
        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight text-heading mb-6">
          퇴원은 시작일 뿐입니다.
          <br />
          <span className="text-primary">진짜 부담</span>은 집에서 시작됩니다.
        </h1>

        {/* Sub Hook with numbers */}
        <p className="text-lg md:text-xl text-body mb-4 leading-relaxed">
          하루 간병비 <strong className="text-heading">15만원</strong> × 365일 =
          <strong className="text-warning text-2xl md:text-3xl font-extrabold ml-2">5,475만원</strong>
        </p>
        <p className="text-base md:text-lg text-muted mb-10">
          감당할 수 있으신가요?
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToForm}
          className="btn-pulse inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        >
          30초 만에 내 보험료 확인하기
        </button>

        <p className="text-sm text-muted mt-4">
          무료 상담 · 강제 가입 없음 · 30초 소요
        </p>

        <div className="mt-10 float-animation">
          <ArrowDown className="w-6 h-6 text-muted mx-auto" />
        </div>
      </div>
    </section>
  );
}
