# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

지표 투과 레이더(GPR) AI 분석 소프트웨어 **GeoOff** 홍보용 랜딩 페이지.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — Uses `@theme inline` directive in `globals.css` for custom design tokens (not `tailwind.config.js`)
- **Fonts**: Syne (display/headings via `--font-display`), Geist Sans (body via `--font-body`), Geist Mono (code via `--font-mono`)

## Architecture

- `src/app/` — Next.js App Router pages and layouts
  - `globals.css` — Tailwind theme tokens (navy/mint color palette), keyframe animations, utility classes (`.glass`, `.glass-card`, `.mint-glow`, `.bg-grid-pattern`)
  - `layout.tsx` — Root layout with font loading and metadata
  - `page.tsx` — Single-page landing with sections: Navbar, Hero, Features, Workflow, CTA/Contact, Footer
- `src/components/` — Reusable components
  - `RadarVisual.tsx` — Animated SVG radar visualization (client component)

## Design System

Color palette defined as Tailwind theme tokens:
- **Navy**: `navy-950` (#040810) through `navy-500` (#1a3d5c) — backgrounds and surfaces
- **Mint**: `mint-600` (#009e7e) through `mint-300` (#4dffd2) — accent color
- Primary dark background: `navy-900` (#070d1a)
- Primary accent: `mint-500` (#00d4aa)

All custom animations are CSS-only (no JS animation libraries). Glass morphism effects use `backdrop-filter: blur()`.

## Language

UI copy is in Korean (한국어). `<html lang="ko">`.
