"use client";
import { BadgeCheck } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const benefits = [
  {
    number: "01",
    title: "월 2만원대부터",
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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">BENEFITS</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              재가급여보험, 이런 점이 다릅니다
            </h2>
          </div>
        </ScrollAnimation>

        <div className="space-y-4">
          {benefits.map((item, i) => (
            <ScrollAnimation key={i} delay={i * 100}>
              <div className="flex items-start gap-5 bg-[var(--bg-section)] rounded-2xl p-6 md:p-8 hover:bg-[var(--primary-light)] transition-colors duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-extrabold text-sm group-hover:scale-110 transition-transform duration-300">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                    {item.title}
                    <BadgeCheck className="w-5 h-5 text-[var(--primary)]" />
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
