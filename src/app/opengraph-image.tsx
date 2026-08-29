import { ImageResponse } from "next/og";

export const alt = "Wick's World — Creative studio, Lagos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0b",
          color: "#f3efe6",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", opacity: 0.6 }}>
          <span>Wick&apos;s World</span>
          <span>Lagos, Nigeria</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: -2 }}>
            We make visuals that carry the business.
          </div>
          <div style={{ marginTop: 28, fontSize: 24, opacity: 0.7 }}>
            W&apos;s Creative Studios Ltd · Photography, film, content, direction
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
