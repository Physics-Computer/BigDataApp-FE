import type { Config } from "tailwindcss";

const config: Config = {
  // Tailwind가 어떤 파일을 스캔할지 지정
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // 디자인 시스템 정의
  theme: {
    extend: {
      colors: {
        background: "var(--background)", //global.css에서 정의
        foreground: "var(--foreground)",
        primary: "#3B9A63",
      },

      fontFamily: {
        sans: ["Pretendard", "sans-serif"], // 전역 폰트
      },

      borderRadius: {
        xl: "12",
      },

    },
  },
  plugins: [],
};
export default config;
