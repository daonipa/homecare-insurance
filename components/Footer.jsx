export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-5 text-center">
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          본 페이지는 보험 상품의 이해를 돕기 위한 안내 페이지이며, 보험 계약 체결을 강요하지 않습니다.
          <br />
          보험 상품에 대한 자세한 사항은 상담을 통해 확인하실 수 있습니다.
          <br className="hidden md:block" />
          개인정보는 상담 목적으로만 수집·이용되며, 목적 달성 후 즉시 파기됩니다.
        </p>
        <p className="text-xs text-[var(--text-muted)] mt-4">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
