# YouTube Inline Demo Player Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let every Magazine Showcase card show a play badge over its poster image that swaps the image for an inline YouTube player (one at a time), without changing case-study behavior.

**Architecture:** Add optional `videoUrl` to project data plus a `getYouTubeId` parser. `MagazineShowcaseView` holds a single `playingId` state; when a card's video is active, its `aspect-video` image box renders a click-to-load `youtube-nocookie` iframe instead of the poster, with ✕/Escape to stop.

**Tech Stack:** Vite 8, React 19, TypeScript 7, Tailwind v4, lucide-react. No test framework — verification is `npm run lint` (tsc) + `npm run build` + manual dev-server checks.

## Global Constraints

- No new dependencies.
- `npm run lint` must pass (`tsc --noEmit`); `npm run build` must pass.
- Cards with empty/invalid `videoUrl` must render exactly as today (no badge, no chip).
- Whole-card `onClick` still opens CaseStudyModal; only the play badge and ✕ call `stopPropagation()`.
- Repo has unrelated dirty files (`Experience.tsx`, `WhatIDoView.tsx`, `WhereIveDoneItView.tsx`, `portfolioData.ts` modifications, `geng.png`, `grou.png`) — commit only files each task names; never `git add -A`.
- One player at a time; switching category resets playback.
- Human partner consented to work directly on `main`; only task-named files get committed.

---

### Task 0: Write design spec

**Files:**
- Create: `docs/superpowers/specs/2026-09-30-youtube-inline-demo-design.md`

**Interfaces:**
- Produces: the design spec document consumed by reviewers as background (the briefs remain the requirements source).

- [ ] **Step 1:** Write the approved design to that path. Content must cover these three approved sections:

**1. Data layer** (`src/data/portfolioData.ts` + new `src/utils/youtube.ts`)
- Add optional `videoUrl?: string` to `MagazineProject`; give each of the 4 projects a placeholder `videoUrl: ""` for now.
- New helper `getYouTubeId(url): string | null` — parses `watch?v=`, `youtu.be/`, `/embed/`, `/shorts/` forms. Empty/invalid → `null`.

