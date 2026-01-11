/**
 * Seed script to populate Strapi CMS with The Big Talk content
 * Run with: STRAPI_API_TOKEN=your_token npx ts-node scripts/seed-production.ts
 */

const STRAPI_URL = process.env.STRAPI_URL || 'https://thebigtalk-cms.iopulse.cloud';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('Error: STRAPI_API_TOKEN environment variable is required');
  console.error('Create an API token in Strapi Admin > Settings > API Tokens');
  process.exit(1);
}

// Team Members data
const teamMembers = [
  {
    name: "Shallet Kibet",
    role: "Executive Director",
    bio: "A civic leader and governance strategist with a strong focus on accountability, citizen participation, and democratic engagement. She works through The Big Talk to make governance accessible, practical, and relevant to everyday citizens.",
    shortBio: "Civic leader focused on accountability and democratic engagement.",
    order: 1,
    isActive: true,
  },
  {
    name: "Oscar Kinaiti",
    role: "Program Manager",
    bio: "A transformational leader, missionary, researcher, and political & policy analyst dedicated to raising a generation that leads with integrity, purity, and wisdom. He designs leadership programs and creates platforms for youth to discuss purpose, influence, and societal transformation.",
    shortBio: "Transformational leader designing youth engagement programs.",
    order: 2,
    isActive: true,
  },
  {
    name: "John Elvins",
    role: "Social Justice & Governance Specialist",
    bio: "An active Kenyan citizen currently serving in a faith-based organization as a missionary. Passionate about governance, social justice, and psychosocial related initiatives. Part of Amnesty International's training on human rights defending.",
    shortBio: "Passionate about governance and social justice initiatives.",
    order: 3,
    isActive: true,
  },
  {
    name: "Faith Muthoni",
    role: "Communications Analyst",
    bio: "A communication analyst driven by a deep belief in the power of informed citizenship. With a strong commitment to civic education, she champions public participation as the cornerstone of a thriving democracy. Her work bridges strategy and storytelling.",
    shortBio: "Bridges strategy and storytelling for civic impact.",
    order: 4,
    isActive: true,
  },
  {
    name: "Jed Kamuyu",
    role: "Head of Production",
    bio: "A passionate videographer and content creator dedicated to capturing the heartbeat of civic life in Kenya. With a sharp eye for storytelling and a deep belief in the power of informed communities, he uses the lens to spotlight civic education and amplify citizen voices.",
    shortBio: "Videographer turning civic moments into compelling narratives.",
    order: 5,
    isActive: true,
  },
];

// Core Values data
const coreValues = [
  {
    name: "Truth",
    description: "Facts before feelings; knowledge before narratives.",
    icon: "shield",
    order: 1,
  },
  {
    name: "Clarity",
    description: "Governance made simple, so everyone can understand it.",
    icon: "lightbulb",
    order: 2,
  },
  {
    name: "Accountability",
    description: "We speak power to truth guided by evidence, not emotion.",
    icon: "scale",
    order: 3,
  },
  {
    name: "Unity",
    description: "We champion dialogue that builds, not divides.",
    icon: "users",
    order: 4,
  },
  {
    name: "Solution-Driven",
    description: "We turn conversations into action, and awareness into impact.",
    icon: "target",
    order: 5,
  },
];

// Impact Stats data
const impactStats = [
  {
    value: "500,000+",
    label: "Citizen signatures mobilized",
    description: "Over half a million Kenyans joined together to demand accountability",
    order: 1,
    isVisible: true,
  },
  {
    value: "UNESCO",
    label: "Youth Hackathon 2025 Recognized",
    description: "International recognition for civic innovation",
    order: 2,
    isVisible: true,
  },
  {
    value: "50+",
    label: "Explainer videos produced",
    description: "Breaking down complex policies into simple, accessible content",
    order: 3,
    isVisible: true,
  },
  {
    value: "Heshimika",
    label: "Awards for civic leadership",
    description: "Recognized for excellence in civic education and engagement",
    order: 4,
    isVisible: true,
  },
];

// Categories data
const categories = [
  { name: "Civic Education", slug: "civic-education", description: "Building an informed, empowered citizenry", color: "#10B981" },
  { name: "Explainer", slug: "explainer", description: "Deep-dive content breaking down bills and policies", color: "#3B82F6" },
  { name: "Trends", slug: "trends", description: "Current issues affecting Kenyans right now", color: "#8B5CF6" },
  { name: "Governance", slug: "governance", description: "Understanding how government works", color: "#F59E0B" },
  { name: "Youth", slug: "youth", description: "Content focused on young Kenyans", color: "#EC4899" },
];

