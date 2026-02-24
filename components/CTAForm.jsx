"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2, Phone } from "lucide-react";
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
      setError("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="cta-form" className="py-20 md:py-28 bg-[var(--bg-section)]">
        <div className="max-w-lg mx-auto px-5 text-center">
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <CheckCircle className="w-16 h-16 text-[var(--success)] mx-auto mb-6" />
            <h3 className="text-2xl font-extrabold text-[var(--text-primary)] mb-3">
              신청이 완료되었습니다!
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              전문 상담사가 <strong>{form.callTime}</strong>에
              <br /><strong>{form.phone}</strong>으로 연락드리겠습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cta-form" className="py-20 md:py-28 bg-[var(--bg-section)]">
      <div className="max-w-lg mx-auto px-5">
        <ScrollAnimation>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[var(--primary)] mb-3 tracking-wide">FREE CONSULTATION</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
              30초 만에 무료 상담 신청
            </h2>
            <p className="text-[var(--text-secondary)]">
              강제 가입 없이, 내 상황에 맞는 보험료만 확인하세요
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-[var(--border)] text-base placeholder:text-[var(--text-muted)] transition-all duration-200"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">연락처</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[var(--border)] text-base placeholder:text-[var(--text-muted)] transition-all duration-200"
                />
              </div>
            </div>

            {/* Call Time */}
            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">통화 가능 시간</label>
              <div className="grid grid-cols-2 gap-2">
                {CALL_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setForm({ ...form, callTime: time })}
                    className={`py-3 px-4 rounded-xl text-sm font-medium border transition-all duration-200 cursor-pointer ${
                      form.callTime === time
                        ? "border-[var(--primary)] bg-[var(--primary-light)] text-[var(--primary)]"
                        : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--primary)]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-[var(--warning)] font-medium bg-orange-50 p-3 rounded-xl">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-pulse w-full flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] disabled:opacity-50 text-white font-bold text-lg py-4 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  무료 상담 신청하기
                </>
              )}
            </button>

            <p className="text-xs text-center text-[var(--text-muted)]">
              개인정보는 상담 목적으로만 사용되며, 상담 후 즉시 파기됩니다.
            </p>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
}
