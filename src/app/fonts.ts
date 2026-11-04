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
