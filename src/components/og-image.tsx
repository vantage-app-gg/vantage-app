import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Vantage — Valorant improvement tool for Gold–Ascendant players";
export const ogContentType = "image/png";

const BG = "#0a0a0a";
const ACCENT = "#0ea5b7";
const FG = "#f5f5f5";
const MUTED = "#a3a3a3";

export async function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG,
          backgroundImage: `radial-gradient(circle at 12% 18%, rgba(14, 165, 183, 0.28) 0%, transparent 45%), radial-gradient(circle at 95% 95%, rgba(14, 165, 183, 0.16) 0%, transparent 50%)`,
          color: FG,
          padding: 80,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 40,
              height: 40,
              background: ACCENT,
              boxShadow: `0 0 48px ${ACCENT}`,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: FG,
            }}
          >
            Vantage
          </div>
        </div>

        <div style={{ flex: 1, display: "flex" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              lineHeight: 1,
              letterSpacing: -3,
              fontWeight: 700,
              color: FG,
            }}
          >
            Climb with intent.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              color: MUTED,
              maxWidth: 940,
              lineHeight: 1.35,
            }}
          >
            Curated creator content and AI-powered match analysis for
            Gold–Ascendant Valorant players.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: ACCENT,
            }}
          >
            vantage-app.gg
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Not endorsed by Riot Games
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
