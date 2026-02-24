"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-dark relative overflow-hidden">
      {/* Subtle radial glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,150,105,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-6 pt-32 pb-28 md:pt-40 md:pb-36 lg:pt-48 lg:pb-44 text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-muted mb-10 font-medium">
          재가급여보험
        </p>

        <h1 className="text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] font-bold leading-[1.15] tracking-tight text-white mb-10">
          퇴원은 시작일 뿐,<br />진짜 부담은 집에서.
        </h1>

        <div className="mb-14">
          <p className="text-base md:text-lg text-muted mb-2 font-light">
            하루 간병비 15만원 x 365일
          </p>
          <p className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            5,475<span className="text-primary">만원</span>
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="bg-primary hover:bg-primary-dark text-white font-bold text-lg md:text-xl px-14 md:px-16 py-5 md:py-6 rounded-full transition-all duration-300 cursor-pointer shadow-[0_0_30px_rgba(5,150,105,0.35)] hover:shadow-[0_0_40px_rgba(5,150,105,0.5)] hover:scale-[1.03] active:scale-[0.98]"
        >
          무료 보험료 확인하기
        </button>

        <p className="text-sm text-body mt-4">
          강제 가입 없음 · 30초 소요
        </p>
      </div>
    </section>
  );
}
