import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "재가급여보험 | 퇴원 후 간병비, 준비되셨나요?",
  description: "하루 간병비 15만원, 연간 5,475만원. 재가급여보험으로 자택 간병·요양 비용을 보장받으세요. 30초 만에 내 보험료 확인하기.",
  keywords: "재가급여보험, 간병보험, 간병비, 자택간병, 요양보험, 재가급여",
  openGraph: {
    title: "재가급여보험 | 퇴원 후 간병비, 준비되셨나요?",
    description: "하루 간병비 15만원, 연간 5,475만원. 재가급여보험으로 자택 간병·요양 비용을 보장받으세요.",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "재가급여보험 무료 설계",
              description: "퇴원 후 자택 간병·요양 비용을 보장하는 재가급여보험 무료 상담",
              areaServed: "KR",
            }),
          }}
        />
      </head>
      <body className={`${notoSansKR.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
