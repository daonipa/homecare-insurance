"use client";

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-32 md:py-40 lg:py-48 text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-[#999999] mb-8 font-medium">
          재가급여보험
        </p>

        <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.2] tracking-tight text-white mb-8">
          퇴원은 시작일 뿐,<br />진짜 부담은 집에서.
        </h1>

        <p className="text-lg md:text-xl text-[#999999] mb-3 font-light">
          하루 간병비 15만원 × 365일
        </p>
        <p className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          5,475<span className="text-[#059669]">만원</span>
        </p>

        <button
          onClick={scrollToForm}
          className="bg-[#059669] hover:bg-[#047857] text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-300 cursor-pointer"
        >
          무료 보험료 확인하기
        </button>

        <p className="text-sm text-[#666666] mt-6">
          강제 가입 없음 · 30초 소요
        </p>
      </div>
    </section>
  );
}
