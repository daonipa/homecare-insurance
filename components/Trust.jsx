"use client";
import { useEffect, useState, useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";

function AnimatedNumber({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { number: 8000, suffix: "+", label: "상담 완료" },
  { number: 96, suffix: "%", label: "고객 만족도" },
  { number: 30, suffix: "초", label: "신청 소요시간" },
  { number: 10, suffix: "년+", label: "설계 경력" },
];

export default function Trust() {
  return (
    <section className="py-20 md:py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-[#999999]">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