**2. Card UI & interaction** (`src/components/views/MagazineShowcaseView.tsx`)
- New state `playingId: string | null` at the view level (one player at a time, switching cards stops the previous).
- Image area: `aspect-[16/10]` → `aspect-video` (16:9, no letterbox, no layout shift when swapping).
- Poster state: existing image + centered play `<button>` (accent circle ▶ + "Play Demo" mono label, `aria-label="Play demo video for {title}"`, `stopPropagation()` so it doesn't open the case study reader). Hover gradient overlay stays as-is behind it.
- Playing state: poster replaced by `<iframe src="https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0">` (nocookie domain, iframe only mounts on click — the facade pattern), with a ✕ close button top-right (`stopPropagation()` → restore poster). Escape key also stops playback.
- Meta row gets a `Demo ▶` chip (`{category} · Verified Outcome · Demo ▶`) only when a valid video ID exists — with placeholder URLs today, cards render exactly as now (badge/chip hidden until real URLs are pasted).

**3. Edge cases & verification**
- Switching category filter while playing → reset `playingId` (avoids a hidden orphan player).
- Cards with no/invalid `videoUrl` → unchanged behavior, no badge, no chip.
- Dead legacy `MagazineShowcase.tsx` untouched.
- Verify: `npm run lint` (tsc) + `npm run build`, then manual check in dev — play, ✕/Escape stop, other card click stops first video, title/footer still open Read Spread.

- [ ] **Step 2:** Commit

```bash
git add docs/superpowers/specs/2026-09-30-youtube-inline-demo-design.md
git commit -m "Add spec for inline YouTube demo player"
```

### Task 1: Video URL parsing + data field

**Files:**
- Create: `src/utils/youtube.ts`
- Modify: `src/data/portfolioData.ts` (interface `MagazineProject` around lines 62-73, the 4 entries in `magazineProjects` starting around line 233)

**Interfaces:**
- Produces: `getYouTubeId(url: string | undefined | null): string | null`; `MagazineProject.videoUrl?: string`
- Consumes: nothing from earlier tasks (Task 0 is documentation only).

- [ ] **Step 1:** Create `src/utils/youtube.ts`:

```ts
export function getYouTubeId(url: string | undefined | null): string | null {
  if (!url) return null;
  const patterns = [
    /youtube\.com\/watch\?(?:.*&)?v=([\w-]{11})/,
    /youtu\.be\/([\w-]{11})/,
    /youtube\.com\/embed\/([\w-]{11})/,
    /youtube\.com\/shorts\/([\w-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}
```

- [ ] **Step 2:** In `src/data/portfolioData.ts`, add `videoUrl?: string;` to the `MagazineProject` interface (after `image: string;`). Add `videoUrl: "",` to each of the 4 `magazineProjects` entries (after each entry's `image` line).

- [ ] **Step 3:** Run: `npm run lint`
Expected: no errors.

- [ ] **Step 4:** Commit

```bash
git add src/utils/youtube.ts src/data/portfolioData.ts
git commit -m "Add YouTube URL parsing and videoUrl field"
```

### Task 2: Inline player in showcase cards

**Files:**
- Modify: `src/components/views/MagazineShowcaseView.tsx` (imports/state at top, filter button around line 33, image box around lines 64-79, meta row around lines 83-85)

**Interfaces:**
- Consumes: `getYouTubeId` from `src/utils/youtube.ts` and `videoUrl` from `MagazineProject` (both from Task 1).
- Produces: none (leaf UI task).

- [ ] **Step 1:** Update imports and add state/effect. Final top of file:

```tsx
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { magazineProjects, MagazineProject } from '../../data/portfolioData';
import { getYouTubeId } from '../../utils/youtube';
```

Add inside the component (after `selectedCategory` state):

```tsx
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    if (!playingId) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPlayingId(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [playingId]);
```

- [ ] **Step 2:** Filter buttons reset playback. Change the filter button onClick to:

```tsx
onClick={() => { setSelectedCategory(cat); setPlayingId(null); }}
```

- [ ] **Step 3:** Convert the `filteredProjects.map((project) => (` body to a block statement so per-card values can be computed. Keep the `<article>` with all existing props (`key`, `onClick`, `className`) unchanged:

```tsx
{filteredProjects.map((project) => {
  const videoId = getYouTubeId(project.videoUrl);
  const isPlaying = videoId !== null && playingId === project.id;
  return (
    <article
      key={project.id}
      onClick={() => onSelectProject(project)}
      className="group cursor-pointer bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
    >
      {/* ...existing header bar and image box follow... */}
    </article>
  );
})}
```

- [ ] **Step 4:** Replace the image box (the `<div className="relative aspect-[16/10] ...">` block containing the `<img>` and hover gradient) with:

```tsx
<div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-subtle)]">
  {isPlaying && videoId ? (
    <>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={`${project.title} demo video`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
      <button
        type="button"
        aria-label="Stop demo video"
        onClick={(e) => { e.stopPropagation(); setPlayingId(null); }}
        className="absolute right-3 top-3 z-10 bg-black/70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black"
      >
        <X className="h-4 w-4" />
      </button>
    </>
  ) : (
    <>
      <img
        src={project.image}
        alt={project.title}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLElement).style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <span className="text-xs font-mono text-white bg-black/80 backdrop-blur-sm px-2.5 py-1">
          Open case study reader ↗
        </span>
      </div>
      {videoId && (
        <button
          type="button"
          aria-label={`Play demo video for ${project.title}`}
          onClick={(e) => { e.stopPropagation(); setPlayingId(project.id); }}
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 transition-transform hover:scale-105"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/90 shadow-lg backdrop-blur-sm">
            <Play className="h-6 w-6 fill-current text-[var(--accent-contrast)] translate-x-0.5" />
          </span>
          <span className="bg-black/80 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur-sm">
            Play Demo
          </span>
        </button>
      )}
    </>
  )}
</div>
```

- [ ] **Step 5:** Meta row — replace the tag line block with:

```tsx
<div className="text-xs font-mono text-[var(--accent)]">
  {project.category} · Verified Outcome{videoId ? ' · Demo ▶' : ''}
</div>
```

- [ ] **Step 6:** Verify:

```bash
npm run lint
npm run build
```

Both must pass.

- [ ] **Step 7:** Manual verification. Run `npm run dev`, open http://localhost:3000/#showcase, and confirm:
1. With placeholder `videoUrl: ""` values: no play badge, no `Demo ▶` chip, cards look exactly as before.
2. Temporarily set one entry's `videoUrl` to `https://youtu.be/dQw4w9WgXcQ`: badge + chip appear on that card only.
3. Click badge → inline iframe plays; clicking another card's badge (set a second URL) stops the first.
4. ✕ button and Escape both restore the poster.
5. Clicking the title/summary/footer (outside badge) still opens the case study modal.
6. Switching a category filter while playing stops playback.
7. Remove the temporary real URLs (restore `""`) before committing, unless the user asks to keep them.
Then run `npm run build && npm run preview` and spot-check the built site renders cards without the badge.

- [ ] **Step 8:** Commit

```bash
git add src/components/views/MagazineShowcaseView.tsx
git commit -m "Add inline YouTube demo player to showcase cards"
```
