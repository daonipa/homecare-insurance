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
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <p className="text-sm tracking-[0.15em] uppercase text-muted mb-4 font-medium">Solution</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-6">
            재가급여보험이<br />해결합니다.
          </h2>
          <p className="text-body text-[15px] leading-relaxed mb-12 max-w-xl">
            병원이 아닌 집에서 회복하는 시대. 퇴원 후 자택에서 받는 간병 서비스, 요양 비용, 재활 치료비를 보장합니다.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-4">
          {features.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-line hover:border-[#CCCCCC] transition-colors duration-300">
                <h4 className="font-semibold text-heading mb-1.5">{item.title}</h4>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={400}>
          <div className="mt-12">
            <button
              onClick={scrollToForm}
              className="bg-heading hover:bg-black text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-300 cursor-pointer text-[15px]"
            >
              무료 설계 받기
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
