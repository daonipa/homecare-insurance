"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const faqs = [
  {
    question: "재가급여보험은 어떤 상황에서 보장되나요?",
    answer: "퇴원 후 자택에서 간병인 서비스, 방문 간호, 재활 치료 등을 받을 때 발생하는 비용을 보장합니다. 치매, 뇌졸중, 골절 후 재활 등 장기 간병이 필요한 경우에 특히 유용합니다.",
  },
  {
    question: "장기요양보험과 어떻게 다른가요?",
    answer: "국민건강보험의 장기요양보험은 등급 판정이 필요하고 본인부담금이 있습니다. 재가급여보험은 이런 사각지대를 보충하여, 등급과 관계없이 자택 간병 비용을 추가로 보장받을 수 있습니다.",
  },
  {
    question: "보험료는 얼마 정도인가요?",
    answer: "나이와 보장 범위에 따라 다르지만, 월 2만원대부터 설계가 가능합니다. 무료 상담을 통해 맞춤 보험료를 확인하세요.",
  },
  {
    question: "부모님을 위해 가입할 수 있나요?",
    answer: "네, 부모님을 피보험자로 하여 자녀가 계약자로 가입할 수 있습니다. 부모님의 간병 부담을 사전에 준비하는 효도 보험으로 많이 가입하십니다.",
  },
  {
    question: "상담 후 반드시 가입해야 하나요?",
    answer: "절대 아닙니다. 무료 상담은 현재 보장 상태를 점검하고, 필요한 보장을 파악하는 과정입니다. 가입 여부는 전적으로 고객님의 선택입니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary mb-3 tracking-wide">FAQ</p>
            <h2 className="text-2xl md:text-4xl font-extrabold text-heading mb-4">
              자주 묻는 질문
            </h2>
          </div>
        </ScrollAnimation>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollAnimation key={i} delay={i * 80}>
              <div className="border border-line rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer hover:bg-surface/50 transition-colors duration-200"
                >
                  <span className="text-base font-semibold text-heading pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