// Achievements data
const achievements = [
  {
    title: "500K Signatures Campaign",
    metric: "500,000+",
    metricLabel: "signatures",
    description: "Successfully mobilized over half a million Kenyan citizens to sign a petition demanding government accountability.",
    impact: "The petition led to increased public discourse on transparency in government.",
    isFeatured: true,
    order: 1,
  },
  {
    title: "UNESCO Recognition",
    metric: "2025",
    metricLabel: "Youth Hackathon",
    description: "Recognized by UNESCO for innovative approaches to civic education through the Youth Hackathon initiative.",
    impact: "International validation of our approach to engaging young people in governance.",
    isFeatured: true,
    order: 2,
  },
  {
    title: "Explainer Video Series",
    metric: "50+",
    metricLabel: "videos",
    description: "Produced over 50 explainer videos breaking down complex policies, bills, and civic concepts for everyday Kenyans.",
    impact: "Millions of views across social media platforms, making governance accessible.",
    isFeatured: true,
    order: 3,
  },
  {
    title: "Heshimika Awards",
    metric: "2024",
    metricLabel: "Award Winner",
    description: "Received the Heshimika Award for outstanding contribution to civic leadership and education in Kenya.",
    impact: "Recognition of our commitment to truth, clarity, and citizen empowerment.",
    isFeatured: true,
    order: 4,
  },
];

// Explainer Videos (sample with actual YouTube URLs if available)
const explainerVideos = [
  {
    title: "Understanding the Finance Bill 2024",
    description: "A breakdown of what the Finance Bill means for everyday Kenyans and how it affects your pocket.",
    youtubeUrl: "https://www.youtube.com/watch?v=example1",
    pillar: "explainer",
    isFeatured: true,
    order: 1,
    duration: "8:45",
  },
  {
    title: "How Parliament Works",
    description: "A simple guide to understanding the Kenyan Parliament, its structure, and how laws are made.",
    youtubeUrl: "https://www.youtube.com/watch?v=example2",
    pillar: "civic-education",
    isFeatured: true,
    order: 2,
    duration: "12:30",
  },
  {
    title: "Your Rights as a Kenyan Citizen",
    description: "Know your constitutional rights and how to exercise them effectively.",
    youtubeUrl: "https://www.youtube.com/watch?v=example3",
    pillar: "civic-education",
    isFeatured: true,
    order: 3,
    duration: "10:15",
  },
  {
    title: "Public Participation: A Citizen's Guide",
    description: "How to effectively participate in governance and make your voice heard.",
    youtubeUrl: "https://www.youtube.com/watch?v=example4",
    pillar: "civic-education",
    isFeatured: false,
    order: 4,
    duration: "7:20",
  },
];

// Site Settings
const siteSettings = {
  siteName: "The Big Talk",
  tagline: "Civic Education. Citizen Power.",
  mission: "To build an informed, engaged, and empowered citizenry through accessible civic education and advocacy.",
  vision: "A Kenya where every citizen understands their rights, participates in governance, and holds leaders accountable.",
  about: "The Big Talk is a civic education platform dedicated to making governance accessible, practical, and relevant to everyday citizens. We believe that an informed citizenry is the foundation of a functioning democracy.",
  tiktokUrl: "https://tiktok.com/@thebigtalk",
  instagramUrl: "https://instagram.com/thebigtalk",
  twitterUrl: "https://twitter.com/thebigtalk",
  facebookUrl: "https://facebook.com/thebigtalk",
  youtubeUrl: "https://youtube.com/@thebigtalk",
};

// API helper functions
async function apiRequest(endpoint: string, method: string = 'GET', data?: any) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_TOKEN}`,
    },
  };

  if (data) {
    options.body = JSON.stringify({ data });
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API request failed: ${response.status} - ${error}`);
  }

  return response.json();
}

async function createTeamMember(member: typeof teamMembers[0]) {
  try {
    await apiRequest('/team-members', 'POST', member);
    console.log(`✓ Created team member: ${member.name}`);
  } catch (error: any) {
    if (error.message.includes('unique')) {
      console.log(`- Team member already exists: ${member.name}`);
    } else {
      console.error(`✗ Failed to create team member ${member.name}:`, error.message);
    }
  }
}

