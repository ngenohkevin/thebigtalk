# The Big Talk - Final Design Requirements

## Client Selection
The client has selected a combination of **Design 1 (The Voice)** and **Design 3 (Pulse)** elements.

---

## Design Specifications

### 1. Hero Section
**Source:** Design 3 (Pulse)
- Hero section with explainer videos embedded/featured
- Dynamic, content-first approach
- Social media integration feel

### 2. Impact Numbers Section
**Source:** Design 3 (Pulse)
- Display key statistics with animated counters
- Stats to include:
  - 500,000+ citizen signatures mobilized
  - UNESCO Youth Hackathon 2025 recognition
  - 50+ explainer videos produced
  - Heshimika Awards recognition

### 3. Team Section
**Position:** Near the top of the page (high visibility)
**Source:** Design 1 (The Voice)
- Team member images display in **grayscale by default**
- On hover: images transition to **full color**
- **Click interaction:** Opens a modal/expanded view showing full bio
- All 5 team members must be displayed:
  - Shallet Kibet (Executive Director)
  - Oscar Kinaiti (Program Manager)
  - John Elvins (Social Justice & Governance Specialist)
  - Faith Muthoni (Communications Analyst)
  - Jed Kamuyu (Head of Production)

### 4. Core Values Section
**Source:** Design 1 (The Voice)
- Values displayed with **animated/pop-up icons**
- Icons should have hover animation effects
- Values:
  - **Truth:** Facts before feelings; knowledge before narratives
  - **Clarity:** Governance made simple, so everyone can understand it
  - **Accountability:** We speak power to truth guided by evidence, not emotion
  - **Unity:** We champion dialogue that builds, not divides
  - **Solution-Driven:** We turn conversations into action, and awareness into impact

### 5. 500,000 Signatures Impact Section
**NEW REQUIREMENT:** Expand this section to show what was achieved

#### The Achievement:
- **500,000+ citizen signatures** mobilized opposing the proposed Term Limit Bill
- The bill sought to:
  - Extend presidential term from 5 years to 7 years
  - Introduce an additional Office of the Prime Minister

#### The Impact:
- Demonstrated Big Talk's capacity to move beyond awareness-raising into large-scale civic action
- Engaged citizens across digital and community platforms
- Successfully resisted constitutional changes perceived to weaken accountability and democratic checks
- Positioned citizens not as passive observers, but as active participants in governance

### 6. Removed Elements
- **Email subscription/newsletter signup section** - Not needed for now
- "Join the Conversation" input form removed

---

## Page Structure (Top to Bottom)

1. **Header/Navigation**
   - Logo
   - Navigation links
   - Dark/Light mode toggle

2. **Hero Section** (Design 3 style)
   - Headline with tagline
   - Explainer video showcase
   - Call-to-action buttons

3. **Team Section** (Design 1 style - MOVED UP)
   - Grayscale images with color on hover
   - Click to view full bio modal
   - All 5 team members

4. **Impact Numbers** (Design 3 style)
   - Animated statistics
   - Visual impact indicators

5. **500,000 Signatures Achievement**
   - Full story of the Term Limit Bill opposition
   - What was achieved and the impact

6. **Core Values** (Design 1 style)
   - Animated/pop-up icons
   - Interactive hover effects

7. **Content Pillars**
   - Civic Education
   - Explainer
   - Trends

8. **Footer**
   - Social links
   - Contact information
   - Dynamic copyright year

---

## Technical Requirements

- Dark/Light mode support (Tailwind `dark:` classes)
- Framer Motion animations
- Responsive design (mobile-first)
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS with custom color palette
- **Strapi CMS** for content management

---

## Content Management System (Strapi)

### Why Strapi?
- **Free & Open Source** - Self-hosted, no subscription fees
- **Familiar** - Already used for DwebStore CMS
- **Client-Friendly Admin UI** - Non-technical users can manage content
- **REST API** - Easy integration with Next.js
- **Media Library** - Built-in image/file management
- **Draft/Publish Workflow** - Review content before going live

### Deployment
- **Host:** iopulse VPS (alongside the Next.js app)
- **Database:** PostgreSQL (same pattern as DwebStore CMS)
- **Admin URL:** `https://cms.thebigtalk.iopulse.cloud` (or similar)
- **API URL:** `https://cms.thebigtalk.iopulse.cloud/api`

### Content Types Structure

#### 1. Team Members
```
Collection Type: team-members
Fields:
  - name (Text, required)
  - role (Text, required)
  - image (Media, single image, required)
  - bio (Rich Text, required)
  - shortBio (Text, max 100 chars)
  - order (Number, for sorting)
  - isActive (Boolean, default true)
```

#### 2. Explainer Videos
```
Collection Type: explainer-videos
Fields:
  - title (Text, required)
  - description (Rich Text)
  - youtubeUrl (Text, required) - YouTube video URL (e.g., https://youtube.com/watch?v=xxx)
  - category (Relation to categories)
  - pillar (Enumeration: civic-education, explainer, trends)
  - publishDate (Date)
  - isFeatured (Boolean) - Show in hero section
  - order (Number)

Note: Thumbnail auto-fetched from YouTube. Embed handled in frontend using YouTube iframe/react-youtube.
```

