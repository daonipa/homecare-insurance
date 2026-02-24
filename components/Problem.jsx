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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.15em] uppercase text-muted mb-4 font-medium">Problem</p>
            <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight">
              이런 고민, 하고 계신가요?
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="border border-line rounded-2xl p-7 h-full hover:border-[#CCCCCC] transition-colors duration-300">
                <span className="text-xs font-semibold text-primary tracking-wider">{item.number}</span>
                <h3 className="text-base font-semibold text-heading mt-3 mb-2">{item.title}</h3>
                <p className="text-sm text-body leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
