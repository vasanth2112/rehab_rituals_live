import React from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import HubIcon from "@mui/icons-material/Hub";
import { useNavigate } from "react-router-dom";
import useScrollReveal from "../../useScrollReveal.js";
import "./SensoryHighlight.scss";

export default function SensoryHighlight() {
  useScrollReveal();
  const navigate = useNavigate();

  return (
    <section className="sensory-highlight-section">
      <Container maxWidth="lg">
        <Box className="sensory-highlight-card reveal reveal-scale">
          <Grid container spacing={4} alignItems="center">
            {/* Left Column: Heading & Introduction */}
            <Grid item xs={12} md={6} className="text-col">
              <span className="badge">Flagship Methodology</span>
              <Typography variant="h2" className="highlight-title">
                The <span>Sensory Weave</span> Framework
              </Typography>
              <Typography className="highlight-tagline">
                Are they doing multiple therapies, but still struggling with slow progress?
              </Typography>
              <Typography className="highlight-description">
                Our flagship program brings together the brain, body, behavior, and communication into one meaningful developmental journey. Rather than separate, isolated therapy sessions, we weave them into a unified approach designed for children with autism, ADHD, and speech delays.
              </Typography>
              
              <Box className="btn-wrapper">
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => navigate("/sensory")}
                  className="explore-btn"
                >
                  Explore Sensory Weave
                </Button>
              </Box>
            </Grid>

            {/* Right Column: Three Interactive Pillars Grid */}
            <Grid item xs={12} md={6}>
              <Box className="pillars-grid">
                
                {/* Pillar 1 */}
                <Box 
                  className="pillar-card reveal reveal-right reveal-delay-1"
                  onClick={() => navigate("/sensory")}
                >
                  <div className="icon-wrapper bg-regulation">
                    <OfflineBoltIcon />
                  </div>
                  <div className="pillar-info">
                    <Typography variant="h3" className="pillar-name">1. Sensory Regulation</Typography>
                    <Typography className="pillar-desc">
                      Building nervous system safety, calm states, and sensory organization before learning.
                    </Typography>
                  </div>
                </Box>

                {/* Pillar 2 */}
                <Box 
                  className="pillar-card reveal reveal-right reveal-delay-2"
                  onClick={() => navigate("/sensory")}
                >
                  <div className="icon-wrapper bg-engagement">
                    <RecordVoiceOverIcon />
                  </div>
                  <div className="pillar-info">
                    <Typography variant="h3" className="pillar-name">2. Social Connection</Typography>
                    <Typography className="pillar-desc">
                      Fostering active engagement, shared attention, and communication loops.
                    </Typography>
                  </div>
                </Box>

                {/* Pillar 3 */}
                <Box 
                  className="pillar-card reveal reveal-right reveal-delay-3"
                  onClick={() => navigate("/sensory")}
                >
                  <div className="icon-wrapper bg-integration">
                    <HubIcon />
                  </div>
                  <div className="pillar-info">
                    <Typography variant="h3" className="pillar-name">3. Goal Integration</Typography>
                    <Typography className="pillar-desc">
                      Aligning speech, behavior, and motor exercises under one single outcome.
                    </Typography>
                  </div>
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
