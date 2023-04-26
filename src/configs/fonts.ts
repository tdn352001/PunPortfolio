import { Oxanium } from "next/font/google";
import localFont from "next/font/local";

export const oxanium = Oxanium({ subsets: ["latin"] });
export const ichiji = localFont({
  src: "../assets/fonts/Ichiji-One.otf",
  display: "swap",
  variable: "--font-ichiji",
});
