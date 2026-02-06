import RadarVisual from "@/components/RadarVisual";

/* ─── Icon Components ─────────────────────────────────────── */

function IconAI() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
      <path d="M16 14a4 4 0 0 0-8 0v4a4 4 0 0 0 8 0v-4Z" opacity="0.4" />
      <circle cx="10" cy="6" r="0.5" fill="currentColor" />
      <circle cx="14" cy="6" r="0.5" fill="currentColor" />
      <path d="M9 10h6" />
    </svg>
  );
}

function IconRealtime() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function Icon3D() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" opacity="0.4" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" opacity="0.4" />
      <line x1="8" y1="17" x2="12" y2="17" opacity="0.4" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── Data ────────────────────────────────────────────────── */

const features = [
  {
    icon: <IconAI />,
    title: "AI 탐지",
    description:
      "딥러닝 모델이 지하 매설물, 공동, 균열을 자동으로 식별합니다. 수동 판독 대비 정확도 94% 이상.",
    tag: "DETECTION",
  },
  {
    icon: <IconRealtime />,
    title: "실시간 분석",
    description:
      "현장에서 데이터를 수집하는 즉시 AI가 분석을 시작합니다. 대기 시간 없이 결과를 확인하세요.",
    tag: "REALTIME",
  },
  {
    icon: <Icon3D />,
    title: "3D 매핑",
    description:
      "2D 스캔 데이터를 정밀한 3D 지하 모델로 변환합니다. 깊이, 위치, 크기를 직관적으로 시각화.",
    tag: "MAPPING",
  },
  {
    icon: <IconReport />,
    title: "보고서 자동 생성",
    description:
      "분석 결과를 전문 보고서로 자동 출력합니다. PDF, CAD, GIS 포맷을 지원합니다.",
    tag: "REPORT",
  },
];

const workflow = [
  {
    step: "01",
    title: "스캔",
    description: "GPR 장비로 현장 데이터를 수집합니다.",
    detail: "B-scan / C-scan",
  },
  {
    step: "02",
    title: "분석",
    description: "AI 엔진이 수집된 데이터를 자동 해석합니다.",
    detail: "CNN + Transformer",
  },
  {
    step: "03",
    title: "리포트",
    description: "결과를 시각화하고 보고서를 생성합니다.",
    detail: "PDF / CAD / GIS",
  },
];

const stats = [
  { value: "94%+", label: "탐지 정확도" },
  { value: "10x", label: "분석 속도 향상" },
  { value: "6m", label: "최대 탐지 깊이" },
  { value: "50+", label: "도입 현장" },
];

