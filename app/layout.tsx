import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "DekReady AI | GED, SAT, IELTS, Thai Math Exam Prep",
  description:
    "Thailand's AI-powered exam prep platform for GED, SAT, IELTS, and high school math."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, notoThai.variable, "font-sans antialiased")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
