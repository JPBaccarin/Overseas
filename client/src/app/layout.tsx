import type { Metadata } from "next";
import { Spline_Sans   as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Overseas",
  description: "Explore the world with Overseas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