/* ─── Page ────────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-navy-900">
      {/* Global background effects */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />
      <div className="fixed inset-0 bg-radial-glow pointer-events-none" />

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-mint-500/10 border border-mint-500/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 8l10 6 10-6-10-6Z"
                    stroke="#00d4aa"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 16l10 6 10-6"
                    stroke="#00d4aa"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Geo<span className="text-mint-400">Off</span>
              </span>
            </a>

            {/* Nav links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-slate-400 hover:text-mint-400 transition-colors duration-200">
                기능
              </a>
              <a href="#workflow" className="text-sm text-slate-400 hover:text-mint-400 transition-colors duration-200">
                워크플로우
              </a>
              <a href="#contact" className="text-sm text-slate-400 hover:text-mint-400 transition-colors duration-200">
                문의하기
              </a>
              <a
                href="#contact"
                className="rounded-full bg-mint-500 px-5 py-2 text-sm font-medium text-navy-900 hover:bg-mint-400 transition-colors duration-200"
              >
                데모 신청
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-slate-400 hover:text-white" aria-label="Menu">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text */}
            <div className="relative z-10 max-w-2xl">
              {/* Badge */}
              <div className="mb-8 animate-float-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-mint-500/20 bg-mint-500/5 px-4 py-1.5 text-xs font-mono text-mint-400 tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-400 animate-glow" />
                  GPR AI ENGINE v3.2
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white animate-float-up delay-100">
                지하를 읽는
                <br />
                <span className="text-mint-400 mint-glow-text">인공지능</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-lg animate-float-up delay-200">
                GeoOff는 지표 투과 레이더(GPR) 데이터를 AI로 실시간 분석하여
                지하 매설물과 구조적 이상을 자동으로 탐지합니다.
              </p>

              {/* Stats bar */}
              <div className="mt-10 flex flex-wrap gap-8 animate-float-up delay-300">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-display font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 font-mono tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-4 animate-float-up delay-400">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full bg-mint-500 px-7 py-3.5 text-sm font-semibold text-navy-900 hover:bg-mint-400 transition-all duration-200 mint-glow hover:scale-[1.02]"
                >
                  무료 데모 시작하기
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight />
                  </span>
                </a>
                <a
                  href="#workflow"
                  className="flex items-center gap-2 rounded-full border border-navy-600 px-7 py-3.5 text-sm font-medium text-slate-400 hover:border-mint-500/30 hover:text-mint-400 transition-all duration-200"
                >
                  작동 원리 보기
                </a>
              </div>
            </div>

            {/* Radar Visual */}
            <div className="relative flex items-center justify-center animate-float-up delay-300">
              <RadarVisual />
            </div>
          </div>
        </div>

        {/* Decorative: horizontal scan line */}
        <div className="absolute top-1/2 left-0 right-0 h-px overflow-hidden pointer-events-none">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-mint-500/30 to-transparent animate-scan-sweep" />
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs tracking-widest text-mint-500 uppercase">
              Core Features
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              GPR 분석의 모든 것을
              <br />
              <span className="text-mint-400">하나의 플랫폼</span>에서
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              데이터 수집부터 보고서 출력까지, AI가 전 과정을 자동화합니다.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, i) => (
              <div
                key={feature.tag}
                className="glass-card rounded-2xl p-6 relative group overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-mint-500/5 to-transparent rounded-bl-3xl" />

                {/* Tag */}
                <span className="inline-block font-mono text-[10px] tracking-widest text-mint-500/60 mb-4">
                  {feature.tag}
                </span>

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/10 text-mint-400 border border-mint-500/10 group-hover:border-mint-500/30 transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section id="workflow" className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-xs tracking-widest text-mint-500 uppercase">
              How It Works
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              3단계로 완성되는 <span className="text-mint-400">지하 분석</span>
            </h2>
          </div>

          {/* Workflow steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector lines (desktop) */}
            <div className="hidden md:block absolute top-16 left-[calc(33.333%-20px)] right-[calc(33.333%-20px)] h-px">
              <div className="w-full h-full border-t border-dashed border-mint-500/20" />
            </div>

            {workflow.map((item, i) => (
              <div key={item.step} className="relative text-center group">
                {/* Step number circle */}
                <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-mint-500/15 group-hover:border-mint-500/40 transition-colors duration-500" />
                  {/* Inner ring */}
                  <div className="absolute inset-3 rounded-full border border-mint-500/10 group-hover:border-mint-500/25 transition-colors duration-500" />
                  {/* Center */}
                  <div className="relative flex flex-col items-center">
                    <span className="font-mono text-3xl font-bold text-mint-400 mint-glow-text">
                      {item.step}
                    </span>
                    <span className="font-mono text-[9px] tracking-widest text-mint-500/50 mt-1">
                      {item.detail}
                    </span>
                  </div>
                </div>

                {/* Arrow between steps (mobile) */}
                {i < workflow.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="1" strokeOpacity="0.3">
                      <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                  </div>
                )}

                {/* Text */}
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section id="contact" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl glass-card p-12 lg:p-20">
            {/* Background glow */}
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-mint-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-mint-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <span className="font-mono text-xs tracking-widest text-mint-500 uppercase">
                  Get Started
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  지금 GeoOff를
                  <br />
                  <span className="text-mint-400">경험해보세요</span>
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
                  무료 데모를 신청하고, AI 기반 GPR 분석이 현장 업무를 어떻게 혁신하는지 직접 확인하세요.
                </p>
                <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
                    무료 체험
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
                    설치 불필요
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
                    즉시 시작
                  </span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4" onSubmit={undefined}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2 tracking-wider">
                      이름
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="홍길동"
                      className="w-full rounded-xl border border-navy-600 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-mint-500/50 focus:outline-none focus:ring-1 focus:ring-mint-500/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-mono text-slate-500 mb-2 tracking-wider">
                      회사명
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="(주)건설기술"
                      className="w-full rounded-xl border border-navy-600 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-mint-500/50 focus:outline-none focus:ring-1 focus:ring-mint-500/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2 tracking-wider">
                    이메일
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-navy-600 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-mint-500/50 focus:outline-none focus:ring-1 focus:ring-mint-500/20 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2 tracking-wider">
                    문의 내용
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="관심 있는 기능이나 문의사항을 알려주세요."
                    className="w-full rounded-xl border border-navy-600 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-mint-500/50 focus:outline-none focus:ring-1 focus:ring-mint-500/20 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-mint-500 py-3.5 text-sm font-semibold text-navy-900 hover:bg-mint-400 transition-all duration-200 mint-glow hover:scale-[1.01]"
                >
                  데모 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative border-t border-navy-700/50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-mint-500/10 border border-mint-500/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 8l10 6 10-6-10-6Z" stroke="#00d4aa" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M2 16l10 6 10-6" stroke="#00d4aa" strokeWidth="1.5" strokeLinejoin="round" opacity="0.5" />
                </svg>
              </div>
              <span className="font-display text-sm font-bold text-white">
                Geo<span className="text-mint-400">Off</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex justify-center gap-8">
              <a href="#features" className="text-xs text-slate-500 hover:text-mint-400 transition-colors">
                기능
              </a>
              <a href="#workflow" className="text-xs text-slate-500 hover:text-mint-400 transition-colors">
                워크플로우
              </a>
              <a href="#contact" className="text-xs text-slate-500 hover:text-mint-400 transition-colors">
                문의
              </a>
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-xs text-slate-600 font-mono">
                &copy; 2026 GeoOff. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
