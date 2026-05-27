import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Daily French — A fresh French manicure every morning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fbf8f4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: "#e9b8b8",
          }}
        />

        {/* Decorative circle top-right */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "#f4dede",
            opacity: 0.5,
          }}
        />

        {/* Decorative circle bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "#e8d9c6",
            opacity: 0.4,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 15,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#6b625b",
              marginBottom: 32,
            }}
          >
            Daily Disposable French Manicure
          </div>

          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "#1c1916",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              textAlign: "center",
            }}
          >
            The Daily French
          </div>

          <div
            style={{
              marginTop: 8,
              width: 60,
              height: 1,
              background: "#e9b8b8",
            }}
          />

          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "#6b625b",
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            A fresh French manicure every morning.
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 15,
            color: "#e9b8b8",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          thedailyfrench.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
