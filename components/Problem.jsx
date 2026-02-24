"use client";
import ScrollAnimation from "./ScrollAnimation";

const problems = [
  {
    number: "01",
    title: "병원비보다 큰 간병비",
    description: "퇴원 후 간병인 비용은 하루 15~20만원. 3개월이면 1,500만원이 넘습니다.",
  },
  {
    number: "02",
    title: "가족의 시간이 멈춥니다",
    description: "간병을 위해 직장을 그만두는 가족. 경제적 부담과 심리적 소진이 동시에 찾아옵니다.",
  },
  {
    number: "03",
    title: "국가 지원만으로는 부족",
    description: "장기요양등급을 받아도 본인부담금 15%는 필수. 등급 밖 경증 환자는 지원 자체가 없습니다.",
  },
];

export default function Problem() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-4 font-medium">Problem</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              이런 고민, 하고 계신가요?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 120}>
              <div className="bg-white border border-[#E0E0E0] rounded-2xl p-8 h-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
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
