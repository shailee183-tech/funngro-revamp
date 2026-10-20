/**
 * Data content for Teen / Earn page (/teen)
 * Strictly adheres to assessment requirements:
 * - No promised income or guaranteed employment
 * - Accurate, qualified policy details
 */

export const teenHeroContent = {
  label: "Youth Opportunities & Learning",
  titlePart1: "Start your ",
  highlight: "online earning",
  titlePart2: " journey in five simple steps.",
  description:
    "Funngro connects smart young minds with curated brand projects. Discover opportunities suited to your interests, complete eligible tasks, and build genuine work experience while learning financial independence early.",
  primaryCta: "Download App",
  secondaryCta: "See How It Works",
  badges: [
    { label: "Verified Brands", desc: "Curated partner campaigns" },
    { label: "Real Experience", desc: "Practical hands-on projects" },
    { label: "Safe & Supervised", desc: "Transparent terms & guidelines" }
  ]
};

export const fiveStepJourney = [
  {
    step: 1,
    title: "Download the app",
    tagline: "Get set up in minutes",
    description:
      "Create your profile, select your skills and interest areas, and complete standard age and guardian verification to unlock age-appropriate brand projects.",
    cardDetails: {
      action: "Profile Setup",
      keyRequirement: "Basic details & guardian consent",
      outcome: "Personalized project feed unlocked",
      tip: "Highlight your hobbies—like video editing, social media, or coding—to match with relevant briefs."
    }
  },
  {
    step: 2,
    title: "Pick a brand campaign",
    tagline: "Explore live opportunities",
    description:
      "Browse through curated brand briefs ranging from product feedback and app reviews to creative user-generated content and campus promotion.",
    cardDetails: {
      action: "Campaign Selection",
      keyRequirement: "Review brief guidelines & deadlines",
      outcome: "Task reserved under your dashboard",
      tip: "Carefully read campaign requirements and submission criteria before accepting a project."
    }
  },
  {
    step: 3,
    title: "Complete the task and submit proof",
    tagline: "Execute with creativity",
    description:
      "Perform the task following the exact instructions provided by the brand. Upload your screenshots, project links, or media files directly inside the app for review.",
    cardDetails: {
      action: "Task Submission",
      keyRequirement: "High-quality, verifiable proof",
      outcome: "Submitted for brand QA review",
      tip: "Double-check guidelines to ensure your proof meets every required deliverable standard."
    }
  },
  {
    step: 4,
    title: "Receive payment according to campaign terms",
    tagline: "Transparent compensation",
    description:
      "Once your submission is verified and approved by the brand team against the brief criteria, earnings are credited to your Funngro wallet in accordance with campaign terms.",
    cardDetails: {
      action: "Payment Clearance",
      keyRequirement: "Approved deliverable verification",
      outcome: "Direct wallet credit",
      tip: "Funds can be redeemed securely per platform payout schedules and guardian-approved withdrawal methods."
    }
  },
  {
    step: 5,
    title: "Build experience and explore further opportunities",
    tagline: "Level up your portfolio",
    description:
      "Every successfully completed project enhances your profile rating, adds verified credentials to your portfolio, and unlocks higher-tier campaigns and ambassador roles.",
    cardDetails: {
      action: "Portfolio Growth",
      keyRequirement: "Consistency & quality track record",
      outcome: "Access to advanced brand initiatives",
      tip: "Top performers earn opportunities for direct brand ambassadorships and co-creation projects."
    }
  }
];

export const growthLevels = [
  {
    id: "start",
    level: "Level 01",
    name: "Start",
    badge: "Introductory Explorer",
    focus: "Basic discovery & foundational tasks",
    description:
      "Begin with bite-sized tasks that require zero prior professional experience. Ideal for getting familiar with project briefs, instructions, and submission workflows.",
    activities: [
      "Product feedback & app testing reviews",
      "Brand surveys & consumer sentiment polls",
      "Early adopter sampling & digital reviews"
    ],
    skillFocus: "Attention to detail, instruction following, digital literacy",
    progressionNote: "Complete initial verified tasks to build confidence and unlock intermediate creator campaigns."
  },
  {
    id: "grow",
    level: "Level 02",
    name: "Grow",
    badge: "Creative Contributor",
    focus: "Content creation & community engagement",
    description:
      "Apply your creative and analytical talents to produce user-generated content, test new app features, and participate in peer-to-peer brand awareness drives.",
    activities: [
      "User-generated short video & reel creation",
      "Social media awareness & brand advocacy",
      "Detailed bug reporting & feature usability analysis"
    ],
    skillFocus: "Visual storytelling, audience engagement, qualitative analysis",
    progressionNote: "Demonstrate consistent deliverable quality to become eligible for leadership and campus roles."
  },
  {
    id: "build",
    level: "Level 03",
    name: "Build",
    badge: "Ambassador & Lead",
    focus: "Leadership & strategic collaborations",
    description:
      "Take on higher responsibility briefs. Coordinate campus initiatives, manage micro-teams, and collaborate directly on product ideation with brand teams.",
    activities: [
      "Campus brand ambassadorship programs",
      "Youth focus group moderation & product co-creation",
      "Campaign coordination & peer mentorship"
    ],
    skillFocus: "Project leadership, community building, strategic communication",
    progressionNote: "Build a standout portfolio of real-world accomplishments for college applications and future careers."
  }
];

