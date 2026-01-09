# The Big Talk - Website Design Documentation

## Project Overview

**Client:** The Big Talk
**Type:** NGO / Civic Education Platform
**Location:** Kenya
**Tagline:** *"Simplifying the talk. Sparking the change."*

---

## Organization Summary

The Big Talk is a civic education platform committed to making governance simple, accessible, and empowering for every Kenyan. The organization breaks down bills, policies, political debates, and public processes into clear and relatable conversations.

### Vision
A Kenya where citizens truly understand the policies that shape their lives. A nation guided by truth, facts, and informed voices.

### Mission
To simplify governance and bring it closer to the people. To break down bills, policies, and political debates into clear, factual, and relatable conversations.

### Core Values
| Value | Description |
|-------|-------------|
| **Truth** | Facts before feelings; knowledge before narratives |
| **Clarity** | Governance made simple, so everyone can understand it |
| **Accountability** | Speaking power to truth guided by evidence, not emotion |
| **Unity** | Championing dialogue that builds, not divides |
| **Solution-Driven** | Turning conversations into action, awareness into impact |

### Content Pillars
1. **Civic Education** - Building informed, empowered citizenry
2. **Explainer** - Deep-dive explanations breaking down complex governance topics
3. **Trends** - Focus on current national trends to stay relevant and impactful

### Key Achievements
- **500,000+ citizen signatures** mobilized against the Term Limit Bill
- Participated in **Public Participation Bill** formulation with the Office of the Attorney General
- **UNESCO Youth Hackathon 2025** recognition for Media and Information Literacy
- **Heshimika Awards** for dignity, leadership, and civic engagement
- Active presence on TikTok, Instagram, X (Twitter), and Facebook

---

## Team Members

| Name | Role | Description |
|------|------|-------------|
| **Shallet Kibet** | Executive Director | Civic leader and governance strategist focused on accountability, citizen participation, and democratic engagement |
| **Oscar Kinaiti** | Program Manager | Transformational leader, researcher, and political & policy analyst designing leadership programs |
| **John Elvins** | Social Justice & Governance Specialist | Passionate about governance, social justice, and psychosocial initiatives; Amnesty International trained |
| **Faith Muthoni** | Communications Analyst | Bridges strategy and storytelling to amplify voices and foster dialogue |
| **Jed Kamuyu** | Head of Production | Videographer and content creator capturing the heartbeat of civic life in Kenya |

---

## Brand Assets

### Logo
The logo features a head-shaped silhouette filled with diverse African faces, cultural elements, microphones, and botanical motifs. The text "THE BIG TALK" is prominently displayed in bold white typography.

