# Domain Glossary — Valorant terminology

> Purpose: make Claude fluent in Valorant-speak. When generating user-facing copy, AI prompts, or code identifiers, use these terms correctly.

---

## Ranks (ascending)

Iron (1-3) · Bronze (1-3) · Silver (1-3) · Gold (1-3) · Platinum (1-3) · Diamond (1-3) · Ascendant (1-3) · Immortal (1-3) · Radiant.

**Rank tiers used in our content tagging:**
- `iron-silver` (beginner)
- `gold-plat` (intermediate — our primary audience)
- `diamond-plus` (advanced — our secondary audience)

**RR (Rank Rating):** Points within a rank (0-100). Wins add RR, losses deduct. Used for promotion/demotion matches.

**MMR (Match Making Rating):** Hidden skill rating. Influences matchmaking and RR gains.

---

## Game flow

- **Round:** A single play of attack or defense, up to 25 rounds per match (first to 13).
- **Half:** 12 rounds (attack or defense). Sides swap after the first half.
- **Overtime:** Extra rounds if tied 12-12.
- **Match:** Full game, ~30–45 minutes.
- **Pistol round:** Round 1 and round 13 (first round of each half). Only pistols + basic abilities allowed due to minimal eco.
- **Eco round:** A round where the team saves credits, often using pistols or cheap weapons.
- **Bonus round (anti-eco):** A round where the team has credits but the enemy is on eco.
- **Full buy:** A round where the team can afford rifles + full utility.
- **Force buy:** Mid-tier buy when credits are limited, taking a risk instead of eco-ing.

---

## Map & positioning

- **Site (A/B/C):** Bomb plant locations on each map (most maps have two; Haven and Lotus have three).
- **Plant:** Placing the Spike on a site (attackers).
- **Defuse:** Defusing the planted Spike (defenders). Takes 3.5s (half-defuse at 3.5s if holding + stopping).
- **Post-plant:** Defending the site after Spike is planted.
- **Retake:** Defenders attempting to reclaim a planted site.
- **Rotation:** Moving from one site to another.
- **Flank:** Attacking from behind the enemy's position.
- **Hold / held angle:** Static position watching a sightline.
- **Lineup:** Pre-aimed ability throw from a specific spot to a specific target.
- **Callouts:** Named map locations used for comms ("A Heaven", "B Main", "CT", etc.).

---

## Aim & gunplay

- **Crosshair placement:** Keeping the crosshair at head-level along common enemy angles before engagement.
- **Pre-aim:** Aiming at an anticipated enemy location before you see them.
- **Counter-strafe:** Tapping the opposite movement key to stop instantly for accurate shots.
- **Spray:** Holding the trigger (usually only effective at close range with rifles).
- **Tap / burst / spray:** Firing modes based on range (tap = long, burst = mid, spray = close).
- **First blood / opening kill:** First kill of a round.
- **One-tap / headshot:** Single-shot kill to the head.
- **Whiff:** Missing a shot you should have hit.
- **Trade / trade frag:** Killing the enemy who just killed your teammate.
- **Peek:** Moving out of cover to engage. Variants: wide-peek, shoulder-peek, swing, jiggle-peek, dry-peek, jump-peek.

---

## Economy

- **Credits:** In-game currency (starts at 800, max 9000). Spent on weapons and abilities.
- **Save round:** Intentionally not buying to preserve credits for the next round.
- **Half-buy:** Mid-tier buy (SMGs, shields, limited utility).
- **Loss bonus:** Credit bonus for losing consecutive rounds (capped, resets on win).
- **Ult points:** Ultimate ability charges, gained through kills, orbs, plants, defuses.

---

## Agents & utility

- **Agent:** A playable character with unique abilities.
- **Role:** Duelist · Initiator · Controller · Sentinel. Teams usually run one per role + flex.
- **Utility / util:** Agent abilities — smokes, flashes, molotovs, scans, walls, etc.
- **Smoke:** Vision-blocking ability (Controllers: Brimstone, Omen, Astra, Viper, Harbor, Clove).
- **Flash:** Blinding ability (Breach, Phoenix, KAY/O, Reyna, Skye, Yoru, Gekko).
- **Molly / incendiary:** Area-denial fire (KAY/O, Phoenix, Viper, Brimstone).
- **Recon / dart / scan:** Information-gathering ability (Sova, Fade, Skye, KAY/O, Cypher's cams).
- **Entry:** First agent into a site, usually a Duelist.
- **Entry-frag:** First-kill by the entry attacker.
- **Lurk:** Playing solo off-angle, often for flank or late-round info.
- **Trade-kill setup:** Positioning so that when a teammate dies, you can immediately kill their killer.

---

## Weapons

- **Pistols:** Classic, Shorty, Frenzy, Ghost, Sheriff.
- **SMGs:** Stinger, Spectre.
- **Rifles:** Bulldog, Guardian, Phantom, Vandal.
- **Snipers:** Marshal, Outlaw, Operator.
- **Shotguns:** Bucky, Judge.
- **Machine guns / heavy:** Ares, Odin.
- **Signature / most-used rifles:** Phantom (suppressed, smaller spread, 30 rounds) and Vandal (louder, one-tap-to-head at any range, 25 rounds).

---

## Team play & comms

- **IGL (In-Game Leader):** Team member calling strategy.
- **Mid-round call:** Adapting strategy mid-round based on info.
- **Default:** Standard opening setup, no committed push.
- **Execute:** Coordinated site take with full utility.
- **Fake:** Feigning a site push to draw rotations.
- **Stack:** Multiple players on one site (usually defenders).
- **Lurk:** One player off-angle away from team (usually attackers).

---

## Match stats we care about (for AI analysis)

- **ACS (Average Combat Score):** Damage-weighted score per round.
- **K/D/A:** Kills / Deaths / Assists.
- **ADR (Average Damage per Round):** Damage dealt / rounds played.
- **HS% (Headshot percentage):** Headshots / hits.
- **KAST:** % of rounds with a Kill, Assist, Survived, or Traded.
- **FK (First Kill) / FD (First Death):** Opening engagement outcomes.
- **Plants / Defuses:** Objective participation.
- **Econ rating:** Damage per 1000 credits spent.
- **Clutches:** 1vX won rounds.

---

## User-facing tone

When generating copy for Vantage, match this voice:
- Tactical, not bro-speak.
- Respectful of the player's time and intelligence.
- Direct about weaknesses without being negative.
- Never claims an opponent is cheating or toxic.
- Always frames feedback as improvable skills, not innate ability.

Example:
- ✅ "Your crosshair placement on A Main was head-height 42% of the time — the median for Gold is 64%. Drill target: 1 hour on an aim trainer with the Woohoojin crosshair placement routine."
- ❌ "You got stomped. You need to be better at crosshair placement lol."