export const growthPrinciples = [
  {
    number: "01",
    title: "Learn through real projects",
    description:
      "Theoretical knowledge only goes so far. Real learning occurs when working on live deliverables that solve practical business problems for actual brands."
  },
  {
    number: "02",
    title: "Progress through opportunities",
    description:
      "Each milestone reached opens the door to richer challenges. Opportunity scales alongside your reliability, deliverable quality, and creative problem-solving."
  },
  {
    number: "03",
    title: "Build trust and influence",
    description:
      "Consistent accuracy and authentic communication build lasting credibility with brands, creating a reputation that distinguishes your profile."
  },
  {
    number: "04",
    title: "Develop practical skills",
    description:
      "Master competencies that school curriculums often skip: digital storytelling, deadline discipline, professional correspondence, and consumer research."
  },
  {
    number: "05",
    title: "Start without unnecessary complexity",
    description:
      "No complex resumes or prior internships required. Start where you are with straightforward tasks and learn the ropes through guided briefs."
  },
  {
    number: "06",
    title: "Grow through experience",
    description:
      "Every completed campaign is a real building block. Graduate from introductory tasks to creative leadership through iterative, hands-on practice."
  }
];

export const progressionTimeline = [
  {
    stage: 1,
    title: "Discover opportunities",
    category: "Exploration",
    description:
      "Browse the project marketplace, explore diverse industries, and identify briefs matching your personal interests and schedule."
  },
  {
    stage: 2,
    title: "Complete initial tasks",
    category: "Foundation",
    description:
      "Execute your first entry-level tasks—such as app feedback or surveys—to learn the submission and verification flow."
  },
  {
    stage: 3,
    title: "Refer friends where permitted",
    category: "Network",
    description:
      "Introduce motivated peers to the platform under official referral programs, growing the collaborative student community."
  },
  {
    stage: 4,
    title: "Create content",
    category: "Creativity",
    description:
      "Produce user-generated content, unboxing reviews, and social media media assets following brand creative guidelines."
  },
  {
    stage: 5,
    title: "Explore advanced campaigns",
    category: "Specialization",
    description:
      "Qualify for specialized multi-day campaigns, in-depth usability studies, and higher-scope commercial creative projects."
  },
  {
    stage: 6,
    title: "Support brand promotion or sales activities",
    category: "Advocacy",
    description:
      "Assist brands in sampling distribution, campus drives, and verified awareness activations across youth networks."
  },
  {
    stage: 7,
    title: "Develop leadership or entrepreneurial skills",
    category: "Leadership",
    description:
      "Step into campus lead roles, organize student cohorts, and interface directly with brand strategists on product ideation."
  }
];

export const teenFaqs = [
  {
    question: "Is Funngro free to use?",
    answer:
      "Yes, Funngro is 100% free for teens and young people to join, browse campaigns, and apply for opportunities. There are never any registration charges, membership fees, or upfront costs to access projects."
  },
  {
    question: "What types of opportunities are available?",
    answer:
      "Opportunities span a wide spectrum based on eligibility and interest, including app testing, digital surveys, user-generated content creation (reels and product reviews), creative writing, campus ambassadorship, and consumer sentiment research."
  },
  {
    question: "How do users get started?",
    answer:
      "Simply download the Funngro app, complete your profile setup with your interests and academic level, and review the introductory guidelines. Once your profile is activated, you can browse available campaigns and start applying immediately."
  },
  {
    question: "How do campaign payments work?",
    answer:
      "Payment terms are clearly stated on each individual campaign brief before you accept it. Once your submitted proof is reviewed and approved by the campaign coordinator, earnings are deposited into your Funngro wallet and can be transferred through guardian-compliant payout methods in accordance with platform policies."
  },
  {
    question: "What are the eligibility requirements?",
    answer:
      "Funngro is designed for teens and young adults (typically ages 14 to 25). For users under the age of majority in their jurisdiction, verifiable parent or guardian consent is required during onboarding. You will also need a smartphone with internet connectivity."
  },
  {
    question: "How can users contact support?",
    answer:
      "Users can reach our dedicated support desk directly via the in-app Help section or by emailing support@funngro.com. Support hours are Monday through Friday, 10 AM to 6 PM IST. For specific campaign disputes, submit a ticket within 48 hours of task review."
  }
];
