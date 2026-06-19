import localFont from "next/font/local";

export const sharpGrotesk = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "../assets/fonts/Sharp_Grotesk/SharpGrotesk-Book20.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Sharp_Grotesk/SharpGrotesk-Medium20.otf", weight: "500", style: "normal" },
    { path: "../assets/fonts/Sharp_Grotesk/SharpGrotesk-SemiBold20.otf", weight: "600", style: "normal" },
    { path: "../assets/fonts/Sharp_Grotesk/SharpGrotesk-Bold20.otf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Sharp_Grotesk/SharpGrotesk-Black20.otf", weight: "900", style: "normal" },
  ],
});

export const gelica = localFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    { path: "../assets/fonts/Gelica/Gelica-Extra-Light.otf", weight: "200", style: "normal" },
    { path: "../assets/fonts/Gelica/Gelica-Light.otf", weight: "300", style: "normal" },
    { path: "../assets/fonts/Gelica/Gelica-Regular.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/Gelica/Gelica-Italic.otf", weight: "400", style: "italic" },
    { path: "../assets/fonts/Gelica/Gelica-Medium.otf", weight: "500", style: "normal" },
    { path: "../assets/fonts/Gelica/Gelica-Semi-Bold.otf", weight: "600", style: "normal" },
    { path: "../assets/fonts/Gelica/Gelica-Bold.otf", weight: "700", style: "normal" },
    { path: "../assets/fonts/Gelica/Gelica-Black.otf", weight: "900", style: "normal" },
  ],
});

export const fontVariables = [sharpGrotesk.variable, gelica.variable].join(" ");
