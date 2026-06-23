import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION } from "@/lib/site";

export const alt = "Pickle Jar Games — Independent Game Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#26286e",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 38,
            fontWeight: 700,
            letterSpacing: 3,
            color: "#fd6721",
          }}
        >
          PICKLE JAR GAMES
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,
            lineHeight: 1.05,
            textTransform: "uppercase",
            marginTop: 28,
          }}
        >
          Redefine Mobile Gaming
        </div>
        <div
          style={{
            fontSize: 30,
            lineHeight: 1.4,
            marginTop: 36,
            maxWidth: 920,
            color: "rgba(255, 255, 255, 0.82)",
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    size,
  );
}
