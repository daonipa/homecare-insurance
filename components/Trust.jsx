"use client";
import { useEffect, useState, useRef } from "react";
import { ShieldCheck, Users, Clock, HeartHandshake } from "lucide-react";
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

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { icon: Users, number: 8000, suffix: "+", label: "상담 완료 고객" },
  { icon: ShieldCheck, number: 96, suffix: "%", label: "고객 만족도" },
  { icon: Clock, number: 30, suffix: "초", label: "평균 신청 소요시간" },
  { icon: HeartHandshake, number: 10, suffix: "년+", label: "보험 설계 경력" },
];

export default function Trust() {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-5">
        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-extrabold text-heading mb-1">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
