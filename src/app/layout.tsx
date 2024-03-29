import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "./provider";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
//test
export const metadata: Metadata = {
  title: "Daily 과제",
  description: "Generated by create next app",
};

// 최상위 레이아웃의 랜더링은 SD 방식
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        <NavBar />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
