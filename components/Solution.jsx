"use client";
import ScrollAnimation from "./ScrollAnimation";

const features = [
  { title: "자택 간병 보장", desc: "퇴원 후 자택 간병인 비용 실비 지급" },
  { title: "재활치료 커버", desc: "방문 재활·물리치료 비용 보장" },
  { title: "치매·뇌질환 보장", desc: "치매, 뇌졸중 등 중증질환까지 보장" },
  { title: "장기요양 보충", desc: "국가 지원 사각지대 추가 보장" },
];

export default function Solution() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Solution</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-5">
              재가급여보험이 해결합니다.
            </h2>
            <p className="text-body text-[15px] leading-relaxed max-w-xl mx-auto">
              병원이 아닌 집에서 회복하는 시대. 퇴원 후 자택에서 받는 간병 서비스, 요양 비용, 재활 치료비를 보장합니다.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {features.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="bg-[#F5F5F7] rounded-2xl p-8">
                <h3 className="text-[17px] font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:scale-[1.02] active:scale-[0.98]"
            >
              무료 설계 받기
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
