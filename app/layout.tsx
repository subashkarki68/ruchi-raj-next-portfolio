import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruchi Raj Karki - Portfolio",
  description:
    "Hello, I'm Ruchi Raj Karki, an aspiring Full Stack Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 h-[9999px]`}
      >
        <div className="h-full w-full relative pt-28 sm:pt-40">
          <div className="bg-violet-200 absolute -top-22 left-10 -z-30 h-[30rem] w-[10rem] rounded-full blur-[10rem] xl:w-[40rem]"></div>
          <div className="bg-rose-200 absolute -top-22 right-10  -z-30 h-[30rem] w-[10rem] rounded-full blur-[10rem] xl:w-[40rem]"></div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
