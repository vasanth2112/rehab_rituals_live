// src/Components/Sensory/SensoryListConstants.js

// 1. Core Concepts Section Cards
export const CORE_CONCEPTS = [
  {
    title: "One System",
    desc: "<strong>Not separate therapies</strong> — we offer one interconnected system designed to align all developmental goals.",
    colorClass: "bg-blue"
  },
  {
    title: "Multidimensional",
    desc: "<strong>Comprehensive scope</strong> — integrates Primitive reflexes, Brain nutrition, and sensory-calming Yoga.",
    colorClass: "bg-teal"
  },
  {
    title: "Clear Pathway",
    desc: "<strong>Structured milestones</strong> — know exactly what developmental milestone and focus area comes next.",
    colorClass: "bg-orange"
  },
  {
    title: "Beyond Therapy Room",
    desc: "<strong>Continuous support</strong> — includes structured home plan guidelines and active parental coaching.",
    colorClass: "bg-pink"
  }
];

// 2. Concentric Model Core Nodes
export const CORE_NODES = [
  { id: "SI", label: "Sensory\nIntegration", angle: 270 },
  { id: "DLA", label: "Dev\nLanguage", angle: 330 },
  { id: "RI", label: "Reflex\nIntegration", angle: 30 },
  { id: "TA", label: "Trauma\nApproach", angle: 90 },
  { id: "PT", label: "Play\nTherapy", angle: 150 },
  { id: "BM", label: "Behavior\nMod", angle: 210 }
];

// 3. Concentric Model Supporting Nodes
export const SUPPORTING_NODES = [
  { id: "BBN", label: "Brain\nNutrition", angle: 270 },
  { id: "SY", label: "Sensory\nYoga", angle: 315 },
  { id: "SR", label: "Sleep\nRetrain", angle: 0 },
  { id: "BG", label: "Brain\nGym", angle: 45 },
  { id: "IHP", label: "Home\nPlan", angle: 90 },
  { id: "PGS", label: "Parent\nSupport", angle: 135 },
  { id: "ED", label: "Environ\nDetox", angle: 180 },
  { id: "TL", label: "Therapeutic\nListen", angle: 225 }
];

