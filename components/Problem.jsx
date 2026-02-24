"use client";
import { AlertTriangle, Clock, Wallet } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const problems = [
  {
    icon: AlertTriangle,
    title: "병원비보다 큰 간병비",
    description: "퇴원 후 간병인 비용은 하루 15~20만원. 3개월이면 1,500만원이 넘습니다. 건강보험이 적용되지 않는 사각지대입니다.",
    color: "#FF6B35",
  },
  {
    icon: Clock,
    title: "가족의 시간이 멈춥니다",
    description: "간병을 위해 직장을 그만두는 가족. 경제적 부담과 심리적 소진이 동시에 찾아옵니다.",
    color: "#3182F6",
  },
  {
    icon: Wallet,
    title: "국가 지원만으로는 부족",
    description: "장기요양등급을 받아도 본인부담금 15%는 필수. 등급 밖 경증 환자는 지원 자체가 없습니다.",
    color: "#00C48C",
  },
];

export default function Problem() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">PROBLEM</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              이런 고민, 하고 계신가요?
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              고령화 시대, 간병은 더 이상 남의 일이 아닙니다
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 150}>
              <div className="bg-[var(--bg-section)] rounded-3xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${item.color}15` }}
                >
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
