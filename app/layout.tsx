import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flexi Integrated | Commercial Interior Design & Build",
  description:
    "Flexi Integrated delivers commercial interior design and build solutions across Malaysia, built on trust since 1997.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