// 4. Description data for Concentric Model Nodes (re-located from ListConstants.js)
export const PERSPECTIVE_DETAILS = {
  SI: {
    title: "Sensory Integration (Occupational Therapy)",
    type: "Core Perspective",
    desc: "Focuses on organizing and processing inputs from all sensory channels (vestibular, proprioceptive, tactile, auditory, visual, interoception). This establishes the physiological foundation for self-regulation, attention, motor control, and cognitive learning."
  },
  DLA: {
    title: "Developmental Language Approach (Speech Therapy)",
    type: "Core Perspective",
    desc: "Nurtures expressive and receptive communication in natural, interactive settings. Instead of rote vocabulary drill, it emphasizes child-led interaction, pragmatic social skills, and structural language development."
  },
  RI: {
    title: "Reflex Integration (Occupational Therapy)",
    type: "Core Perspective",
    desc: "Identifies and integrates retained primitive baby reflexes (such as the Moro or Fear Paralysis reflex). Unintegrated reflexes place the nervous system in a constant state of threat, affecting posture, coordination, and focus."
  },
  TA: {
    title: "Trauma-Informed Approaches (Behavior Therapy)",
    type: "Core Perspective",
    desc: "Provides therapeutic safety and emotional validation. By understanding how past stresses affect behaviors, we help children feel emotionally secure, calm their nervous system, and build behavioral control."
  },
  PT: {
    title: "Play Therapy (Combined Therapy)",
    type: "Core Perspective",
    desc: "Utilizes child-guided play to foster emotional expression, social exploration, problem-solving, and vocabulary development. Play is the natural language of childhood, and it is a key tool for learning and development."
  },
  BM: {
    title: "Behavior Modification (Behavior Therapy)",
    type: "Core Perspective",
    desc: "Uses positive reinforcement, structural predictability, and gentle behavioral guidelines to help children develop positive habits, self-regulation, and adaptive coping mechanisms for transitions."
  },
  BBN: {
    title: "Brain-Based Nutrition",
    type: "Supporting Perspective",
    desc: "Supports the gut-brain axis. We help resolve oral-sensory food aversion (picky eating), improve digestion, and design dietary plans that reduce neural inflammation, stabilize mood, and fuel brain development."
  },
  SY: {
    title: "Sensory Yoga",
    type: "Supporting Perspective",
    desc: "Combines deep breathing techniques, mindfulness, and slow physical movements. This regulates inner state, improves core body strength, builds balance, and helps children transition into a calm, alert state."
  },
  SR: {
    title: "Sleep Retraining",
    type: "Supporting Perspective",
    desc: "Bedtime and restorative sleep are vital for memory consolidation and emotional recovery. We guide families on creating calming sensory bedrooms, adjusting biological rhythms, and stabilizing sleep cycles."
  },
  BG: {
    title: "Brain Gym",
    type: "Supporting Perspective",
    desc: "Targeted cross-lateral physical coordination patterns that stimulate left and right brain hemispheres. This supports bilateral integration, writing posture, hand-eye coordination, and overall learning readiness."
  },
  IHP: {
    title: "Individual Home Plan",
    type: "Supporting Perspective",
    desc: "Translates clinical progress to the living room. We create practical, customized sensory strategies and predictable daily structures that parents can easily execute at home."
  },
  PGS: {
    title: "Parental Guidance & Support",
    type: "Supporting Perspective",
    desc: "Equips families with active coaching, sensory insights, and stress management tools. Empowered and calm parents are the absolute foundation of a child's developmental success."
  },
  ED: {
    title: "Environmental Detox",
    type: "Supporting Perspective",
    desc: "Identifies and reduces sensory overstimulation in the child's daily environments, including decluttering visual space, regulating artificial light/noise levels, and structuring digital screen exposure."
  },
  TL: {
    title: "Therapeutic Listening",
    type: "Supporting Perspective",
    desc: "An advanced auditory protocol using modulated music and sound profiles. It trains the nervous system to process sound waves, improving spatial awareness, balance, attention, and sensory regulation."
  }
};

// 5. The 4 Phases Section Detail Checklist
export const PHASES_LIST = [
  {
    num: 1,
    name: "Regulation",
    focus: "The child is learning to feel safe, calm, and organized.",
    symptoms: [
      "Frequent meltdowns",
      "Hyperactivity or sensory seeking",
      "Difficulty sitting or attending",
      "Poor sleep patterns",
      "Emotional overwhelm"
    ]
  },
  {
    num: 2,
    name: "Engagement",
    focus: "The child begins to connect with people, surroundings, and communication.",
    symptoms: [
      "Increased eye contact",
      "Better response to name",
      "More engagement with others",
      "Improved imitation",
      "Seeking interaction more often"
    ]
  },
  {
    num: 3,
    name: "Skill Acquisition",
    focus: "The child starts developing functional skills.",
    symptoms: [
      "Better understanding of instructions",
      "Improved speech and communication",
      "Increased participation in tasks",
      "Better play skills",
      "Improved motor coordination"
    ]
  },
  {
    num: 4,
    name: "Functional Integration",
    focus: "Skills begin transferring into daily life naturally.",
    symptoms: [
      "Better behavior regulation",
      "Improved classroom participation",
      "Social interaction improves",
      "Reduced dependence on prompts",
      "Better adaptability to routines"
    ]
  }
];

// 6. Roadmap Steps
export const ROADMAP_STEPS = [
  { step: 1, name: "Integrative Assessment", desc: "Detailed mapping of sensory, language, and reflex profile." },
  { step: 2, name: "Goal setting", desc: "Co-creating one shared integrated objective." },
  { step: 3, name: "Phase 1 Therapy", desc: "Therapeutic intervention centered on regulation & calm." },
  { step: 4, name: "Home Integration", desc: "Executing custom home plan protocols with parents." },
  { step: 5, name: "Progress Tracking", desc: "Reviewing metrics to upgrade to the next phase." }
];

