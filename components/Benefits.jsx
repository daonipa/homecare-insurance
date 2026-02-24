"use client";
import ScrollAnimation from "./ScrollAnimation";

const benefits = [
  {
    number: "01",
    title: "월 2만원대부터 시작",
    description: "부담 없는 보험료로 시작할 수 있습니다. 나이와 조건에 따라 맞춤 설계가 가능합니다.",
  },
  {
    number: "02",
    title: "퇴원 후 자택간병 보장",
    description: "병원이 아닌 집에서 받는 간병·요양 서비스 비용을 실비로 보장합니다.",
  },
  {
    number: "03",
    title: "간병인 비용 실비 지급",
    description: "전문 간병인 고용 비용을 실비로 지급받을 수 있어 경제적 부담을 줄여줍니다.",
  },
  {
    number: "04",
    title: "치매·뇌질환까지 커버",
    description: "치매, 뇌졸중, 파킨슨 등 장기 간병이 필요한 중증 질환까지 보장합니다.",
  },
];

export default function Benefits() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Benefits</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              이런 점이 다릅니다.
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="bg-white border border-[#E0E0E0] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-light text-xs font-bold text-primary mb-5">{item.number}</span>
                <h3 className="text-[17px] font-bold text-heading mb-3">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
