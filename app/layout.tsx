import "./normalize.css";
import "./globals.css";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

export const noto_sans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Windows 10 nextjs",
  description: "Windows 10 nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