// 7. Traditional vs Integrated Goal comparison details
export const GOAL_COMPARISON = {
  traditional: {
    title: "Traditional Therapy Models",
    lead: "Traditional models often focus on isolated objectives:",
    points: [
      "Separate sessions with separate therapists",
      "Separate, often competing developmental targets",
      "Separate progress tracking systems"
    ],
    result: "This can sometimes make progress feel disconnected, slower, or inconsistent for the child."
  },
  integrated: {
    title: "Our Integrated Goal System",
    lead: "Bringing all clinical perspectives into alignment:",
    points: [
      "Every therapist works toward the same developmental outcome",
      "Goals are connected dynamically across therapies",
      "The child experiences consistent learning & reinforcement"
    ],
    result: "Child's development is quicker under the Integrated Goal Model."
  }
};

// 8. Development Areas
export const DEVELOPMENT_AREAS = [
  "Attention & Regulation",
  "Communication & Speech",
  "Emotional & Behavioral Development",
  "Sensory Processing",
  "Independence & Daily Skills"
];

// 9. Same Goal but Different Approach branches
export const INTEGRATED_GOAL_EXAMPLE = {
  title: "To Improve Functional Communication",
  branches: [
    {
      header: "OCCUPATIONAL THERAPY",
      colorClass: "ot-color-header",
      bullets: [
        "Support sensory regulation for interaction",
        "Improve motor planning for gestures and play"
      ]
    },
    {
      header: "SPEECH THERAPY",
      colorClass: "speech-color-header",
      bullets: [
        "Develop requesting and expressive language",
        "Improve understanding and social interaction"
      ]
    },
    {
      header: "BEHAVIOR THERAPY",
      colorClass: "behavior-color-header",
      bullets: [
        "Reinforce communication attempts",
        "Reduce frustration-related behaviors"
      ]
    }
  ]
};

// 10. Diagnostic Quiz questions structure (re-located from ListConstants.js)
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "How does your child generally react to sensory stimuli, transitions, or daily routines?",
    options: [
      { text: "Frequent intense meltdowns, hyperactivity, poor sleep, or easily overwhelmed by sounds/textures.", phase: 1 },
      { text: "Mostly calm physically, but withdrawn, showing low responsiveness or avoids interacting with others.", phase: 2 },
      { text: "Follows basic daily routines, but struggles with multi-step instructions, functional play, or speaking.", phase: 3 },
      { text: "Adapts well to home and school, but occasionally needs guidance on advanced behaviors and self-care.", phase: 4 }
    ]
  },
  {
    id: 2,
    question: "How would you describe your child's eye contact and connection with family members?",
    options: [
      { text: "Avoids eye contact consistently, rarely responds when called, and struggles to orient toward your face.", phase: 1 },
      { text: "Eye contact is starting to build, occasionally responds to name, and shows emerging interest in playing.", phase: 2 },
      { text: "Maintains eye contact during tasks, understands basic language, but struggles with verbal conversations.", phase: 3 },
      { text: "Good eye contact and conversation, but needs coaching on complex peer interactions and team play.", phase: 4 }
    ]
  },
  {
    id: 3,
    question: "What is the primary barrier when you try to guide your child through a task or game?",
    options: [
      { text: "Cannot sit still, runs away, gets hyperactive, or becomes distressed by the setup.", phase: 1 },
      { text: "Willing to sit for short intervals, but prefers solo play and doesn't attempt to copy your actions.", phase: 2 },
      { text: "Imitates gestures and attempts skills, but requires constant verbal or physical prompt assistance.", phase: 3 },
      { text: "Performs skills independently in clinical therapy, but struggles to use them naturally at home or school.", phase: 4 }
    ]
  },
  {
    id: 4,
    question: "What is your child's behavior pattern when facing a new environment or schedule change?",
    options: [
      { text: "Experiences severe anxiety, sensory overload tantrums, or runs away (flight response).", phase: 1 },
      { text: "Shuts down, clings to parents, or remains extremely passive without interacting with the room.", phase: 2 },
      { text: "Cooperates with guidance, but requires significant time and visual cues to adapt to new steps.", phase: 3 },
      { text: "Maintains behavioral regulation and adjusts, though minor stubbornness or hesitation can occur.", phase: 4 }
    ]
  }
];

