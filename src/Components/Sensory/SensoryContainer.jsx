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
import {
  CORE_CONCEPTS,
  CORE_NODES,
  SUPPORTING_NODES,
  PERSPECTIVE_DETAILS,
  PHASES_LIST,
  ROADMAP_STEPS,
  GOAL_COMPARISON,
  DEVELOPMENT_AREAS,
  INTEGRATED_GOAL_EXAMPLE,
  QUIZ_QUESTIONS,
  PHASE_DETAILS,
  PRACTICAL_VIDEOS,
  DOWNLOAD_ITEMS
} from "./SensoryListConstants.js";

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
            {CORE_CONCEPTS.map((concept, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx} className={`reveal reveal-scale reveal-delay-${idx + 1}`}>
                <Card className="concept-card">
                  <CardContent>
                    <div className={`concept-icon-wrap ${concept.colorClass}`}>
                      <CheckCircleOutlineIcon />
                    </div>
                    <Typography variant="h3" className="concept-title">{concept.title}</Typography>
                    <Typography className="concept-desc" dangerouslySetInnerHTML={{ __html: concept.desc }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
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

                  {/* Center Circle: CHILD */}
                  <g className="node-group center-child">
                    <circle cx="300" cy="300" r="50" className="center-node" />
                    <text x="300" y="306" className="center-text" textAnchor="middle">CHILD</text>
                  </g>

                  {/* ================= CORE NODES ================= */}
                  {CORE_NODES.map((node) => {
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

                  {/* ================= SUPPORTING NODES ================= */}
                  {SUPPORTING_NODES.map((node) => {
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

                  {/* Ring Labels Headers */}
                  <text x="300" y="22" className="ring-label-header supporting-header" textAnchor="middle">
                    SUPPORTING PERSPECTIVES
                  </text>
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
            {PHASES_LIST.map((phase) => (
              <Grid item xs={12} sm={6} md={3} key={phase.num} className={`reveal reveal-scale reveal-delay-${phase.num}`}>
                <Card className={`phase-card border-phase-${phase.num}`}>
                  <CardContent>
                    <div className={`phase-number bg-phase-${phase.num}`}>PHASE {phase.num}</div>
                    <Typography variant="h4" className="phase-card-title">{phase.name}</Typography>
                    <Typography className="phase-focus">{phase.focus}</Typography>
                    <div className="phase-notice-box">
                      <p className="notice-label">You may notice:</p>
                      <ul className="notice-list">
                        {phase.symptoms.map((symptom, sIdx) => (
                          <li key={sIdx}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
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
              {ROADMAP_STEPS.map((stepObj) => (
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
                    {GOAL_COMPARISON.traditional.title}
                  </Typography>
                  <Typography className="comparison-lead">
                    {GOAL_COMPARISON.traditional.lead}
                  </Typography>
                  <ul className="comparison-list traditional-list">
                    {GOAL_COMPARISON.traditional.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                  <Box className="comparison-result bg-traditional-light">
                    <p>{GOAL_COMPARISON.traditional.result}</p>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6} className="reveal reveal-right">
              <Card className="comparison-card integrated-border">
                <CardContent>
                  <Typography variant="h3" className="comparison-title integrated-color">
                    {GOAL_COMPARISON.integrated.title}
                  </Typography>
                  <Typography className="comparison-lead">
                    {GOAL_COMPARISON.integrated.lead}
                  </Typography>
                  <ul className="comparison-list integrated-list">
                    {GOAL_COMPARISON.integrated.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                  <Box className="comparison-result bg-integrated-light">
                    <p><strong>{GOAL_COMPARISON.integrated.result}</strong></p>
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
              {DEVELOPMENT_AREAS.map((area, aIdx) => (
                <div className="area-pill" key={aIdx}>{area}</div>
              ))}
            </div>
          </Box>

          {/* Same Goal But Different Approach Diagram */}
          <Box className="same-goal-diagram-container">
            <Typography variant="h3" className="diagram-title text-center">
              {INTEGRATED_GOAL_EXAMPLE.title}
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
                      {INTEGRATED_GOAL_EXAMPLE.title}
                    </Typography>
                  </div>
                </Grid>

                {/* Branches / Connectors */}
                <Grid item xs={12} md={7} className="branches-col">
                  {INTEGRATED_GOAL_EXAMPLE.branches.map((branch, bIdx) => (
                    <div className="branch-card" key={bIdx}>
                      <div className={`branch-header ${branch.colorClass}`}>{branch.header}</div>
                      <div className="branch-body">
                        <ul>
                          {branch.bullets.map((bullet, blIdx) => (
                            <li key={blIdx}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
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
                  {PRACTICAL_VIDEOS.map((video, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Card className="video-card">
                        <Box className="video-thumbnail-placeholder">
                          <PlayCircleOutlineIcon className="play-icon" />
                          <div className="play-overlay"></div>
                          <span className="video-length">{video.length}</span>
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
                  {DOWNLOAD_ITEMS.map((item, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Card className="download-card">
                        <CardContent>
                          <Typography variant="h4" className="download-title">{item.title}</Typography>
                          <Typography className="download-desc">
                            {item.desc}
                          </Typography>
                          <Button
                            variant="contained"
                            startIcon={<GetAppIcon />}
                            href={item.href}
                            download={item.download}
                            className="download-btn"
                          >
                            Download {item.title} PDF
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
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
                component="a"
                variant="contained"
                startIcon={<WhatsAppIcon />}
                href="https://api.whatsapp.com/send?phone=919994927394&text=Hello%20Rehab%20Rituals%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Sensory%20Weave%20program."
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
