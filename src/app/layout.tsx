import "./globals.css";
import { Caveat, JetBrains_Mono } from "next/font/google";

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrains",
})

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#1A1D28]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