async function createCoreValue(value: typeof coreValues[0]) {
  try {
    await apiRequest('/core-values', 'POST', value);
    console.log(`✓ Created core value: ${value.name}`);
  } catch (error: any) {
    if (error.message.includes('unique')) {
      console.log(`- Core value already exists: ${value.name}`);
    } else {
      console.error(`✗ Failed to create core value ${value.name}:`, error.message);
    }
  }
}

async function createImpactStat(stat: typeof impactStats[0]) {
  try {
    await apiRequest('/impact-stats', 'POST', stat);
    console.log(`✓ Created impact stat: ${stat.label}`);
  } catch (error: any) {
    console.error(`✗ Failed to create impact stat ${stat.label}:`, error.message);
  }
}

async function createCategory(category: typeof categories[0]) {
  try {
    await apiRequest('/categories', 'POST', category);
    console.log(`✓ Created category: ${category.name}`);
  } catch (error: any) {
    if (error.message.includes('unique')) {
      console.log(`- Category already exists: ${category.name}`);
    } else {
      console.error(`✗ Failed to create category ${category.name}:`, error.message);
    }
  }
}

async function createAchievement(achievement: typeof achievements[0]) {
  try {
    await apiRequest('/achievements', 'POST', achievement);
    console.log(`✓ Created achievement: ${achievement.title}`);
  } catch (error: any) {
    console.error(`✗ Failed to create achievement ${achievement.title}:`, error.message);
  }
}

async function createExplainerVideo(video: typeof explainerVideos[0]) {
  try {
    await apiRequest('/explainer-videos', 'POST', video);
    console.log(`✓ Created explainer video: ${video.title}`);
  } catch (error: any) {
    console.error(`✗ Failed to create explainer video ${video.title}:`, error.message);
  }
}

async function createOrUpdateSiteSettings() {
  try {
    // Check if site settings exist
    const existing = await apiRequest('/site-setting');

    if (existing.data) {
      // Update existing
      await apiRequest('/site-setting', 'PUT', siteSettings);
      console.log(`✓ Updated site settings`);
    } else {
      // Create new
      await apiRequest('/site-setting', 'POST', siteSettings);
      console.log(`✓ Created site settings`);
    }
  } catch (error: any) {
    // Try creating if get failed
    try {
      await apiRequest('/site-setting', 'POST', siteSettings);
      console.log(`✓ Created site settings`);
    } catch (createError: any) {
      console.error(`✗ Failed to create site settings:`, createError.message);
    }
  }
}

async function seed() {
  console.log('================================================');
  console.log('  The Big Talk - CMS Content Seed Script');
  console.log('================================================\n');
  console.log(`Strapi URL: ${STRAPI_URL}\n`);

  try {
    // Create team members
    console.log('📋 Creating Team Members...');
    for (const member of teamMembers) {
      await createTeamMember(member);
    }

    // Create core values
    console.log('\n💎 Creating Core Values...');
    for (const value of coreValues) {
      await createCoreValue(value);
    }

    // Create impact stats
    console.log('\n📊 Creating Impact Stats...');
    for (const stat of impactStats) {
      await createImpactStat(stat);
    }

    // Create categories
    console.log('\n🏷️  Creating Categories...');
    for (const category of categories) {
      await createCategory(category);
    }

    // Create achievements
    console.log('\n🏆 Creating Achievements...');
    for (const achievement of achievements) {
      await createAchievement(achievement);
    }

    // Create explainer videos
    console.log('\n🎬 Creating Explainer Videos...');
    for (const video of explainerVideos) {
      await createExplainerVideo(video);
    }

    // Create site settings
    console.log('\n⚙️  Creating Site Settings...');
    await createOrUpdateSiteSettings();

    console.log('\n================================================');
    console.log('  Seed completed successfully!');
    console.log('================================================\n');
    console.log('Next steps:');
    console.log('1. Log into Strapi admin: https://thebigtalk-cms.iopulse.cloud/admin');
    console.log('2. Upload team member images via Media Library');
    console.log('3. Update explainer video YouTube URLs with real links');
    console.log('4. Publish all draft entries');
    console.log('5. Upload logo in Site Settings\n');

  } catch (error) {
    console.error('\nSeed failed:', error);
    process.exit(1);
  }
}

seed();