### Current Brand Colors (from logo)
- Black (primary background)
- White (typography)
- Cyan/Teal (#00CED1 range)
- Orange/Red accent (#FF6B35 range)

### Requested Primary Color
**Dark Blue** - to be incorporated as the dominant color across all designs

---

## Technical Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React framework with App Router |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Framer Motion** | Latest | Animations and interactions |
| **shadcn/ui** | Latest | UI component library |

### shadcn/ui Components to Use
```bash
# Core UI Components
npx shadcn@latest add button card avatar badge
npx shadcn@latest add navigation-menu sheet drawer
npx shadcn@latest add tabs accordion carousel
npx shadcn@latest add form input textarea
npx shadcn@latest add separator scroll-area
npx shadcn@latest add hover-card dialog
```

| Component | Usage |
|-----------|-------|
| `button` | CTAs, navigation actions |
| `card` | Team members, values, content cards |
| `avatar` | Team member photos |
| `badge` | Tags, categories, achievements |
| `navigation-menu` | Main desktop navigation |
| `sheet` | Mobile navigation drawer |
| `tabs` | Content pillars, program sections |
| `accordion` | FAQ, expandable content |
| `carousel` | Team slider, testimonials |
| `form` | Contact forms, newsletter signup |
| `hover-card` | Team member quick info |
| `separator` | Visual dividers |
| `scroll-area` | Custom scrollable regions |

### Project Structure
```
thebigtalk/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── team/
│   │   └── page.tsx         # Team page
│   ├── programs/
│   │   └── page.tsx         # Programs/What We Do
│   ├── impact/
│   │   └── page.tsx         # Impact/Achievements
│   ├── resources/
│   │   └── page.tsx         # Resources/Explainers
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── ui/                  # shadcn components
│   ├── layout/              # Header, Footer, Navigation
│   ├── sections/            # Page sections
│   └── shared/              # Reusable components
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── images/
│   │   ├── team/            # Team member photos
│   │   └── logo.jpeg        # Organization logo
│   └── fonts/
├── styles/
│   └── globals.css
└── next.config.js
```

---

## Website Pages

### 1. Home Page
- Hero section with tagline and call-to-action
- About summary
- Core values showcase
- Latest content/updates
- Impact statistics
- Team preview
- Newsletter signup

### 2. About Page
- Organization story
- Vision and Mission
- Core values detailed
- Content pillars explained
- Timeline/history

### 3. Team Page
- Leadership profiles with photos
- Individual bios
- Social media links

### 4. Programs/What We Do
- Civic Education initiatives
- Explainer content
- Current campaigns
- Public participation work

### 5. Impact Page
- Key achievements
- Statistics and metrics
- Testimonials
- Partner recognitions

### 6. Resources Page
- Educational content
- Policy explainers
- Downloadable materials

### 7. Contact Page
- Contact form
- Social media links
- Office location (if applicable)

---

# Design Concepts

## Design Philosophy

**Key principle:** Every design decision should feel intentional and human-crafted. We avoid:
- Perfectly symmetrical layouts (too robotic)
- Generic stock photo compositions
- Overly polished, template-like sections
- Cookie-cutter hero patterns

Instead, we embrace:
- Thoughtful asymmetry that guides the eye
- Real photography of the actual team
- Unique typographic treatments
- Layouts that tell a story

---

## Color Palette (Dark Blue Theme)

### Primary Colors
```css
--navy-950: #070B14;      /* Near black - dramatic sections */
--navy-900: #0A1628;      /* Deepest navy - backgrounds */
--navy-800: #0F2342;      /* Dark navy - sections */
--navy-700: #162D50;      /* Navy - cards */
--navy-600: #1E3A5F;      /* Medium navy - interactive */
--navy-500: #2563EB;      /* Bright blue - CTAs */
--navy-400: #3B82F6;      /* Light blue - hover states */
```

### Accent Colors (derived from logo)
```css
--accent-cyan: #00CED1;   /* Teal/Cyan - highlights */
--accent-teal: #14B8A6;   /* Softer teal - secondary */
--accent-orange: #FF6B35; /* Orange - action items */
--accent-gold: #D4A843;   /* Gold - achievements */
--accent-coral: #F97316;  /* Warm orange - energy */
```

### Neutral Colors
```css
--white: #FFFFFF;
--off-white: #FAFBFC;
--gray-50: #F8FAFC;
--gray-100: #F1F5F9;
--gray-200: #E2E8F0;
--gray-400: #94A3B8;
--gray-600: #475569;
--gray-800: #1E293B;
```

---

## Design Concept 1: "The Voice" — Bold Editorial

### Design Intent
Inspired by independent journalism and activist media. This design treats The Big Talk as a publication, a voice that cuts through the noise. Think The Intercept meets TED — bold, opinionated, but accessible.

### What Makes It Unique
- **Newspaper-inspired hero** with stacked, oversized typography
- **Pull quotes scattered** throughout like editorial callouts
- **Intentionally tight letter-spacing** on headlines creates tension
- **Orange accents** used sparingly for maximum impact

### shadcn Components Used
- `navigation-menu` — Desktop nav with subtle hover underlines
- `sheet` — Mobile drawer navigation
- `badge` — Content pillar labels
- `card` — Team member cards with hover-card enhancement
- `separator` — Editorial-style dividers
- `button` — Ghost and solid variants

### Hero Approach
Instead of centered text, the hero uses an **editorial stack**:
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  THE BIG TALK                               [Menu]              │
│                                                                 │
│                                                                 │
│     SIMPLIFYING                                                 │
│     THE TALK.                                                   │
│                                                                 │
│           SPARKING                                              │
│           THE CHANGE.                                           │
│                                                                 │
│                                              ┌─────────────────┐│
│     Making governance accessible             │  [Photo of      ││
│     for every Kenyan — because               │   Shallet at    ││
│     understanding your country               │   a speaking    ││
│     isn't a privilege. It's a right.         │   engagement]   ││
│                                              └─────────────────┘│
│     Civic Education Platform, Nairobi        Since 2023        │
│                                                                 │
│     ─────────────────────────────────────                       │
│     [Explore Our Work →]                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Color Usage
- **Background:** Navy-950 or navy-900 for hero
- **Headlines:** Off-white with orange accent on key words
- **Body text:** Gray-200 for readability on dark
- **CTAs:** Orange outline buttons, solid on hover

### Typography Choices
```
Headlines: "Instrument Serif" or "Fraunces" — editorial warmth
Body: "Inter" — clean, highly readable
Accent: "JetBrains Mono" — for stats and data points
```

### Key Sections
1. **Editorial Hero** — Stacked typography + asymmetric photo
2. **"What We Fight For"** — Values as bold statement cards
3. **The Team** — Magazine-style profiles, not corporate grid
4. **Impact Numbers** — Monospace typography, stark presentation
5. **Latest Explainers** — Card grid with hover previews
6. **Join the Conversation** — Newsletter with personality
7. **Footer** — Dense, information-rich

---

## Design Concept 2: "Clarity" — Refined Simplicity

### Design Intent
For audiences who value substance over style. This design gets out of the way and lets the content speak. Clean lines, purposeful whitespace, and a focus on readability. Think Stripe's documentation meets government transparency portals — but beautiful.

### What Makes It Unique
- **Dramatic whitespace** — Not afraid of empty space
- **Single column focus** — One thing at a time
- **Subtle navy backgrounds** — White text sections break up the page
- **No visual gimmicks** — Every element earns its place

### shadcn Components Used
- `navigation-menu` — Simple, elegant nav
- `tabs` — For content pillars section
- `card` — Elevated card style with border
- `avatar` — Clean team member photos
- `accordion` — FAQ and expandable content
- `button` — Minimal styling, clear hierarchy

### Hero Approach
**Quiet confidence** — The message speaks for itself:
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│  The Big Talk              About  Team  Programs  Contact       │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│         Simplifying the talk.                                   │
│         Sparking the change.                                    │
│                                                                 │
│                                                                 │
│         A civic education platform making                       │
│         governance accessible for wananchi wote.                │
│                                                                 │
│                                                                 │
│         [Learn About Our Mission]                               │
│                                                                 │
│                                                                 │
│                                                                 │
│                                                                 │
│   ─────────────────────────────────────────────────────────     │
│                                                                 │
│   500,000+              UNESCO                 Heshimika        │
│   signatures            recognized             awarded          │
│   mobilized             2025                   2024             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Color Usage
- **Background:** Alternating white and navy-900 sections
- **Text:** Navy-900 on light, white on dark
- **Accents:** Cyan underlines, no orange (too loud for this design)
- **Borders:** Subtle gray-200 lines

### Typography Choices
```
Headlines: "Inter" Bold — Clean, professional
Body: "Inter" Regular — Consistent system
Stats: "Inter" Medium — Clear data presentation
```

### Key Sections
1. **Quiet Hero** — Centered, confident, minimal
2. **Mission Block** — Navy background, white text, full-width
3. **Content Pillars** — Tabs interface, one focus at a time
4. **Core Values** — Simple icon + text pairs
5. **Team** — Horizontal scroll or clean grid
6. **Resources** — Card list with clear hierarchy
7. **Contact** — Simple form, no distractions
8. **Footer** — Minimal, essential links only

---

## Design Concept 3: "Pulse" — Living Platform

### Design Intent
The Big Talk creates content constantly — TikToks, Reels, explainers. This design puts that dynamic energy front and center. It feels alive, updated, current. Think Notion's playful energy meets a news aggregator.

### What Makes It Unique
- **Content-first layout** — Latest work prominently featured
- **Bento grid** — Asymmetric card layouts feel modern
- **Embedded social feeds** — Real TikTok/Instagram content
- **Micro-interactions** — Every hover tells you something
- **Live feeling** — Timestamps, "new" badges, activity indicators

### shadcn Components Used
- `sheet` — Full-screen mobile menu with social links
- `carousel` — Content slider for explainers
- `card` — Multiple variants for different content types
- `badge` — "New", "Trending", content type labels
- `hover-card` — Quick previews on team members
- `tabs` — Content filtering
- `scroll-area` — Horizontal content scrolling

### Hero Approach
**Dynamic grid** — Shows activity and freshness:
```
┌─────────────────────────────────────────────────────────────────┐
│  THE BIG TALK                          [TikTok] [IG] [X] [☰]   │
│  Simplifying the talk. Sparking the change.                     │
│─────────────────────────────────────────────────────────────────│
│                                                                 │
│  ┌────────────────────────────────┐  ┌─────────────────────┐   │
│  │                                │  │  LATEST EXPLAINER   │   │
│  │  "We don't just talk.          │  │  ┌───────────────┐  │   │
│  │   We spark change.             │  │  │ [Video thumb] │  │   │
│  │   We make governance           │  │  │   ▶ 2:34      │  │   │
│  │   make sense."                 │  │  └───────────────┘  │   │
│  │                                │  │  The Finance Bill   │   │
│  │         — Our Promise          │  │  Explained Simply   │   │
│  │                                │  │  [Watch Now →]      │   │
│  │  [Explore What We Do]          │  └─────────────────────┘   │
│  │                                │                             │
│  └────────────────────────────────┘  ┌──────────┐ ┌──────────┐ │
│                                       │ 500K+    │ │ UNESCO   │ │
│                                       │ voices   │ │ 2025     │ │
│                                       └──────────┘ └──────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Color Usage
- **Background:** Navy-900 with subtle gradient
- **Cards:** Semi-transparent with backdrop blur
- **Accents:** Cyan and orange used more freely
- **Interactive:** Glow effects on hover

### Typography Choices
```
Headlines: "Plus Jakarta Sans" — Friendly, modern
Body: "Inter" — Reliable readability
UI Elements: "Inter" Medium — Clear interface text
```

### Key Sections
1. **Bento Hero** — Mixed content grid with latest video
2. **Content Stream** — Filterable tabs (All/Civic Ed/Explainers/Trends)
3. **Team Reel** — Horizontal scroll with personality
4. **Social Wall** — Embedded TikTok/Instagram grid
5. **Impact Pulse** — Animated statistics
6. **Subscribe** — "Get notified" card
7. **Footer** — Links + live social feeds

---

## Design Concept 4: "Ubuntu" — People-Centered

### Design Intent
Named after the African philosophy of interconnectedness. This design puts human faces and stories at the center. Every section features real people — the team, the citizens they serve, the community they're building.

### What Makes It Unique
- **Photography-forward** — Team photos are heroes, not afterthoughts
- **Warm color temperature** — Navy balanced with gold and warm whites
- **Rounded shapes** — Feels approachable, not corporate
- **Story-driven sections** — Each part tells a human story
- **Quotes and voices** — Real words from real people

### shadcn Components Used
- `avatar` — Prominent, rounded team photos
- `card` — Rounded corners, warm shadows
- `carousel` — Testimonial slider
- `hover-card` — Team member details
- `dialog` — Full team member bios
- `badge` — Soft, rounded role labels
- `button` — Rounded, warm color variants

### Hero Approach
**Team as heroes** — The people ARE the organization:
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [Logo]        About   Team   Programs   Impact   Contact       │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │  ┌─────────────┐                                            ││
│  │  │             │    Meet the voices                         ││
│  │  │  [Shallet   │    behind the change.                      ││
│  │  │   photo -   │                                            ││
│  │  │   natural,  │    We're a team of Kenyans who believe     ││
│  │  │   warm]     │    that every citizen deserves to          ││
│  │  │             │    understand how their country works.     ││
│  │  │             │                                            ││
│  │  └─────────────┘    "Hakuna maneno mingi.                   ││
│  │                      Hakuna propaganda.                      ││
│  │  [Oscar] [John]      Just truth, clarity, and context."     ││
│  │  [Faith] [Jed]                                              ││
│  │                      [Meet Our Team →]                      ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Color Usage
- **Background:** Warm off-white (#FFFBF7) and navy alternating
- **Primary:** Navy-800 for depth
- **Warmth:** Gold (#D4A843) accents throughout
- **CTAs:** Coral/warm orange, rounded buttons
- **Photos:** Warm color grading applied

### Typography Choices
```
Headlines: "Libre Baskerville" or "Lora" — Warm, humanist serif
Body: "Source Sans Pro" — Friendly, readable
Quotes: "Libre Baskerville" Italic — Storytelling feel
```

### Key Sections
1. **Team Hero** — Photography-forward with warm messaging
2. **Our Story** — Timeline with photos from key moments
3. **Core Values** — Illustrated icons, rounded cards
4. **The Team** — Large photos, personal bios, social links
5. **Community Voices** — Testimonials from citizens
6. **Impact Stories** — Photo + narrative pairs
7. **Join Us** — Warm, inviting CTA
8. **Footer** — Community feel, newsletter prominent

---

## Design Concept 5: "Authority" — Institutional Trust

### Design Intent
For when The Big Talk interfaces with government bodies, UNESCO, and institutional partners. This design establishes credibility and professionalism without being cold. Think World Bank meets modern tech company annual report.

### What Makes It Unique
- **Structured layouts** — Clear visual hierarchy, no ambiguity
- **Data visualization** — Impact shown through charts
- **Credentials prominent** — Awards, recognition, partnerships
- **Document-ready sections** — Easy to reference, print-friendly
- **Conservative animation** — Professional, not playful

### shadcn Components Used
- `navigation-menu` — Full featured with dropdowns
- `tabs` — Program categories
- `table` — Team directory, resource lists
- `card` — Structured, bordered cards
- `badge` — Achievement indicators
- `accordion` — FAQ, program details
- `chart` — Impact data visualization
- `button` — Professional variants

### Hero Approach
**Credibility-first** — Lead with recognition:
```
┌─────────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────────────┐│
│  │  THE BIG TALK                                               ││
│  │  Civic Education Platform | Kenya                           ││
│  │─────────────────────────────────────────────────────────────││
│  │  About  Programs  Team  Impact  Resources  Partners  Contact││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                                                             ││
│  │   Kenya's Premier Civic Education Platform                  ││
│  │                                                             ││
│  │   Making governance accessible, transparent,                ││
│  │   and meaningful for all Kenyans since 2023.                ││
│  │                                                             ││
│  │   [View Programs]    [Download Profile PDF]                 ││
│  │                                                             ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                 │
│  ┌─────────────┬─────────────┬─────────────┬─────────────┐     │
│  │   500,000+  │   UNESCO    │     50+     │  Heshimika  │     │
│  │  citizen    │  Youth      │  explainer  │   Awards    │     │
│  │  signatures │  Hackathon  │   videos    │   2024      │     │
│  │  mobilized  │  2025       │  produced   │             │     │
│  └─────────────┴─────────────┴─────────────┴─────────────┘     │
│                                                                 │
│   Recognized by: [UNESCO logo] [AG Office] [Heshimika]         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Color Usage
- **Background:** Pure white and light gray (#F8FAFC)
- **Primary:** Deep navy (#0A1628) for authority
- **Accent:** Royal blue (#1E40AF) for links and buttons
- **Achievement:** Gold badges for recognition
- **Borders:** Structured gray lines

### Typography Choices
```
Headlines: "DM Sans" Bold — Modern, professional
Body: "Inter" — Industry standard readability
Data: "Inter" Tabular — For statistics and tables
```

### Key Sections
1. **Institutional Hero** — Stats bar, partner logos
2. **About Summary** — Two column with key facts sidebar
3. **Programs Overview** — Tab-based organization
4. **Leadership Team** — Formal grid with credentials
5. **Impact Dashboard** — Charts showing reach/growth
6. **Recognition & Partners** — Logo grid with badges
7. **Resources** — Document library with downloads
8. **Contact** — Formal inquiry form
9. **Footer** — Comprehensive sitemap, legal links

---

## Design Comparison Matrix

| Criteria | The Voice | Clarity | Pulse | Ubuntu | Authority |
|----------|-----------|---------|-------|--------|-----------|
| **Primary Audience** | Youth, activists | General public | Social users | Community | Institutions |
| **Tone** | Bold, editorial | Calm, focused | Dynamic, fresh | Warm, human | Professional |
| **Animation** | Moderate | Minimal | High | Gentle | Minimal |
| **Photography** | Dramatic | Minimal | Thumbnails | Central focus | Formal |
| **Best For** | Movement building | Information seeking | Content discovery | Trust building | Partnerships |
| **Complexity** | Medium | Low | High | Medium | Medium |
| **Mobile Experience** | Excellent | Excellent | Good | Excellent | Good |

### Recommendation by Use Case

**If primary goal is youth engagement:** → **Concept 1 (The Voice)** or **Concept 3 (Pulse)**

**If primary goal is broad accessibility:** → **Concept 2 (Clarity)**

**If primary goal is building community trust:** → **Concept 4 (Ubuntu)**

**If primary goal is institutional partnerships:** → **Concept 5 (Authority)**

**Balanced approach for multiple audiences:** → **Concept 4 (Ubuntu)** with elements from **Concept 2 (Clarity)**

---

## Recommended Implementation

### Phase 1: Foundation
1. Set up Next.js 15 project with App Router
2. Configure Tailwind CSS with custom color palette
3. Install shadcn/ui components
4. Set up Framer Motion for animations
5. Create base layout components

### Phase 2: Core Pages
1. Build responsive header/navigation
2. Implement home page with chosen design
3. Create about page
4. Build team page with member cards
5. Develop contact page with form

### Phase 3: Content Pages
1. Programs/What We Do page
2. Impact/Achievements page
3. Resources section (if needed)

### Phase 4: Polish
1. Implement animations and transitions
2. Optimize images and performance
3. Add SEO metadata
4. Test accessibility (WCAG 2.1)
5. Mobile responsiveness testing

---

## Files Available

### Team Photos
- `/Shallet_Kibet.jpeg` - Executive Director
- `/Oscar_Kinaiti.jpeg` - Program Manager
- `/John_Elvins.jpeg` - Social Justice & Governance Specialist
- `/Faith_muthoni.jpeg` - Communications Analyst
- `/Jed_kamuyu.jpeg` - Head of Production

### Brand Assets
- `/logo.jpeg` - Organization logo

---

## Next Steps

1. **Client Review:** Present all 5 design concepts to the client
2. **Selection:** Client selects preferred design direction
3. **Refinement:** Make adjustments based on feedback
4. **Development:** Begin implementation with chosen design
5. **Content:** Gather final copy and additional imagery

---

*Documentation prepared for The Big Talk website project*
*Date: January 2026*
