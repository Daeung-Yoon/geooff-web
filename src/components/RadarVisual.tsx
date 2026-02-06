"use client";

export default function RadarVisual() {
  return (
    <div className="relative w-full max-w-[540px] aspect-square">
      {/* Ambient glow behind the radar */}
      <div className="absolute inset-0 rounded-full bg-mint-500/5 blur-3xl scale-110" />

      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Mint gradient for waves */}
          <linearGradient id="mintFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </linearGradient>

          {/* Radial glow */}
          <radialGradient id="centerGlow" cx="50%" cy="36%" r="40%">
            <stop offset="0%" stopColor="#00e5be" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00e5be" stopOpacity="0" />
          </radialGradient>

          {/* Ground gradient */}
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1f35" />
            <stop offset="40%" stopColor="#0a1628" />
            <stop offset="100%" stopColor="#070d1a" />
          </linearGradient>

          {/* Signal line gradient */}
          <linearGradient id="signalGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d4aa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="belowGround">
            <rect x="0" y="200" width="500" height="300" />
          </clipPath>
        </defs>

        {/* Background glow */}
        <rect x="0" y="0" width="500" height="500" fill="url(#centerGlow)" />

        {/* Grid lines (subtle measurement grid) */}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`vgrid-${i}`}
            x1={50 + i * 50}
            y1="20"
            x2={50 + i * 50}
            y2="480"
            stroke="#00d4aa"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`hgrid-${i}`}
            x1="20"
            y1={50 + i * 50}
            x2="480"
            y2={50 + i * 50}
            stroke="#00d4aa"
            strokeOpacity="0.04"
            strokeWidth="0.5"
          />
        ))}

        {/* ── Radar source (antenna) ── */}
        <g transform="translate(250, 180)">
          {/* Pulsing rings */}
          <circle
            r="120"
            fill="none"
            stroke="#00d4aa"
            strokeWidth="1"
            opacity="0.5"
            className="animate-radar-pulse"
            style={{ transformOrigin: "center" }}
          />
          <circle
            r="120"
            fill="none"
            stroke="#00d4aa"
            strokeWidth="0.8"
            opacity="0.4"
            className="animate-radar-pulse-delayed"
            style={{ transformOrigin: "center" }}
          />
          <circle
            r="120"
            fill="none"
            stroke="#00d4aa"
            strokeWidth="0.6"
            opacity="0.3"
            className="animate-radar-pulse-delayed-2"
            style={{ transformOrigin: "center" }}
          />

          {/* Center dot */}
          <circle r="4" fill="#00e5be" filter="url(#glow)" />
          <circle r="8" fill="#00e5be" opacity="0.2" className="animate-glow" />
        </g>

        {/* ── Ground surface line ── */}
        <line
          x1="30"
          y1="200"
          x2="470"
          y2="200"
          stroke="#00d4aa"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          filter="url(#glow)"
        />

        {/* Ground surface label */}
        <text x="38" y="195" fill="#00d4aa" fontSize="9" opacity="0.5" fontFamily="monospace">
          SURFACE 0.0m
        </text>

        {/* ── Underground section ── */}
        <rect x="30" y="200" width="440" height="270" fill="url(#groundGrad)" rx="2" opacity="0.6" />

        {/* Depth markers */}
        {[1, 2, 3, 4].map((d) => (
          <g key={`depth-${d}`}>
            <line
              x1="30"
              y1={200 + d * 55}
              x2="470"
              y2={200 + d * 55}
              stroke="#00d4aa"
              strokeOpacity="0.06"
              strokeWidth="0.5"
              strokeDasharray="4 8"
            />
            <text
              x="38"
              y={197 + d * 55}
              fill="#00d4aa"
              fontSize="8"
              opacity="0.3"
              fontFamily="monospace"
            >
              {(d * 1.5).toFixed(1)}m
            </text>
          </g>
        ))}

        {/* ── Radar signal waves going into ground ── */}
        <g clipPath="url(#belowGround)">
          {/* V-shaped radar beam */}
          <path
            d="M250,180 L120,380 L380,380 Z"
            fill="url(#mintFade)"
            opacity="0.06"
          />

          {/* Wave fronts */}
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse
              key={`wave-${i}`}
              cx="250"
              cy={230 + i * 35}
              rx={30 + i * 28}
              ry={8 + i * 3}
              fill="none"
              stroke="#00d4aa"
              strokeWidth={1.2 - i * 0.15}
              opacity={0.35 - i * 0.06}
            />
          ))}
        </g>

        {/* ── Detected objects (subsurface anomalies) ── */}
        <g clipPath="url(#belowGround)">
          {/* Pipe/utility (cylinder cross-section) */}
          <g transform="translate(190, 290)">
            <circle r="14" fill="none" stroke="#00e5be" strokeWidth="1.5" opacity="0.7" filter="url(#glow)" />
            <circle r="14" fill="#00e5be" opacity="0.05" />
            <circle r="3" fill="#00e5be" opacity="0.5" />
            <text x="22" y="4" fill="#4dffd2" fontSize="8" opacity="0.7" fontFamily="monospace">
              PIPE ø280mm
            </text>
          </g>

          {/* Rock/void (irregular shape) */}
          <g transform="translate(310, 340)">
            <path
              d="M-18,-10 L-8,-18 L10,-14 L20,-4 L16,10 L4,16 L-12,12 L-20,2 Z"
              fill="none"
              stroke="#00e5be"
              strokeWidth="1.2"
              opacity="0.5"
              filter="url(#glow)"
            />
            <path
              d="M-18,-10 L-8,-18 L10,-14 L20,-4 L16,10 L4,16 L-12,12 L-20,2 Z"
              fill="#00e5be"
              opacity="0.04"
            />
            <text x="26" y="4" fill="#4dffd2" fontSize="8" opacity="0.6" fontFamily="monospace">
              VOID
            </text>
          </g>

          {/* Rebar/reinforcement */}
          <g transform="translate(150, 240)">
            <rect x="-30" y="-3" width="60" height="6" rx="3" fill="none" stroke="#00e5be" strokeWidth="1" opacity="0.5" filter="url(#glow)" />
            <rect x="-30" y="-3" width="60" height="6" rx="3" fill="#00e5be" opacity="0.05" />
            <text x="36" y="4" fill="#4dffd2" fontSize="8" opacity="0.6" fontFamily="monospace">
              REBAR
            </text>
          </g>

          {/* Deep anomaly */}
          <g transform="translate(280, 410)">
            <ellipse rx="22" ry="12" fill="none" stroke="#00e5be" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" className="animate-dash-flow" />
            <text x="28" y="4" fill="#4dffd2" fontSize="7" opacity="0.4" fontFamily="monospace">
              ANOMALY?
            </text>
          </g>
        </g>

        {/* ── Signal trace path (the zigzag GPR readout) ── */}
        <path
          d="M470,210 L470,230 Q460,235 465,245 Q475,255 468,265 Q458,272 462,285 Q472,298 466,310 Q456,318 460,335 Q474,348 468,360 Q456,370 460,385 Q472,400 466,415 L470,440"
          fill="none"
          stroke="#00d4aa"
          strokeWidth="1.5"
          opacity="0.4"
          strokeDasharray="400"
          className="animate-signal-trace"
          filter="url(#softGlow)"
        />

        {/* ── Corner markers (technical frame) ── */}
        {/* Top-left */}
        <path d="M20,30 L20,20 L30,20" fill="none" stroke="#00d4aa" strokeWidth="1" opacity="0.3" />
        {/* Top-right */}
        <path d="M470,20 L480,20 L480,30" fill="none" stroke="#00d4aa" strokeWidth="1" opacity="0.3" />
        {/* Bottom-left */}
        <path d="M20,470 L20,480 L30,480" fill="none" stroke="#00d4aa" strokeWidth="1" opacity="0.3" />
        {/* Bottom-right */}
        <path d="M470,480 L480,480 L480,470" fill="none" stroke="#00d4aa" strokeWidth="1" opacity="0.3" />

        {/* Status text */}
        <text x="40" y="475" fill="#00d4aa" fontSize="8" opacity="0.3" fontFamily="monospace">
          GPR-AI v3.2 — LIVE SCAN
        </text>
        <text x="350" y="475" fill="#00d4aa" fontSize="8" opacity="0.3" fontFamily="monospace">
          DEPTH: 6.0m MAX
        </text>
      </svg>
    </div>
  );
}
