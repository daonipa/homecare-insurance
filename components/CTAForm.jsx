"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const CALL_TIMES = [
  "오전 (9~12시)",
  "오후 (12~18시)",
  "저녁 (18~21시)",
  "시간 무관",
];

export default function CTAForm({ source = "homecare-insurance" }) {
  const [form, setForm] = useState({ name: "", phone: "", callTime: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) { setError("이름을 입력해주세요."); return; }
    if (form.phone.replace(/\D/g, "").length < 10) { setError("올바른 연락처를 입력해주세요."); return; }
    if (!form.callTime) { setError("통화 가능 시간을 선택해주세요."); return; }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      const result = await res.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setError("전송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="cta-form" className="py-28 md:py-36 bg-[#0F0F0F]">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="w-14 h-14 rounded-full bg-[#059669] mx-auto mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(5,150,105,0.3)]">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-heading mb-3">신청이 완료되었습니다</h3>
            <p className="text-body text-[15px] leading-relaxed">
              전문 상담사가 <strong>{form.callTime}</strong>에<br />
              <strong>{form.phone}</strong>으로 연락드리겠습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta-form" className="py-28 md:py-36 bg-[#0F0F0F]">
      <div className="max-w-md mx-auto px-6">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              무료 상담 신청
            </h2>
            <p className="text-[#888888] text-[15px]">
              강제 가입 없이, 내 상황에 맞는 보험료만 확인하세요
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={150}>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 space-y-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div>
              <label className="block text-sm font-medium text-heading mb-2">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-[#D5D5D5] text-[15px] placeholder:text-muted bg-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-2">연락처</label>
              <input
                type="tel"
                placeholder="010-0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                className="w-full px-4 py-3.5 rounded-xl border border-[#D5D5D5] text-[15px] placeholder:text-muted bg-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-heading mb-2">통화 가능 시간</label>
              <div className="grid grid-cols-2 gap-2.5">
                {CALL_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setForm({ ...form, callTime: time })}
                    className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer ${
                      form.callTime === time
                        ? "border-primary bg-primary-light text-primary shadow-[0_0_0_1px_rgba(5,150,105,0.3)]"
                        : "border-[#D5D5D5] text-body hover:border-[#AAAAAA] hover:bg-[#FAFAFA]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <p className="text-sm text-[#DC2626] font-medium bg-[#FEF2F2] p-3 rounded-xl">{error}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-semibold text-base py-4.5 rounded-xl transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(5,150,105,0.25)] hover:shadow-[0_4px_16px_rgba(5,150,105,0.35)]"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "무료 상담 신청하기"
              )}
            </button>

            <p className="text-xs text-center text-muted">
              개인정보는 상담 목적으로만 사용되며, 상담 후 즉시 파기됩니다.
            </p>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}
