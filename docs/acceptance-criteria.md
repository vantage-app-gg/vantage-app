# Acceptance Criteria

> Gherkin Given / When / Then per feature. Specs-first: write these before implementation, derive E2E tests from them.
> Start with Auth, Onboarding, and Topic-Browse (per PRD kickoff list).

---

## Feature: Email/Password Signup

### Scenario: Successful signup

- **Given** I am on the Sign-up page
- **When** I enter a valid email and a password (≥8 chars, mixed case, number)
- **And** I accept the ToS + Privacy checkbox
- **And** I click "Create Account"
- **Then** a verification email is sent to the address
- **And** I see a "Check your inbox" confirmation screen

### Scenario: Password too weak

- **Given** I am on the Sign-up page
- **When** I enter a password that fails Clerk's strength policy
- **Then** I see an inline error explaining the requirements
- **And** the submit button remains disabled

### Scenario: Email already registered

- **Given** an account exists for `test@example.com`
- **When** I try to sign up with that email
- **Then** I see "An account with this email exists. Sign in?" with a link to Sign-in
- **And** no verification email is sent

---

## Feature: Google OAuth Signup

### Scenario: First-time Google login

- **Given** I click "Continue with Google"
- **When** I select my Google account and grant profile + email scopes
- **Then** an account is created with the Google-verified email
- **And** I land on the Onboarding flow (rank input)

### Scenario: Returning Google user

- **Given** I have an account linked to my Google profile
- **When** I click "Continue with Google"
- **Then** I am signed in directly
- **And** I land on the home feed (skipping onboarding)

---

## Feature: Discord OAuth Signup

Same shape as Google OAuth — substitute "Discord" for "Google".

---

## Feature: Onboarding — Rank Entry

### Scenario: Manual rank entry on first login

- **Given** I am a new user on the Onboarding page
- **When** I select a rank tier (e.g., "Gold 2")
- **And** I click "Continue"
- **Then** my profile stores `rank: "gold-2"`
- **And** I land on the home feed with content filtered for `gold-plat`

### Scenario: Skip rank entry

- **Given** I am on the Onboarding page
- **When** I click "Skip for now"
- **Then** my profile stores `rank: "unranked"`
- **And** the home feed shows all-ranks content

---

## Feature: Topic Browsing (Free)

### Scenario: View the 5 launch topics

- **Given** I am signed in with rank "Gold 2"
- **When** I open the Library page
- **Then** I see 5 topic cards (Fundamentals, Crosshair & Aim, Maps, Utility, Economy)
- **And** each card shows rank-tagged video counts

### Scenario: Open a topic and see matched videos

- **Given** I am on the Library page with rank "Gold 2"
- **When** I click the "Crosshair & Aim" topic
- **Then** I see the authored topic text
- **And** below, 5–10 matched videos from the video pool, filtered for `gold-plat`
- **And** each video shows: title, creator, duration, thumbnail

### Scenario: Play a video

- **Given** I am on a Topic page
- **When** I click a video card
- **Then** I land on the Video Detail page
- **And** the embed is `youtube-nocookie.com/embed/<videoId>` (verifiable in DOM)
- **And** my progress is automatically marked as "In Progress"

---

## Feature: Progress Tracking

### Scenario: Mark video as watched

- **Given** I am on a Video Detail page
- **When** I click "Mark as watched"
- **Then** the video status becomes "Completed"
- **And** on my home feed, this video shows a completion badge

---

## Feature: Project Create (Free, max 2)

### Scenario: Create first project

- **Given** I am signed in on the Free tier with 0 projects
- **When** I click "New Project"
- **And** I enter name "Improving my aim"
- **And** I enter goal "Hit 30% HS% consistently"
- **And** I select knowledge level "Beginner"
- **And** I submit
- **Then** a project is created with AI-matched video suggestions (5–10)
- **And** I land on the project detail page

### Scenario: Free-tier project limit

- **Given** I am on Free tier with 2 projects
- **When** I click "New Project"
- **Then** I see "Free limit reached. Upgrade to Coach for unlimited projects."
- **And** the form does not open

---

## Feature: Paddle Upgrade

### Scenario: Start Coach trial

- **Given** I am on Free tier
- **When** I click "Start 7-day trial"
- **And** I complete Paddle checkout with a valid card
- **Then** my subscription state updates to "trialing"
- **And** paid features (unlimited projects, notes, AI analysis) unlock
- **And** I receive a confirmation email

### Scenario: Trial converts to paid

- **Given** my trial is in day 7 and I have not cancelled
- **When** the trial ends
- **Then** my card is charged CHF 9.99 (or 99 if annual)
- **And** my subscription state becomes "active"

---

## Feature: AI Match Coach (Paid)

### Scenario: Request analysis with manual data

- **Given** I am on the Coach tier with ≥1 analysis remaining this month
- **When** I enter match data (agent, map, K/D/A, ACS, ADR, HS%, round outcomes) in the form
- **And** I submit
- **Then** an LLM report is generated (≤ 30 seconds)
- **And** I see sections: Strengths, Weaknesses, Action Items
- **And** each Action Item links to ≥1 matching video from the content pool

### Scenario: Quota exhausted

- **Given** I am on Coach tier with 0 analyses remaining this month
- **When** I try to request an analysis
- **Then** I see "You've used all 30 analyses this month. Resets on <date>."
- **And** no LLM call is made

### Scenario: User flags analysis as low quality

- **Given** I am viewing an AI analysis report
- **When** I click "Flag as low quality"
- **Then** a feedback modal appears asking for a reason
- **And** the flag is persisted on the analysis record
- **And** my feedback is logged for review

---

## Feature: Account Deletion

### Scenario: Request account deletion

- **Given** I am signed in
- **When** I go to Settings → Account → Delete my account
- **And** I confirm with my password
- **Then** my account enters "soft-delete" state (hidden but recoverable for 30 days)
- **And** I receive a confirmation email with a recovery link

### Scenario: Soft-delete expires

- **Given** my account has been soft-deleted for 30 days
- **When** the nightly purge runs
- **Then** my account record, Riot data, projects, notes, and AI analyses are hard-deleted
- **And** the email is released for re-signup

---

## Future features (V1.1+)

TODO: Add criteria as features enter scope. Minimum bar per feature: 3 scenarios (happy path + 2 edge cases).
