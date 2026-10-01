# Inline YouTube Demo Player — Design Spec

Date: 2026-09-30

Play a YouTube demo video inline on each magazine showcase card, without opening the case study reader. Poster-first (facade pattern), one player at a time, hidden until real video URLs exist.

## 1. Data layer

Files: `src/data/portfolioData.ts` + new `src/utils/youtube.ts`

- Add optional `videoUrl?: string` to the `MagazineProject` interface.
- Give each of the 4 projects a placeholder `videoUrl: ""` for now.
- New helper `getYouTubeId(url): string | null` in `src/utils/youtube.ts` — parses `watch?v=`, `youtu.be/`, `/embed/`, `/shorts/` forms. Empty/invalid → `null`.

## 2. Card UI & interaction

File: `src/components/views/MagazineShowcaseView.tsx`

- New state `playingId: string | null` at the view level (one player at a time, switching cards stops the previous).
- Image area: `aspect-[16/10]` → `aspect-video` (16:9, no letterbox, no layout shift when swapping).
- Poster state: existing image + centered play `<button>` (accent circle ▶ + "Play Demo" mono label, `aria-label="Play demo video for {title}"`, `stopPropagation()` so it doesn't open the case study reader). Hover gradient overlay stays as-is behind it.
- Playing state: poster replaced by `<iframe src="https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0">` (nocookie domain, iframe only mounts on click — the facade pattern), with a ✕ close button top-right (`stopPropagation()` → restore poster). Escape key also stops playback.
- Meta row gets a `Demo ▶` chip (`{category} · Verified Outcome · Demo ▶`) only when a valid video ID exists — with placeholder URLs today, cards render exactly as now (badge/chip hidden until real URLs are pasted).

## 3. Edge cases & verification

- Switching category filter while playing → reset `playingId` (avoids a hidden orphan player).
- Cards with no/invalid `videoUrl` → unchanged behavior, no badge, no chip.
- Dead legacy `MagazineShowcase.tsx` untouched.
- Verify: `npm run lint` (tsc) + `npm run build`, then manual check in dev — play, ✕/Escape stop, other card click stops first video, title/footer still open Read Spread.
