import BODY_PARTS from "../public/gallery/image1.jpg";
import TWO_BOYS from "../public/gallery/image2.jpg";
import LEAF_GIRL from "../public/gallery/image3.jpg";
import WATER_GIRL from "../public/gallery/image4.jpg";
import PAINT_HAND from "../public/gallery/image5.jpg";
import PARK from "../public/gallery/image6.jpg";
import PAINT_TWO from "../public/gallery/image7.jpg";
import DRAWING from "../public/gallery/image8.jpg";
import CRAFT from "../public/gallery/image9.jpg";
import BEACH_PLAY from "../public/gallery/image10.jpg";
import DIWALI from "../public/gallery/image11.jpg";
import COOK_NUTS from "../public/gallery/image12.jpg";
import PAINT_RED from "../public/gallery/image13.jpg";
import POT from "../public/gallery/image14.jpg";
import BEACH_CLAP from "../public/gallery/image15.jpg";
import VINO_CHILD from "../public/gallery/image16.jpg";
import LIGHT from "../public/gallery/image17.jpg";
import HAND_POWDER from "../public/gallery/image18.jpg";
import iconBrain from "../public/header/icon/brain-1.png";
import iconApple from "../public/header/icon/apple.png";
import iconMoon from "../public/header/icon/moon.png";
import iconHome from "../public/header/icon/home.png";




export const GALLERY_IMAGES = [
    {
        img: DRAWING,
        title: 'Image 1',
        rows: 1,
        cols: 4,
    },
    {
        img: BODY_PARTS,
        title: 'Image 2',
    },
    {
        img: LEAF_GIRL,
        title: 'Image 3',
    },
    {
        img: HAND_POWDER,
        title: 'Image 4',
        cols: 2,
    },
    {
        img: BEACH_PLAY,
        title: 'Image 5',
        rows: 1,
        cols: 4,
    },
    {
        img: VINO_CHILD,
        title: 'Image 6',
        rows: 2,
        cols: 2,
    },
    {
        img: COOK_NUTS,
        title: 'Image 7',
        cols: 2,
    },
    {
        img: DIWALI,
        title: 'Image 8',
        cols: 2,
    },
    {
        img: BEACH_CLAP,
        title: 'Image 9',
        cols: 2,
    },
    {
        img: WATER_GIRL,
        title: 'Image 10',
    },
    {
        img: LIGHT,
        title: 'Image 15',
    },
    {
        img: PARK,
        title: 'Image 11',
        cols: 2,
    },
    {
        img: PAINT_HAND,
        title: 'Image 12',
        cols: 2,
    },
    {
        img: CRAFT,
        title: 'Image 18',
        cols: 4,
    },
    {
        img: PAINT_TWO,
        title: 'Image 13',
        cols: 2,
    },
    {
        img: TWO_BOYS,
        title: 'Image 14',
        cols: 2,
    },
    {
        img: PAINT_RED,
        title: 'Image 16',
        cols: 2,
    },
    {
        img: POT,
        title: 'Image 17',
        cols: 2,
    },


];
export const CARDS_BRAIN = [
    { icon: iconBrain, title: "Regulated Sensations" },
    { icon: iconApple, title: "Nourishing Diet" },
    { icon: iconMoon, title: "Sound Sleep" },
    { icon: iconHome, title: "Right Home Environment" },
];

// Description data for Concentric Model Nodes
export const PERSPECTIVE_DETAILS = {
  // Core Perspectives
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
  // Supporting Perspectives
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

// Quiz questions structure
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
