import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wassim Rifi | Développeur Full-Stack Junior",

  description: "Portfolio de Wassim Rifi, développeur full-stack junior. Je construis des API REST avec Laravel et Spring Boot, et des interfaces web avec React.js et Angular.",

  applicationName: "Wassim Rifi",

  authors: [{ name: "Wassim Rifi", url: "https://github.com/wassim-rifi-dev" }],

  creator: "Wassim Rifi",
  
  keywords: [
    "Wassim Rifi",
    "portfolio",
    "développeur full-stack",
    "Laravel",
    "Spring Boot",
    "React.js",
    "Angular",
    "API REST",
  ]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#1A1D28]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
