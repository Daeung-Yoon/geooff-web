export function GeooffLogo({
  className = "h-14 w-auto",
}: { className?: string }) {
  // Geometric G — narrow elliptical arc + horizontal bar only (no vertical bar)
  const gcx = 21, gcy = 42, grx = 15, gry = 21, gsw = 8.5;
  const gapDeg = 50;
  const gsx = Math.round((gcx + grx * Math.cos(gapDeg * Math.PI / 180)) * 10) / 10;
  const gsy = Math.round((gcy - gry * Math.sin(gapDeg * Math.PI / 180)) * 10) / 10;
  const gex = gcx + grx; // right-middle end
  const gbar = gcx + 5;  // horizontal bar inward to center+5
  const gArc = `M ${gsx} ${gsy} A ${grx} ${gry} 0 1 0 ${gex} ${gcy} H ${gbar}`;

  // OO slightly larger for visual emphasis
  const lcx = 92, rcx = 116, cy = 46, r = 16, sw = 5;
  const font = "'Space Grotesk', 'Montserrat', system-ui, sans-serif";

  return (
    <svg
      viewBox="0 0 200 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Geooff"
    >
      <defs>
        {/* ── Ge: Matte Midnight Navy ── */}
        <linearGradient id="geMain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F3350" />
          <stop offset="100%" stopColor="#1A2A44" />
        </linearGradient>

        {/* Ge: Inner shadow for matte carved depth */}
        <filter id="geInner" x="-5%" y="-5%" width="110%" height="120%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="1.6" />
          <feOffset dx="1" dy="1.5" result="shadow" />
          <feFlood floodColor="#0A1525" floodOpacity="0.55" result="color" />
          <feComposite in="color" in2="shadow" operator="in" result="innerShadow" />
          <feComposite in="innerShadow" in2="SourceAlpha" operator="in" result="clipped" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="clipped" />
          </feMerge>
        </filter>

        {/* ── OO: Teal gradient ── */}
        <linearGradient id="ooM" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A0FFEE" />
          <stop offset="40%" stopColor="#79F8F8" />
          <stop offset="100%" stopColor="#45D4D0" />
        </linearGradient>

        {/* ── ff: Metallic Silver / Brushed Metal ── */}
        <linearGradient id="ffMetal" x1="0.1" y1="1" x2="0.35" y2="0">
          <stop offset="0%" stopColor="#A8A9AD" />
          <stop offset="40%" stopColor="#BEC0C5" />
          <stop offset="70%" stopColor="#D2D4D9" />
          <stop offset="100%" stopColor="#E1E2E5" />
        </linearGradient>

        {/* ff: Brushed metal highlight — light from top-left */}
        <linearGradient id="ffHighlight" x1="0" y1="0" x2="0.5" y2="0.7">
          <stop offset="0%" stopColor="#F5F6F8" />
          <stop offset="30%" stopColor="#E8EAED" />
          <stop offset="100%" stopColor="#B8BABE" />
        </linearGradient>

        {/* ── Global: Unified drop shadow (bottom-right, floating) ── */}
        <filter id="dropShadow" x="-15%" y="-10%" width="135%" height="155%">
          <feDropShadow dx="2.5" dy="3.5" stdDeviation="2.8" floodColor="rgba(0,0,0,0.5)" />
        </filter>

        {/* OO: Glow + unified drop shadow */}
        <filter id="ooGlow" x="-25%" y="-25%" width="155%" height="165%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#79F8F8" floodOpacity="0.5" />
          <feDropShadow dx="2.5" dy="3.5" stdDeviation="2.8" floodColor="rgba(0,0,0,0.45)" />
        </filter>

        {/* OO clip paths */}
        <clipPath id="topX"><rect x="98" y="26" width="14" height="20" /></clipPath>
        <clipPath id="botX"><rect x="98" y="46" width="14" height="20" /></clipPath>
        <clipPath id="cL"><circle cx={lcx} cy={cy} r={r - sw / 2 - 0.5} /></clipPath>
        <clipPath id="cR"><circle cx={rcx} cy={cy} r={r - sw / 2 - 0.5} /></clipPath>
      </defs>

      {/* ==================== "G" — Narrow elliptical arc + bar ==================== */}
      {/* Depth extrusion */}
      {[4, 3, 2, 1].map((i) => (
        <g key={`G${i}`} transform={`translate(${i * 0.7},${i * 0.8})`}>
          <path d={gArc} stroke={`rgba(8,14,26,${0.3 + i * 0.1})`}
            strokeWidth={gsw} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      {/* Main fill with drop shadow */}
      <path d={gArc} stroke="url(#geMain)" strokeWidth={gsw}
        fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#dropShadow)" />
      {/* Inner shadow for matte depth */}
      <path d={gArc} stroke="url(#geMain)" strokeWidth={gsw}
        fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#geInner)" />

      {/* ==================== "e" — Matte Midnight Navy ==================== */}
      {[4, 3, 2, 1].map((i) => (
        <text key={`e${i}`} x={42 + i * 0.7} y={64 + i * 0.8}
          fontFamily={font} fontWeight="700" fontSize="64"
          fill={`rgba(8,14,26,${0.3 + i * 0.1})`}>e</text>
      ))}
      <text x="42" y="64" fontFamily={font}
        fontWeight="700" fontSize="64" fill="url(#geMain)" filter="url(#dropShadow)">e</text>
      <text x="42" y="64" fontFamily={font}
        fontWeight="700" fontSize="64" fill="url(#geMain)" filter="url(#geInner)">e</text>

      {/* ========= INFINITY KNOT "OO" — Teal, slightly larger ========= */}

      {/* Depth extrusion */}
      {[4, 3, 2, 1].map((i) => (
        <g key={`od${i}`}>
          <circle cx={rcx + i * 0.6} cy={cy + i * 0.7} r={r}
            stroke={`rgba(15,70,68,${0.25 + i * 0.08})`} strokeWidth={sw} fill="none" />
          <circle cx={lcx + i * 0.6} cy={cy + i * 0.7} r={r}
            stroke={`rgba(15,70,68,${0.25 + i * 0.08})`} strokeWidth={sw} fill="none" />
        </g>
      ))}

      {/* Layer 1: Right circle FULL (base) */}
      <circle cx={rcx} cy={cy} r={r}
        stroke="url(#ooM)" strokeWidth={sw} fill="none" filter="url(#ooGlow)" />

      {/* Layer 2: Dark gap at TOP crossing */}
      <g clipPath="url(#topX)">
        <circle cx={lcx} cy={cy} r={r}
          stroke="rgba(0,15,14,0.7)" strokeWidth={sw + 3} fill="none" />
      </g>

      {/* Layer 3: Left circle FULL (over right at top) */}
      <circle cx={lcx} cy={cy} r={r}
        stroke="url(#ooM)" strokeWidth={sw} fill="none" filter="url(#ooGlow)" />

      {/* Layer 4: Dark gap at BOTTOM crossing */}
      <g clipPath="url(#botX)">
        <circle cx={rcx} cy={cy} r={r}
          stroke="rgba(0,15,14,0.7)" strokeWidth={sw + 3} fill="none" />
      </g>

      {/* Layer 5: Right circle BOTTOM crossing (over left at bottom) */}
      <g clipPath="url(#botX)">
        <circle cx={rcx} cy={cy} r={r}
          stroke="url(#ooM)" strokeWidth={sw} fill="none" />
      </g>

      {/* Metallic highlight arcs */}
      <path d={`M ${lcx - 12} ${cy - 11} A ${r} ${r} 0 0 1 ${lcx + 7} ${cy - 14}`}
        stroke="#C0FFF4" strokeWidth="1.4" fill="none" opacity="0.6" strokeLinecap="round" />
      <path d={`M ${rcx - 12} ${cy - 11} A ${r} ${r} 0 0 1 ${rcx + 7} ${cy - 14}`}
        stroke="#C0FFF4" strokeWidth="1.4" fill="none" opacity="0.6" strokeLinecap="round" />

      {/* Signal arcs — left circle, facing LEFT */}
      <g clipPath="url(#cL)" opacity="0.55">
        <path d={`M ${lcx} ${cy - 3.5} A 3.5 3.5 0 0 0 ${lcx} ${cy + 3.5}`}
          stroke="url(#ooM)" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <path d={`M ${lcx} ${cy - 7.5} A 7.5 7.5 0 0 0 ${lcx} ${cy + 7.5}`}
          stroke="url(#ooM)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Signal arcs — right circle, facing RIGHT */}
      <g clipPath="url(#cR)" opacity="0.55">
        <path d={`M ${rcx} ${cy - 3.5} A 3.5 3.5 0 0 1 ${rcx} ${cy + 3.5}`}
          stroke="url(#ooM)" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <path d={`M ${rcx} ${cy - 7.5} A 7.5 7.5 0 0 1 ${rcx} ${cy + 7.5}`}
          stroke="url(#ooM)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* ==================== "ff" — Metallic Silver ==================== */}
      {/* Depth extrusion */}
      {[4, 3, 2, 1].map((i) => (
        <text key={`ff${i}`} x={133 + i * 0.7} y={64 + i * 0.8}
          fontFamily={font} fontWeight="700" fontSize="58" letterSpacing="-1"
          fill={`rgba(20,22,28,${0.25 + i * 0.08})`}>ff</text>
      ))}
      {/* Main metallic fill with drop shadow */}
      <text x="133" y="64" fontFamily={font}
        fontWeight="700" fontSize="58" letterSpacing="-1"
        fill="url(#ffMetal)" filter="url(#dropShadow)">ff</text>
      {/* Brushed metal highlight — top-left satin sheen */}
      <text x="133" y="64" fontFamily={font}
        fontWeight="700" fontSize="58" letterSpacing="-1"
        fill="url(#ffHighlight)" clipPath="inset(0 0 55% 0)" opacity="0.5">ff</text>
    </svg>
  );
}

export function GeooffIcon({
  className = "h-6 w-6",
}: { className?: string }) {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg"
      className={className} aria-label="Geooff icon">
      <defs>
        <linearGradient id="iM" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A0FFEE" />
          <stop offset="40%" stopColor="#79F8F8" />
          <stop offset="100%" stopColor="#45D4D0" />
        </linearGradient>
        <filter id="iGl" x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#79F8F8" floodOpacity="0.45" />
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="rgba(0,0,0,0.3)" />
        </filter>
        <clipPath id="iBt"><rect x="17" y="26" width="10" height="14" /></clipPath>
      </defs>
      <g filter="url(#iGl)">
        <circle cx="32" cy="26" r="12" stroke="url(#iM)" strokeWidth="4" fill="none" />
        <g clipPath="url(#iBt)">
          <circle cx="20" cy="26" r="12" stroke="rgba(0,15,14,0.6)" strokeWidth="7" fill="none" />
        </g>
        <circle cx="20" cy="26" r="12" stroke="url(#iM)" strokeWidth="4" fill="none" />
        <g clipPath="url(#iBt)">
          <circle cx="32" cy="26" r="12" stroke="rgba(0,15,14,0.6)" strokeWidth="7" fill="none" />
          <circle cx="32" cy="26" r="12" stroke="url(#iM)" strokeWidth="4" fill="none" />
        </g>
      </g>
    </svg>
  );
}
