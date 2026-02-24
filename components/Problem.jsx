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
          <p className="text-sm tracking-[0.15em] uppercase text-[#999999] mb-4 font-medium">Problem</p>
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-heading leading-tight mb-16">
            이런 고민,<br />하고 계신가요?
          </h2>
        </ScrollAnimation>

        <div className="space-y-0 border-t border-line">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="flex items-start gap-6 py-8 border-b border-line">
                <span className="text-sm font-medium text-muted flex-shrink-0 mt-1 w-8">{item.number}</span>
                <div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{item.title}</h3>
                  <p className="text-body text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
