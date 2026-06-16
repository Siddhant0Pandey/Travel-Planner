import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-expect-error: global CSS imports are handled by Next.js
import "./globals.css";
import { auth } from "@/auth";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Planner",
  description: "A travel planner app built with Next.js, Prisma, and NextAuth",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col">
        <Navbar session={session}/>{children}</body>
    </html>
  );
}
