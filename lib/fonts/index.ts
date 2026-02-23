import {
  Instrument_Sans,
  Inter,
  Manrope,
  Plus_Jakarta_Sans,
} from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const plusJarkataSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
});

export const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
export const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const madeSoulmaze = localFont({
  variable: "--font-made-soulmaze",
  src: "./made-regular.otf",
  fallback: ["system-ui"],
});

export const creatoDisplay = localFont({
  variable: "--font-made-creatordisplay",
  src: [
    {
      path: "./CreatoDisplay-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./CreatoDisplay-Medium.otf",
      style: "medium",
      weight: "500",
    },
    {
      path: "./CreatoDisplay-Bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
  fallback: ["system-ui"],
});

export const aeonik = localFont({
  variable: "--font-made-aeonik",
  src: [
    {
      path: "./AeonikTRIAL-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./AeonikTRIAL-Bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
  fallback: ["system-ui"],
});
