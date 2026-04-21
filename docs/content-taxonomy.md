# Content Taxonomy

> Payload schemas, rank tags, topic structure, channel whitelist format.
> Source of truth for what "content" means inside Vantage.

---

## Rank tiers (used across content tagging)

| Tag | Human name | In-game ranks |
|---|---|---|
| `iron-silver` | Beginner | Iron 1–3, Bronze 1–3, Silver 1–3 |
| `gold-plat` | Intermediate | Gold 1–3, Platinum 1–3 |
| `diamond-plus` | Advanced | Diamond 1–3, Ascendant 1–3 |
| `immortal-plus` | Elite | Immortal 1–3, Radiant |

**Note:** individual user rank is stored more granularly (e.g., `gold-2`), but content is tagged at the tier level (`gold-plat`).

---

## Topics (V1.0 — 5 launch topics)

| Slug | Display title | Focus |
|---|---|---|
| `fundamentals` | Fundamentals | Basics: movement, spray patterns, eco basics |
| `crosshair-aim` | Crosshair Placement & Aim | Crosshair, pre-aim, tap/burst/spray |
| `maps` | Maps: Callouts & Angles | Map-specific callouts, common angles |
| `utility` | Utility Usage | Smokes, flashes, lineups, util economy |
| `economy` | Economy | Credit management, save vs force vs full buy |

### V1.1 additions (~1–2 mo post MVP)
- `agents`
- `weapons`

### V1.2 additions (~2–3 mo post V1.1)
- `team-play` — comms, IGL, coordination
- `mindset` — tilt control, decision-making under pressure
- `vod-review-methodology` — how to review your own play
- `ranked-climbing` — strategies for consistent rank progression
- `meta-awareness` — patch notes, agent/weapon meta shifts

---

## Payload collections

### `topics` collection
```
{
  slug: string (unique),
  title: string,
  description: string (rich text),
  rankTier: 'iron-silver' | 'gold-plat' | 'diamond-plus' | 'immortal-plus' | 'all',
  focusAreas: string[] (tags for LLM matching),
  order: number (display order in Library),
  publishedAt: DateTime,
  status: 'draft' | 'published' | 'archived',
}
```

### `creator-whitelist` collection
```
{
  channelName: string,
  channelHandle: string (e.g., "@Woohoojin"),
  channelId: string (UC... — YouTube Data API format),
  channelUrl: string,
  focusAreas: string[] (subset of taxonomy below),
  rankTier: 'iron-silver' | 'gold-plat' | 'diamond-plus' | 'immortal-plus' | 'all',
  credentials: string,
  uploadFrequency: 'daily' | 'weekly' | 'monthly' | 'irregular',
  syncEnabled: boolean (default true; admin can pause a channel),
  lastSyncedAt: DateTime,
  notes: string (internal editorial notes),
}
```

### `video_pool` table (Drizzle, not Payload — synced from YouTube)
```
{
  videoId: string (YouTube ID, primary),
  channelId: string (foreign to creator-whitelist),
  title: string,
  description: string,
  publishedAt: DateTime,
  durationSeconds: number,
  thumbnailUrl: string,
  defaultAudioLanguage: string | null,
  tags: string[] (YouTube's own tags),
  syncedAt: DateTime,
  // inferred / computed fields for matching:
  inferredFocusAreas: string[],   // LLM-derived from title + description
  inferredRankTier: string,       // LLM-derived from title + description
  active: boolean,                // false if channel removed from whitelist or creator deleted video
}
```

---

## Focus areas taxonomy (used in both whitelist + topics)

Canonical list — additions require updating this doc + the LLM matching prompts.

