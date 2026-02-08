# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

지표 투과 레이더(GPR) AI 분석 소프트웨어 **Geooff** 홍보용 랜딩 페이지.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Deployment

- **Hosting**: Vercel (자동 배포)
- **Domain**: geooff.ai (hostingkr 도메인 → Vercel 연동)
- **GitHub**: Daeung-Yoon/geooff-web
- **배포 흐름**: `main` 브랜치에 push → Vercel 자동 빌드/배포
- **배포 명령**: `/deploy` 스킬 사용 — 커밋 + 빌드 검증 + push를 한번에 수행

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** — Uses `@theme inline` directive in `globals.css` for semantic color tokens
- **Fonts**: Inter (body/sans via `--font-sans`), Space Grotesk (display/headings via `--font-display`)
- **Icons**: lucide-react

## Architecture

- `src/app/` — Next.js App Router pages and layouts
  - `globals.css` — Tailwind v4 theme tokens (semantic color system: background, foreground, card, primary, secondary, muted, border)
  - `layout.tsx` — Root layout with Inter + Space Grotesk font loading and metadata
  - `page.tsx` — Multi-section landing page assembling all geocoff components
- `src/components/geocoff/` — Page section components
  - `logo.tsx` — SVG logo ("Ge" + two overlapping circles "oo" + "ff") and icon
  - `navbar.tsx` — Fixed top navbar with mobile menu (client component)
  - `hero.tsx` — Hero section with text content + strata visual (client component)
  - `strata-visual.tsx` — Canvas-based animated geological strata layers (client component)
  - `features.tsx` — 6-card feature grid with lucide icons
  - `stats.tsx` — 4-column stats bar
  - `solutions.tsx` — Tabbed solutions section (client component)
  - `cta.tsx` — Call-to-action section
  - `footer.tsx` — Footer with link groups

## Design System

Semantic color tokens defined via Tailwind v4 `@theme inline`:
- **background**: `hsl(220 30% 7%)` — page background (dark navy)
- **foreground**: `hsl(210 20% 92%)` — primary text
- **card**: `hsl(220 28% 10%)` — card surfaces
- **primary**: `hsl(174 62% 55%)` — teal accent
- **secondary**: `hsl(220 20% 14%)` — secondary surfaces
- **muted-foreground**: `hsl(215 15% 55%)` — muted text
- **border**: `hsl(220 20% 18%)` — border color

Usage: `bg-background`, `text-foreground`, `bg-card`, `text-primary`, `text-muted-foreground`, `border-border`, etc.

## Language

UI copy is in English. `<html lang="en">`.