// 11. Diagnostic Phase Result descriptions (re-located from ListConstants.js)
export const PHASE_DETAILS = {
  1: {
    title: "Phase 1: Regulation",
    focus: "Building nervous system safety, calm states, and sensory organization.",
    description: "Your child's nervous system is currently in a reactive state, making focus and learning difficult. The primary focus of therapy is to help them feel safe, calm, and physically organized.",
    tips: "Ensure predictable routines, reduce sensory overstimulation (noise/lights), schedule active movement/vestibular breaks, and work on sleep routines."
  },
  2: {
    title: "Phase 2: Engagement",
    focus: "Connecting with surroundings, communication, and shared attention.",
    description: "Your child is beginning to achieve calmer states and is ready to build connection. The therapy focus shifts to expanding shared attention, mutual engagement, and building back-and-forth social loops.",
    tips: "Follow your child's lead during play, practice eye-level interactions, reward name-response, and use physical imitation games."
  },
  3: {
    title: "Phase 3: Skill Acquisition",
    focus: "Developing functional speech, language, play, and motor skills.",
    description: "With regulation and social connection in place, your child's brain is highly receptive. The therapy focus moves to language structure, physical coordination, motor planning, and functional play skills.",
    tips: "Break tasks down into small visual steps, model simple descriptive sentences, encourage peer play, and support fine-motor activities."
  },
  4: {
    title: "Phase 4: Functional Integration",
    focus: "Generalizing skills into daily life, classroom learning, and independence.",
    description: "Your child is acquiring excellent skills. The final focus is ensuring these skills translate automatically into school learning, social adaptation, and self-care without prompts.",
    tips: "Create structured playdates, practice self-care routines with visual checklists, support emotional adaptation strategies, and minimize direct prompts."
  }
};

// 12. Practical Videos Information
export const PRACTICAL_VIDEOS = [
  {
    title: "Understanding Sensory Regulation",
    desc: "An overview of how vestibular, proprioceptive, and tactile regulation unlocks academic readiness.",
    length: "4:15"
  },
  {
    title: "OT, Speech & Behavior Connection",
    desc: "How integrating different therapies produces developmental progress faster than separate sessions.",
    length: "4:15"
  },
  {
    title: "Sensory Yoga and Bedtime Calm",
    desc: "Simple breathing exercises and sleep routine shifts to help soothe a child's hyperactive system.",
    length: "4:15"
  },
  {
    title: "Gut Health & Nutritional Planning",
    desc: "Addressing oral food aversions and picky eating textures to nourish brain pathways.",
    length: "4:15"
  }
];

// 13. Download Items
export const DOWNLOAD_ITEMS = [
  {
    title: "Developmental Roadmap",
    desc: "Download the Sensory Weave Developmental Roadmap. A simple guide to help you understand your child’s developmental journey — from regulation and connection to learning and independence. Discover the foundations behind meaningful, long-term progress.",
    href: "/sensory/pdf/Roadmap_Rehab_Rituals.pdf",
    download: "Roadmap_Rehab_Rituals.pdf"
  },
  {
    title: "Sensory Weave Booklet",
    desc: "An introductory guide to understanding autism, ADHD, speech delays, and the foundations behind meaningful developmental progress. Explore how Sensory Weave connects regulation, communication, behavior, and learning into one structured journey.",
    href: "/sensory/pdf/Therapy_info_Booklet.pdf",
    download: "Therapy_info_Booklet.pdf"
  }
];