- `aim`
- `crosshair`
- `maps` (generic map knowledge, callouts)
- `utility` (abilities use, lineups)
- `agents` (agent-specific content)
- `economy` (credit management)
- `game-sense` (game reading, decision-making)
- `vod-review` (reviewing own/others' play)
- `mindset` (tilt, focus, motivation)
- `ranked` (climbing-specific strategies)
- `team-play` (comms, coordination, IGL)
- `weapons` (gun-specific tutorials)
- `movement` (advanced movement tech)

---

## Creator whitelist — v1 (initial MVP set)

Sourced 2026-04-21. Channel IDs pending YouTube API resolution during ingestion bootstrap.

| # | Channel | URL | Focus Areas | Rank Tier | Credentials | Upload Freq |
|---|---|---|---|---|---|---|
| 1 | Woohoojin | https://youtube.com/@Woohoojin | vod-review, mindset, game-sense | gold-plat | Full-time coach, Radiant | Daily |
| 2 | ProGuides Valorant | https://youtube.com/@ProGuidesValorant | agents, utility, maps | all | Educational studio | Weekly |
| 3 | Sliggy | https://youtube.com/@Sliggy | vod-review, game-sense, utility | diamond-plus | Former T1/Guard coach | Weekly |
| 4 | Skill Capped Valorant | https://youtube.com/@SkillCappedValorant | game-sense, ranked, agents | gold-plat | Educational studio | Weekly |
| 5 | Sean Gares | https://youtube.com/@seangares | game-sense, vod-review, mindset | immortal-plus | Former CS pro, 100T coach | Irregular |
| 6 | Average Jonas | https://youtube.com/@AverageJonas | agents (Sova), utility, maps | all | Sova lineup specialist | Weekly |
| 7 | Leviathan | https://youtube.com/@LeviathanValorant | vod-review, game-sense | diamond-plus | Professional coach | Weekly |
| 8 | Aimlabs | https://youtube.com/@Aimlabs | aim, crosshair | all | Aim-training platform | Weekly |
| 9 | ShiverValorant | https://youtube.com/@ShiverValorant | ranked, game-sense, agents | gold-plat | Radiant coach | Weekly |
| 10 | Valorcast | https://youtube.com/@Valorcast | utility, maps, agents | all | Lineup/guide specialist | Weekly |
| 11 | zander | https://youtube.com/@zandervalorant | aim, crosshair, mindset | diamond-plus | Aim coach, Radiant | Weekly |
| 12 | Gilbert | https://youtube.com/@GilbertAlwaysWins | game-sense, ranked, vod-review | gold-plat | Immortal educational creator | Weekly |
| 13 | Peak Valorant | https://youtube.com/@PeakValorant | agents, utility, maps | all | Guide-focused channel | Weekly |
| 14 | tarik (educational) | https://youtube.com/@tarik | game-sense, vod-review | immortal-plus | Former CS pro, top streamer | Daily |
| 15 | ioStux | https://youtube.com/@ioStuxVAL | agents, utility, economy | all | Long-form agent guides | Weekly |
| 16 | Fiercepapa | https://youtube.com/@fiercepapa | aim, mindset, ranked | gold-plat | Aim-focused coach | Weekly |
| 17 | Thinking Man's Valorant | https://youtube.com/@ThinkingMansValorant | game-sense, vod-review, economy | diamond-plus | Analyst, strategy deep-dives | Weekly |
| 18 | Hitscan | https://youtube.com/@HitscanVAL | aim, crosshair, mindset | diamond-plus | Aim coach | Weekly |
| 19 | Coach Curtis | https://youtube.com/@CoachCurtisVAL | vod-review, ranked, mindset | iron-silver | Low-elo specialist | Weekly |
| 20 | TenZ (educational) | https://youtube.com/@TenZOfficial | aim, crosshair, agents | immortal-plus | Sentinels pro, Radiant | Daily |

**Ingestion bootstrap TODO:**
- Resolve each handle to Channel ID via `channels.list?forHandle=@<handle>` (one-time).
- Verify last upload < 6 months.
- Set `defaultAudioLanguage` filter at video level (some creators post non-English occasionally).
- Drop or flag any creator who goes inactive 6+ months.

**Editorial review cadence:** quarterly. Creators may be added or removed based on content quality and upload consistency.

---

## Rank-to-tier mapping (reference)

For the DB: store individual rank (e.g., `gold-2`). For filters and content matching: map to tier:

```ts
function rankToTier(rank: string): TierTag {
  const tier = rank.split('-')[0];
  if (['iron', 'bronze', 'silver'].includes(tier)) return 'iron-silver';
  if (['gold', 'platinum'].includes(tier)) return 'gold-plat';
  if (['diamond', 'ascendant'].includes(tier)) return 'diamond-plus';
  if (['immortal', 'radiant'].includes(tier)) return 'immortal-plus';
  return 'gold-plat'; // default for unranked
}
```

**Default for unranked:** `gold-plat` (our primary audience bucket).