#### 3. Impact Stats
```
Collection Type: impact-stats
Fields:
  - value (Text, required) - e.g., "500,000+"
  - label (Text, required) - e.g., "Citizen signatures mobilized"
  - description (Text) - Optional longer description
  - order (Number, for sorting)
  - isVisible (Boolean, default true)
```

#### 4. Blog Posts / Articles
```
Collection Type: articles
Fields:
  - title (Text, required)
  - slug (UID, based on title)
  - content (Rich Text, required)
  - excerpt (Text, max 200 chars)
  - featuredImage (Media, single image)
  - category (Relation to categories)
  - pillar (Enumeration: civic-education, explainer, trends)
  - author (Relation to team-members)
  - publishDate (Date)
  - isPublished (Boolean)
  - tags (JSON or Relation)
```

#### 5. Categories
```
Collection Type: categories
Fields:
  - name (Text, required)
  - slug (UID, based on name)
  - description (Text)
  - color (Text) - Hex color for UI
```

#### 6. Core Values
```
Collection Type: core-values
Fields:
  - name (Text, required)
  - description (Text, required)
  - icon (Enumeration: shield, lightbulb, scale, users, target)
  - order (Number)
```

#### 7. Achievements
```
Collection Type: achievements
Fields:
  - title (Text, required)
  - metric (Text, required) - e.g., "500,000+"
  - metricLabel (Text) - e.g., "Citizen Signatures"
  - description (Rich Text)
  - impact (Rich Text)
  - isFeatured (Boolean) - For highlighted achievements
  - order (Number)
```

#### 8. Site Settings (Single Type)
```
Single Type: site-settings
Fields:
  - siteName (Text)
  - tagline (Text)
  - logo (Media)
  - mission (Rich Text)
  - vision (Rich Text)
  - about (Rich Text)
  - socialLinks (Component, repeatable)
    - platform (Enumeration: tiktok, instagram, twitter, facebook, youtube)
    - url (Text)
```

### API Endpoints (Auto-generated by Strapi)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/team-members` | GET | List all team members |
| `/api/explainer-videos` | GET | List all videos |
| `/api/explainer-videos?filters[isFeatured]=true` | GET | Featured videos for hero |
| `/api/impact-stats` | GET | List impact statistics |
| `/api/articles` | GET | List all articles |
| `/api/articles/:slug` | GET | Single article by slug |
| `/api/core-values` | GET | List core values |
| `/api/achievements` | GET | List achievements |
| `/api/site-settings` | GET | Get site settings |

### Next.js Integration

```typescript
// Example: Fetching team members in Next.js
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

async function getTeamMembers() {
  const res = await fetch(`${STRAPI_URL}/api/team-members?populate=image&sort=order:asc`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  return res.json();
}
```

### Environment Variables (Next.js)
```env
NEXT_PUBLIC_STRAPI_URL=https://cms.thebigtalk.iopulse.cloud
STRAPI_API_TOKEN=your_api_token_here
```

### Strapi Deployment on iopulse VPS

#### Docker Compose Setup
```yaml
# Will be added to Dokploy as a new service
services:
  thebigtalk-cms:
    image: strapi/strapi
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_HOST: thebigtalk-db
      DATABASE_PORT: 5432
      DATABASE_NAME: thebigtalk_cms
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: ${DB_PASSWORD}
    volumes:
      - thebigtalk-cms-uploads:/opt/app/public/uploads
    ports:
      - "1338:1337"

  thebigtalk-db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: thebigtalk_cms
      POSTGRES_USER: strapi
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - thebigtalk-db-data:/var/lib/postgresql/data
```

### Admin Access & Permissions
- Create admin account during first setup
- Create API token with read-only access for the frontend
- Client can access admin panel to manage content

---

## Key Achievements to Highlight (from PDF)

### 1. Term Limit Bill Opposition
- 500,000+ citizen signatures collected
- Opposed extension of presidential term from 5 to 7 years
- Resisted introduction of Office of Prime Minister
- Large-scale civic mobilization success

### 2. Public Participation Bill
- Actively participated in formulation through Office of Attorney General
- Focused on inclusivity, accessibility, and meaningful citizen engagement

### 3. UNESCO Youth Hackathon 2025
- Submitted project under theme "Youth Leading the Way: Building Media and Information Literacy (MIL) Solutions for Impact"
- Formally recognized by UNESCO

### 4. Heshimika Awards
- Recognized for commitment to dignity, leadership, and impactful civic engagement

### 5. Institutional Growth
- Expanded reach, credibility, and institutional presence
- Influenced public discourse
- Strengthened relationships with civil society and policy actors
- Positioned as trusted civic convener and thought partner

---

## Color Palette

- **Navy 950:** #0a0f1a (dark backgrounds)
- **Navy 900:** #111827
- **Navy 800:** #1e293b
- **Accent Orange:** #f97316
- **Accent Cyan:** #06b6d4
- **Accent Coral:** #f87171
- **Accent Gold:** #fbbf24

---

## File Location
New combined design will be at: `/src/app/page.tsx` (replacing the design selector)

Or alternatively at: `/src/app/final/page.tsx` for review before replacing main page
