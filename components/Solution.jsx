"use client";
import { ShieldCheck, Home, Stethoscope, Brain } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function Solution() {
  const scrollToForm = () => {
    document.getElementById("cta-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--bg-section)]">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">SOLUTION</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              재가급여보험이 해결합니다
            </h2>
            <p className="text-base md:text-lg text-[var(--text-secondary)]">
              퇴원 후 자택에서 받는 간병·요양 비용을 보장합니다
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left - Description */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-6 leading-snug">
                  병원이 아닌 <span className="text-[var(--primary)]">집에서</span> 회복하는 시대,
                  <br />비용 걱정 없이 치료에만 집중하세요
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  재가급여보험은 퇴원 후 자택에서 받는 간병 서비스, 요양 비용, 재활 치료비를 보장합니다.
                  전문 간병인 비용부터 방문 간호, 재활 치료까지 폭넓게 커버합니다.
                </p>
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                >
                  무료 설계 받기
                </button>
              </div>

              {/* Right - Feature cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Home, title: "자택 간병 보장", desc: "퇴원 후 자택 간병인 비용 실비 지급" },
                  { icon: Stethoscope, title: "재활치료 커버", desc: "방문 재활·물리치료 비용 보장" },
                  { icon: Brain, title: "치매·뇌질환", desc: "치매, 뇌졸중 등 중증질환까지 보장" },
                  { icon: ShieldCheck, title: "장기요양 보충", desc: "국가 지원 사각지대 추가 보장" },
                ].map((item, i) => (
                  <div key={i} className="bg-[var(--bg-section)] rounded-2xl p-5 hover:bg-[var(--primary-light)] transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-[var(--primary)] mb-3" />
                    <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">{item.title}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
