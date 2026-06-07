import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Typography, Button, Card, CardContent, Tabs, Tab } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";
import "./Sensory.scss";
import useScrollReveal from "../../useScrollReveal.js";

// Description data for Concentric Model Nodes
const PERSPECTIVE_DETAILS = {
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
const QUIZ_QUESTIONS = [
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

const PHASE_DETAILS = {
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

export default function SensoryContainer() {
  useScrollReveal();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  // Concentric Model state
  const [selectedNode, setSelectedNode] = useState("SI");

  // Quiz states
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleQuizAnswer = (questionId, phase) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: phase
    });
  };

  const calculateQuizResult = () => {
    if (Object.keys(quizAnswers).length < 4) {
      alert("Please answer all questions before submitting.");
      return;
    }
    // Calculate phase frequencies
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
    Object.values(quizAnswers).forEach(phase => {
      counts[phase] = (counts[phase] || 0) + 1;
    });

    // Find the phase with maximum count
    let maxPhase = 1;
    let maxCount = 0;
    Object.entries(counts).forEach(([phase, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxPhase = Number(phase);
      }
    });

    setQuizResult(maxPhase);

    // Smooth scroll to the quiz section to keep the diagnostic result in focus
    setTimeout(() => {
      const quizSection = document.getElementById("quiz-anchor");
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);

    // Smooth scroll to the quiz section to keep the diagnostic start in focus
    setTimeout(() => {
      const quizSection = document.getElementById("quiz-anchor");
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <div className="sensory-page-wrapper">

      {/* Hero Header Banner */}
      <section className="sensory-hero">
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/")}
            className="back-btn"
          >
            Back to Home
          </Button>
          <Box className="hero-content reveal reveal-scale">
            <span className="hero-badge">Sensory Weave Methodology</span>
            <Typography variant="h1" className="sensory-title">
              Sensory Weave <span>Framework</span>
            </Typography>
            <Typography className="hero-headline">
              &ldquo;Therapy alone is not enough&rdquo;
            </Typography>
            <Typography className="hero-tagline">
              because &ldquo;true progress begins with regulation, connection, and readiness to learn.&rdquo;
            </Typography>
            <Typography className="hero-intro">
              Sensory Weave is a developmental system which integrates multiple therapy perspectives into one, exclusively designed for children with Speech delay, Autism, and ADHD.
            </Typography>
          </Box>
        </Container>
      </section>

      {/* Core Concepts Section */}
      <section className="sensory-concepts">
        <Container maxWidth="lg">
          <Grid container spacing={3} className="concepts-grid">
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-1">
              <Card className="concept-card">
                <CardContent>
                  <div className="concept-icon-wrap bg-blue">
                    <CheckCircleOutlineIcon />
                  </div>
                  <Typography variant="h3" className="concept-title">One System</Typography>
                  <Typography className="concept-desc">
                    <strong>Not separate therapies</strong> — we offer one interconnected system designed to align all developmental goals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-2">
              <Card className="concept-card">
                <CardContent>
                  <div className="concept-icon-wrap bg-teal">
                    <CheckCircleOutlineIcon />
                  </div>
                  <Typography variant="h3" className="concept-title">Multidimensional</Typography>
                  <Typography className="concept-desc">
                    <strong>Comprehensive scope</strong> — integrates Primitive reflexes, Brain nutrition, and sensory-calming Yoga.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-3">
              <Card className="concept-card">
                <CardContent>
                  <div className="concept-icon-wrap bg-orange">
                    <CheckCircleOutlineIcon />
                  </div>
                  <Typography variant="h3" className="concept-title">Clear Pathway</Typography>
                  <Typography className="concept-desc">
                    <strong>Structured milestones</strong> — know exactly what developmental milestone and focus area comes next.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-4">
              <Card className="concept-card">
                <CardContent>
                  <div className="concept-icon-wrap bg-pink">
                    <CheckCircleOutlineIcon />
                  </div>
                  <Typography variant="h3" className="concept-title">Beyond Therapy Room</Typography>
                  <Typography className="concept-desc">
                    <strong>Continuous support</strong> — includes structured home plan guidelines and active parental coaching.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Neuroscience Concentric Model Section */}
      <section className="sensory-multidimensional-model">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title text-center reveal">
            Our Multidimensional Model
          </Typography>
          <Typography className="section-subtitle text-center max-w-700 reveal">
            Based on recent developments in the field of Neurosciences
          </Typography>

          <Grid container spacing={4} className="model-container" alignItems="center">
            {/* Concentric Circle Interactive SVG (Desktop) / Structured List (Mobile) */}
            <Grid item xs={12} md={7} className="model-visual-col reveal reveal-left">
              <Box className="interactive-diagram-wrapper">
                <svg viewBox="0 0 600 600" className="concentric-svg">
                  {/* Outer Supporting Ring */}
                  <circle cx="300" cy="300" r="240" className="ring-line supporting-ring" />
                  {/* Inner Core Ring */}
                  <circle cx="300" cy="300" r="150" className="ring-line core-ring" />

                  {/* Lines Connecting Nodes to Center */}
                  {/* (Optionally omitted for visual clarity unless active, but we draw a clean glow) */}

                  {/* Center Circle: CHILD */}
                  <g className="node-group center-child">
                    <circle cx="300" cy="300" r="50" className="center-node" />
                    <text x="300" y="306" className="center-text" textAnchor="middle">CHILD</text>
                  </g>

                  {/* ================= CORE NODES (6 items at radius 150) ================= */}
                  {/* Angle spacing: 360 / 6 = 60 degrees. Offset to align nicely */}
                  {[
                    { id: "SI", label: "Sensory\nIntegration", angle: 270 },
                    { id: "DLA", label: "Dev\nLanguage", angle: 330 },
                    { id: "RI", label: "Reflex\nIntegration", angle: 30 },
                    { id: "TA", label: "Trauma\nApproach", angle: 90 },
                    { id: "PT", label: "Play\nTherapy", angle: 150 },
                    { id: "BM", label: "Behavior\nMod", angle: 210 }
                  ].map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const cx = 300 + 150 * Math.cos(rad);
                    const cy = 300 + 150 * Math.sin(rad);
                    const isActive = selectedNode === node.id;
                    return (
                      <g
                        key={node.id}
                        className={`node-group core-node-group ${isActive ? "active" : ""}`}
                        onClick={() => setSelectedNode(node.id)}
                        onMouseEnter={() => setSelectedNode(node.id)}
                      >
                        {/* Stable invisible catch circle for hover events to prevent vibration */}
                        <circle cx={cx} cy={cy} r="40" fill="transparent" pointerEvents="all" />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="32"
                          className="node-circle core-circle"
                          style={{ transformOrigin: `${cx}px ${cy}px` }}
                        />
                        {node.label.split("\n").map((line, idx) => (
                          <text
                            key={idx}
                            x={cx}
                            y={cy - 2 + (idx * 12) + (node.label.split("\n").length === 1 ? 5 : 0)}
                            className="node-text core-text"
                            textAnchor="middle"
                          >
                            {line}
                          </text>
                        ))}
                      </g>
                    );
                  })}

                  {/* ================= SUPPORTING NODES (8 items at radius 240) ================= */}
                  {/* Angle spacing: 360 / 8 = 45 degrees. Offset by 22.5 to interleave */}
                  {[
                    { id: "BBN", label: "Brain\nNutrition", angle: 270 },
                    { id: "SY", label: "Sensory\nYoga", angle: 315 },
                    { id: "SR", label: "Sleep\nRetrain", angle: 0 },
                    { id: "BG", label: "Brain\nGym", angle: 45 },
                    { id: "IHP", label: "Home\nPlan", angle: 90 },
                    { id: "PGS", label: "Parent\nSupport", angle: 135 },
                    { id: "ED", label: "Environ\nDetox", angle: 180 },
                    { id: "TL", label: "Therapeutic\nListen", angle: 225 }
                  ].map((node) => {
                    const rad = (node.angle * Math.PI) / 180;
                    const cx = 300 + 240 * Math.cos(rad);
                    const cy = 300 + 240 * Math.sin(rad);
                    const isActive = selectedNode === node.id;
                    return (
                      <g
                        key={node.id}
                        className={`node-group supporting-node-group ${isActive ? "active" : ""}`}
                        onClick={() => setSelectedNode(node.id)}
                        onMouseEnter={() => setSelectedNode(node.id)}
                      >
                        {/* Stable invisible catch circle for hover events to prevent vibration */}
                        <circle cx={cx} cy={cy} r="38" fill="transparent" pointerEvents="all" />
                        <circle
                          cx={cx}
                          cy={cy}
                          r="30"
                          className="node-circle supporting-circle"
                          style={{ transformOrigin: `${cx}px ${cy}px` }}
                        />
                        {node.label.split("\n").map((line, idx) => (
                          <text
                            key={idx}
                            x={cx}
                            y={cy - 2 + (idx * 10) + (node.label.split("\n").length === 1 ? 4 : 0)}
                            className="node-text supporting-text"
                            textAnchor="middle"
                          >
                            {line}
                          </text>
                        ))}
                      </g>
                    );
                  })}

                  {/* Ring Labels Headers - Rendered last so they draw on top of the circles */}
                  {/* Outer Ring Labels Header (shifted up to y=22 to clear top supporting node Brain Nutrition) */}
                  <text x="300" y="22" className="ring-label-header supporting-header" textAnchor="middle">
                    SUPPORTING PERSPECTIVES
                  </text>
                  {/* Inner Ring Labels Header (shifted up to y=106 to clear top core node Sensory Integration) */}
                  <text x="300" y="106" className="ring-label-header core-header" textAnchor="middle">
                    CORE PERSPECTIVES
                  </text>
                </svg>
              </Box>
              <Typography className="tap-hint text-center">
                * Click on any perspective node in the diagram to read its details.
              </Typography>
            </Grid>

            {/* Model Info Detail Display Panel */}
            <Grid item xs={12} md={5} className="reveal reveal-right">
              <Box className="model-info-panel">
                <span className={`panel-badge ${PERSPECTIVE_DETAILS[selectedNode].type.toLowerCase().replace(" ", "-")}`}>
                  {PERSPECTIVE_DETAILS[selectedNode].type}
                </span>
                <Typography variant="h3" className="panel-title">
                  {PERSPECTIVE_DETAILS[selectedNode].title}
                </Typography>
                <Typography className="panel-desc">
                  {PERSPECTIVE_DETAILS[selectedNode].desc}
                </Typography>

                <div className="panel-quick-nav">
                  <p>Browse perspectives:</p>
                  <div className="quick-nav-btns">
                    {Object.keys(PERSPECTIVE_DETAILS).map((nodeId) => (
                      <button
                        key={nodeId}
                        className={`quick-btn ${selectedNode === nodeId ? 'active' : ''}`}
                        onClick={() => setSelectedNode(nodeId)}
                      >
                        {nodeId}
                      </button>
                    ))}
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* The 4 Phases Section */}
      <section className="sensory-phases" id="phases-section">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title text-center">
            Development Happens through Connected Phases
          </Typography>
          <Typography className="section-subtitle text-center max-w-700">
            Development is not divided into OT, speech, or behavior therapy—it happens through connected phases.
          </Typography>

          <Typography variant="h3" className="phases-header text-center">
            The Four Phases of Sensory Weave
          </Typography>

          <Grid container spacing={3} className="phases-grid">
            {/* Phase 1 */}
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-1">
              <Card className="phase-card border-phase-1">
                <CardContent>
                  <div className="phase-number bg-phase-1">PHASE 1</div>
                  <Typography variant="h4" className="phase-card-title">Regulation</Typography>
                  <Typography className="phase-focus">
                    The child is learning to feel safe, calm, and organized.
                  </Typography>
                  <div className="phase-notice-box">
                    <p className="notice-label">You may notice:</p>
                    <ul className="notice-list">
                      <li>Frequent meltdowns</li>
                      <li>Hyperactivity or sensory seeking</li>
                      <li>Difficulty sitting or attending</li>
                      <li>Poor sleep patterns</li>
                      <li>Emotional overwhelm</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            {/* Phase 2 */}
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-2">
              <Card className="phase-card border-phase-2">
                <CardContent>
                  <div className="phase-number bg-phase-2">PHASE 2</div>
                  <Typography variant="h4" className="phase-card-title">Engagement</Typography>
                  <Typography className="phase-focus">
                    The child begins to connect with people, surroundings, and communication.
                  </Typography>
                  <div className="phase-notice-box">
                    <p className="notice-label">You may notice:</p>
                    <ul className="notice-list">
                      <li>Increased eye contact</li>
                      <li>Better response to name</li>
                      <li>More engagement with others</li>
                      <li>Improved imitation</li>
                      <li>Seeking interaction more often</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            {/* Phase 3 */}
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-3">
              <Card className="phase-card border-phase-3">
                <CardContent>
                  <div className="phase-number bg-phase-3">PHASE 3</div>
                  <Typography variant="h4" className="phase-card-title">Skill Acquisition</Typography>
                  <Typography className="phase-focus">
                    The child starts developing functional skills.
                  </Typography>
                  <div className="phase-notice-box">
                    <p className="notice-label">You may notice:</p>
                    <ul className="notice-list">
                      <li>Better understanding of instructions</li>
                      <li>Improved speech and communication</li>
                      <li>Increased participation in tasks</li>
                      <li>Better play skills</li>
                      <li>Improved motor coordination</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>

            {/* Phase 4 */}
            <Grid item xs={12} sm={6} md={3} className="reveal reveal-scale reveal-delay-4">
              <Card className="phase-card border-phase-4">
                <CardContent>
                  <div className="phase-number bg-phase-4">PHASE 4</div>
                  <Typography variant="h4" className="phase-card-title">Functional Integration</Typography>
                  <Typography className="phase-focus">
                    Skills begin transferring into daily life naturally.
                  </Typography>
                  <div className="phase-notice-box">
                    <p className="notice-label">You may notice:</p>
                    <ul className="notice-list">
                      <li>Better behavior regulation</li>
                      <li>Improved classroom participation</li>
                      <li>Social interaction improves</li>
                      <li>Reduced dependence on prompts</li>
                      <li>Better adaptability to routines</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box className="phase-footer-cta text-center">
            <Typography className="phase-footer-quote">
              &ldquo;Every child moves through these phases differently, and progress is built through small, meaningful changes over time.&rdquo;
            </Typography>
            <Button
              variant="contained"
              className="phase-quiz-trigger-btn"
              onClick={() => {
                setActiveTab(0); // Set to Quiz tab first to mount the element
                setTimeout(() => {
                  const quizSection = document.getElementById("quiz-anchor");
                  if (quizSection) {
                    quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 100);
              }}
            >
              Take a test to know in which phase your child is
            </Button>
          </Box>
        </Container>
      </section>

      {/* Roadmap Section */}
      <section className="sensory-roadmap">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title text-center">
            Roadmap to Sensory Weave
          </Typography>
          <Typography className="section-subtitle text-center max-w-700">
            A structured pathway that guarantees systematic developmental gains
          </Typography>

          {/* Connected Steps Stepper */}
          <Box className="roadmap-stepper-container">
            <div className="roadmap-line"></div>
            <Grid container spacing={2} className="roadmap-grid">
              {[
                { step: 1, name: "Integrative Assessment", desc: "Detailed mapping of sensory, language, and reflex profile." },
                { step: 2, name: "Goal setting", desc: "Co-creating one shared integrated objective." },
                { step: 3, name: "Phase 1 Therapy", desc: "Therapeutic intervention centered on regulation & calm." },
                { step: 4, name: "Home Integration", desc: "Executing custom home plan protocols with parents." },
                { step: 5, name: "Progress Tracking", desc: "Reviewing metrics to upgrade to the next phase." }
              ].map((stepObj) => (
                <Grid item xs={12} sm={2.4} key={stepObj.step} className={`roadmap-node-col reveal reveal-scale reveal-delay-${stepObj.step}`}>
                  <div className="roadmap-node">
                    <div className="node-num">{stepObj.step}</div>
                    <Typography variant="h4" className="node-name">{stepObj.name}</Typography>
                    <Typography className="node-desc">{stepObj.desc}</Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box className="roadmap-ctas text-center">
            <Button
              variant="contained"
              startIcon={<GetAppIcon />}
              onClick={() => {
                setActiveTab(2); // Set to Downloads tab first to mount the element
                setTimeout(() => {
                  const downloadsTab = document.getElementById("resources-anchor");
                  if (downloadsTab) {
                    downloadsTab.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 100);
              }}
              className="roadmap-btn-download"
            >
              Download Detailed Roadmap
            </Button>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              href="https://api.whatsapp.com/send?phone=919994927394&text=I%20would%20like%20to%20book%20a%20Sensory%20Weave%20assessment%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="roadmap-btn-book"
            >
              Book an Assessment
            </Button>
          </Box>
        </Container>
      </section>

      {/* Integrated Goal System (How We Help) Section */}
      <section className="sensory-integrated-goals">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title text-center">
            How We Help?
          </Typography>
          <Typography className="section-subtitle text-center max-w-800">
            Instead of Occupational Therapy, Speech Therapy, and Behavioral Therapy working separately with different goals, our Integrated Goal System brings every therapy approach together under one meaningful developmental objective.
          </Typography>

          {/* Model Comparison Grid */}
          <Grid container spacing={4} className="comparison-grid">
            <Grid item xs={12} md={6} className="reveal reveal-left">
              <Card className="comparison-card traditional-border">
                <CardContent>
                  <Typography variant="h3" className="comparison-title traditional-color">
                    Traditional Therapy Models
                  </Typography>
                  <Typography className="comparison-lead">
                    Traditional models often focus on isolated objectives:
                  </Typography>
                  <ul className="comparison-list traditional-list">
                    <li>Separate sessions with separate therapists</li>
                    <li>Separate, often competing developmental targets</li>
                    <li>Separate progress tracking systems</li>
                  </ul>
                  <Box className="comparison-result bg-traditional-light">
                    <p>This can sometimes make progress feel disconnected, slower, or inconsistent for the child.</p>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} className="reveal reveal-right">
              <Card className="comparison-card integrated-border">
                <CardContent>
                  <Typography variant="h3" className="comparison-title integrated-color">
                    Our Integrated Goal System
                  </Typography>
                  <Typography className="comparison-lead">
                    Bringing all clinical perspectives into alignment:
                  </Typography>
                  <ul className="comparison-list integrated-list">
                    <li>Every therapist works toward the same developmental outcome</li>
                    <li>Goals are connected dynamically across therapies</li>
                    <li>The child experiences consistent learning & reinforcement</li>
                  </ul>
                  <Box className="comparison-result bg-integrated-light">
                    <p><strong>Child's development is quicker under the Integrated Goal Model.</strong></p>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* 5 Area Blocks representing key development areas */}
          <Box className="development-areas-block">
            <Typography variant="h3" className="areas-block-title text-center">
              Development areas covered under the Integrated Goal Model:
            </Typography>
            <div className="areas-grid">
              <div className="area-pill">Attention & Regulation</div>
              <div className="area-pill">Communication & Speech</div>
              <div className="area-pill">Emotional & Behavioral Development</div>
              <div className="area-pill">Sensory Processing</div>
              <div className="area-pill">Independence & Daily Skills</div>
            </div>
          </Box>

          {/* Same Goal But Different Approach Diagram */}
          <Box className="same-goal-diagram-container">
            <Typography variant="h3" className="diagram-title text-center">
              Same Goal but Different Approach
            </Typography>
            <Typography className="diagram-subtitle text-center">
              EXAMPLE: How a unified objective looks in practice
            </Typography>

            <div className="interactive-diagram-box">
              <Grid container spacing={3} className="diagram-content-grid" alignItems="center">
                {/* Central Goal Circle */}
                <Grid item xs={12} md={5} className="flex-center">
                  <div className="central-goal-circle">
                    <span className="goal-tag">INTEGRATED GOAL</span>
                    <Typography variant="h4" className="goal-main-text">
                      To Improve Functional Communication
                    </Typography>
                  </div>
                </Grid>

                {/* Branches / Connectors */}
                <Grid item xs={12} md={7} className="branches-col">
                  <div className="branch-card">
                    <div className="branch-header ot-color-header">OCCUPATIONAL THERAPY</div>
                    <div className="branch-body">
                      <ul>
                        <li>Support sensory regulation for interaction</li>
                        <li>Improve motor planning for gestures and play</li>
                      </ul>
                    </div>
                  </div>

                  <div className="branch-card">
                    <div className="branch-header speech-color-header">SPEECH THERAPY</div>
                    <div className="branch-body">
                      <ul>
                        <li>Develop requesting and expressive language</li>
                        <li>Improve understanding and social interaction</li>
                      </ul>
                    </div>
                  </div>

                  <div className="branch-card">
                    <div className="branch-header behavior-color-header">BEHAVIOR THERAPY</div>
                    <div className="branch-body">
                      <ul>
                        <li>Reinforce communication attempts</li>
                        <li>Reduce frustration-related behaviors</li>
                      </ul>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Container>
      </section>

      {/* Resources & Subpages Hub */}
      <section className="sensory-resources-hub" id="resources-anchor">
        <Container maxWidth="lg">
          <Typography variant="h2" className="section-title text-center">
            Resources & Tools
          </Typography>
          <Typography className="section-subtitle text-center max-w-700">
            Equipping parents with diagnostics, visual roadmaps, and educational video toolkits
          </Typography>

          {/* Tab Selector */}
          <Box className="tabs-wrapper">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              centered
              className="resources-tabs"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Take a Test" className="resource-tab-btn" />
              <Tab label="Videos" className="resource-tab-btn" />
              <Tab label="Downloads" className="resource-tab-btn" />
            </Tabs>
          </Box>

          {/* Tab Contents */}
          <Box className="tab-contents-panel">

            {/* TAB 0: Take a Test (Quiz) */}
            {activeTab === 0 && (
              <Box className="tab-quiz-view" id="quiz-anchor">
                <Typography variant="h3" className="tab-content-title text-center">
                  Phase Test (Diagnostic Quiz)
                </Typography>
                <Typography className="tab-content-subtitle text-center">
                  Answer the following indicators to discover which developmental phase of the Sensory Weave model matches your child's current readiness.
                </Typography>

                {!quizResult ? (
                  <Card className="quiz-card">
                    <CardContent>
                      {QUIZ_QUESTIONS.map((q, idx) => (
                        <div className="quiz-question-box" key={q.id}>
                          <Typography variant="h4" className="question-text">
                            {idx + 1}. {q.question}
                          </Typography>
                          <div className="quiz-options">
                            {q.options.map((opt, oIdx) => {
                              const isSelected = quizAnswers[q.id] === opt.phase;
                              return (
                                <button
                                  key={oIdx}
                                  className={`option-btn ${isSelected ? 'selected' : ''}`}
                                  onClick={() => handleQuizAnswer(q.id, opt.phase)}
                                >
                                  {opt.text}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      <Box className="quiz-submit-box text-center">
                        <Button
                          variant="contained"
                          onClick={calculateQuizResult}
                          className="quiz-submit-btn"
                        >
                          Submit Phase Test
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="quiz-result-card text-center">
                    <CardContent>
                      <div className="result-check">✔</div>
                      <Typography variant="h3" className="result-phase-title">
                        {PHASE_DETAILS[quizResult].title}
                      </Typography>
                      <Typography className="result-focus">
                        <strong>Primary Focus:</strong> {PHASE_DETAILS[quizResult].focus}
                      </Typography>

                      <Box className="result-box bg-integrated-light">
                        <Typography variant="h4" className="result-box-subtitle">Understanding this Phase:</Typography>
                        <Typography className="result-box-desc">
                          {PHASE_DETAILS[quizResult].description}
                        </Typography>
                      </Box>

                      <Box className="result-box bg-blue-light">
                        <Typography variant="h4" className="result-box-subtitle">Recommended Parenting Strategies:</Typography>
                        <Typography className="result-box-desc">
                          {PHASE_DETAILS[quizResult].tips}
                        </Typography>
                      </Box>

                      <Box className="quiz-score-breakdown">
                        <Typography variant="h4" className="breakdown-title">
                          Symptom Profile Summary (Selected Indicators):
                        </Typography>
                        <div className="breakdown-bars">
                          {[1, 2, 3, 4].map(phaseNum => {
                            const score = Object.values(quizAnswers).filter(p => p === phaseNum).length;
                            const percentage = (score / 4) * 100;
                            return (
                              <div key={phaseNum} className="breakdown-row">
                                <div className="breakdown-label">
                                  <span>{PHASE_DETAILS[phaseNum].title}</span>
                                  <span>{score} / 4 symptoms</span>
                                </div>
                                <div className="breakdown-bar-bg">
                                  <div 
                                    className={`breakdown-bar-fill bg-phase-${phaseNum}`} 
                                    style={{ width: `${percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </Box>

                      <Box className="result-actions">
                        <Button
                          variant="contained"
                          startIcon={<WhatsAppIcon />}
                          href={`https://api.whatsapp.com/send?phone=919994927394&text=I%20completed%20the%20Sensory%20Weave%20Phase%20Test.%20My%20child%27s%20indicated%20phase%20is%20Phase%20${quizResult}%20(${PHASE_DETAILS[quizResult].title.split(": ")[1]}).%20I%20would%20like%20to%20schedule%20an%20evaluation.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="result-wa-btn"
                        >
                          Book a Phase {quizResult} Assessment
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={resetQuiz}
                          className="result-retry-btn"
                        >
                          Retake Test
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                )}
              </Box>
            )}

            {/* TAB 1: Videos */}
            {activeTab === 1 && (
              <Box className="tab-videos-view">
                <Typography variant="h3" className="tab-content-title text-center">
                  Sensory Weave Practical Videos
                </Typography>
                <Typography className="tab-content-subtitle text-center max-w-700">
                  Short, practical videos designed to help you better understand regulation, communication, behavior, and learning through the Sensory Weave framework. Because meaningful progress begins with understanding.
                </Typography>

                <Grid container spacing={3} className="videos-grid">
                  {[
                    { title: "Understanding Sensory Regulation", desc: "An overview of how vestibular, proprioceptive, and tactile regulation unlocks academic readiness." },
                    { title: "OT, Speech & Behavior Connection", desc: "How integrating different therapies produces developmental progress faster than separate sessions." },
                    { title: "Sensory Yoga and Bedtime Calm", desc: "Simple breathing exercises and sleep routine shifts to help soothe a child's hyperactive system." },
                    { title: "Gut Health & Nutritional Planning", desc: "Addressing oral food aversions and picky eating textures to nourish brain pathways." }
                  ].map((video, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Card className="video-card">
                        <Box className="video-thumbnail-placeholder">
                          <PlayCircleOutlineIcon className="play-icon" />
                          <div className="play-overlay"></div>
                          <span className="video-length">4:15</span>
                        </Box>
                        <CardContent>
                          <Typography variant="h4" className="video-title">{video.title}</Typography>
                          <Typography className="video-desc">{video.desc}</Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* TAB 2: Downloads */}
            {activeTab === 2 && (
              <Box className="tab-downloads-view">
                <Typography variant="h3" className="tab-content-title text-center">
                  Developmental roadmaps & booklets
                </Typography>
                <Typography className="tab-content-subtitle text-center">
                  Take the details of Sensory Weave home to explore in detail.
                </Typography>

                <Grid container spacing={3} className="downloads-grid">
                  {/* Item 1 */}
                  <Grid item xs={12} sm={6}>
                    <Card className="download-card">
                      <CardContent>
                        <Typography variant="h4" className="download-title">Developmental Roadmap</Typography>
                        <Typography className="download-desc">
                          Download the Sensory Weave Developmental Roadmap. A simple guide to help you understand your child’s developmental journey — from regulation and connection to learning and independence. Discover the foundations behind meaningful, long-term progress.
                        </Typography>
                        <Button
                          variant="contained"
                          startIcon={<GetAppIcon />}
                          href="/sensory/pdf/roadmap.pdf"
                          download="roadmap.pdf"
                          className="download-btn"
                        >
                          Download Roadmap PDF
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>

                  {/* Item 2 */}
                  <Grid item xs={12} sm={6}>
                    <Card className="download-card">
                      <CardContent>
                        <Typography variant="h4" className="download-title">Sensory Weave Booklet</Typography>
                        <Typography className="download-desc">
                          An introductory guide to understanding autism, ADHD, speech delays, and the foundations behind meaningful developmental progress. Explore how Sensory Weave connects regulation, communication, behavior, and learning into one structured journey.
                        </Typography>
                        <Button
                          variant="contained"
                          startIcon={<GetAppIcon />}
                          href="/sensory/pdf/booklet.pdf"
                          download="booklet.pdf"
                          className="download-btn"
                        >
                          Download Booklet PDF
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            )}

          </Box>
        </Container>
      </section>

      {/* CTA Footer Section */}
      <section className="sensory-cta">
        <Container maxWidth="md">
          <Box className="cta-box">
            <Typography variant="h2" className="cta-title">
              Ready to help your child thrive?
            </Typography>
            <Typography className="cta-desc">
              Schedule a comprehensive sensory profiling evaluation and start a tailored developmental journey.
            </Typography>
            <Box className="cta-buttons">
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                href="https://api.whatsapp.com/send?phone=919994927394"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-wa-btn"
              >
                WhatsApp Us
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/")}
                className="cta-home-btn"
              >
                Return to Home
              </Button>
            </Box>
          </Box>
        </Container>
      </section>

    </div>
  );
}
