export function StrataLayers() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[50vh] z-[1] pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full opacity-70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Layer 1: Mountain ridge — left peaks high, descends right */}
        <path
          d="M0,700 L0,80
             C40,72 70,45 120,35 C160,26 190,58 230,42
             C270,26 300,8 350,0 C400,-8 430,30 470,18
             C510,6 540,28 590,40 C640,52 670,32 720,45
             C770,58 810,48 860,60 C910,72 950,55 1000,65
             C1050,75 1100,62 1150,70 C1200,78 1260,68 1320,75
             C1370,80 1410,72 1440,78
             L1440,700 Z"
          fill="hsl(220,30%,7%)"
        />

        {/* Layer 2: Dark navy — follows terrain, smoothed out */}
        <path
          d="M0,700 L0,155
             C80,140 180,120 300,130
             C420,140 520,175 680,165
             C840,155 960,135 1100,145
             C1240,155 1360,140 1440,148
             L1440,700 Z"
          fill="hsl(215,30%,13%)"
        />

        {/* Layer 3: Blue — asymmetric fold, dips left-center, rises right */}
        <path
          d="M0,700 L0,280
             C100,268 200,310 350,325
             C500,340 620,300 760,275
             C900,250 1050,235 1200,245
             C1340,255 1400,248 1440,252
             L1440,700 Z"
          fill="hsl(205,36%,22%)"
        />

        {/* Layer 4: Bright teal — prominent S-curve, thin left, wide right */}
        <path
          d="M0,700 L0,365
             C80,358 160,395 300,415
             C440,435 560,400 700,375
             C840,350 960,330 1120,335
             C1280,340 1380,332 1440,336
             L1440,700 Z"
          fill="hsl(174,50%,38%)"
        />

        {/* Layer 5: Dark green — gentle wave */}
        <path
          d="M0,700 L0,460
             C120,452 260,475 440,485
             C620,495 760,472 920,460
             C1080,448 1220,440 1360,445
             C1410,447 1430,444 1440,445
             L1440,700 Z"
          fill="hsl(158,34%,18%)"
        />

        {/* Layer 6: Dark bottom — flattening */}
        <path
          d="M0,700 L0,555
             C160,548 340,565 560,572
             C780,578 940,562 1140,555
             C1300,550 1400,546 1440,548
             L1440,700 Z"
          fill="hsl(210,28%,11%)"
        />

        {/* Layer 7: Darkest base */}
        <path
          d="M0,700 L0,640 C300,634 600,645 900,640 C1200,635 1380,632 1440,635 L1440,700 Z"
          fill="hsl(220,30%,7%)"
        />

        {/* Contour lines */}
        <g opacity="0.1" fill="none" stroke="hsl(180,35%,55%)" strokeWidth="1">
          <path d="M0,280 C100,268 200,310 350,325 C500,340 620,300 760,275 C900,250 1050,235 1200,245 C1340,255 1400,248 1440,252" />
          <path d="M0,365 C80,358 160,395 300,415 C440,435 560,400 700,375 C840,350 960,330 1120,335 C1280,340 1380,332 1440,336" />
          <path d="M0,460 C120,452 260,475 440,485 C620,495 760,472 920,460 C1080,448 1220,440 1360,445 C1410,447 1430,444 1440,445" />
        </g>

        {/* Sparkle points */}
        <g filter="url(#glow)" fill="hsl(180,50%,80%)">
          <circle cx="230" cy="42" r="1.8" opacity="0.6" />
          <circle cx="350" cy="5" r="2" opacity="0.7" />
          <circle cx="470" cy="20" r="1.5" opacity="0.5" />
          <circle cx="650" cy="48" r="1.4" opacity="0.5" />
          <circle cx="860" cy="65" r="1.8" opacity="0.6" />
          <circle cx="1150" cy="72" r="1.3" opacity="0.4" />
          <circle cx="180" cy="145" r="1.5" opacity="0.5" />
          <circle cx="680" cy="160" r="1.4" opacity="0.45" />
          <circle cx="1100" cy="148" r="1.5" opacity="0.5" />
          <circle cx="350" cy="330" r="2" opacity="0.8" />
          <circle cx="620" cy="310" r="2.2" opacity="0.85" />
          <circle cx="900" cy="280" r="2.5" opacity="0.9" />
          <circle cx="1200" cy="260" r="1.8" opacity="0.75" />
          <circle cx="200" cy="470" r="1.5" opacity="0.45" />
          <circle cx="750" cy="475" r="1.6" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
