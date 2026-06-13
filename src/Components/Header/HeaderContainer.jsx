import "../Header/Header.scss";
import { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import background_video from "../../assets/videos/baby.webm";
import loader from "../../../public/loader.json";
import Lottie from "lottie-web";
import { CARDS_BRAIN } from "../../ListConstants.js";
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import useScrollReveal from "../../useScrollReveal.js";

export default function HeaderContainer() {
  useScrollReveal();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(!isHomePage);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const loaderAnimation = useRef(null);

  useEffect(() => {
    const loading = Lottie.loadAnimation({
      container: loaderAnimation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loader,
    });

    return () => {
      loading.destroy();
    };
  }, []);

  return (
    <div id="home" className={`header-container ${!isHomePage ? 'inner-header' : ''}`}>
      {isHomePage && !isVideoLoaded && (
        <div ref={loaderAnimation} className="loader"></div>
      )}
      {isHomePage && (
        <video autoPlay loop muted onCanPlayThrough={handleVideoLoad}>
          <source src={background_video} type="video/webm" />
        </video>
      )}

      {isVideoLoaded && (
        <>
          {isHomePage && (
            <div className="header-grid">
              <div className="nav-slide">
                <div className="nav-bar-container">
                  <div className="logo">
                    <Link to="/">
                      <img src="./header/logo.jpeg" alt="logo" />
                    </Link>
                  </div>
                  <div className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/sensory">Sensory</Link>
                    <a href="/#blogs">Blogs</a>
                    <a href="/#gallery">Gallery</a>
                    <a href="/#contact">Contact</a>
                    <a href="https://api.whatsapp.com/send?phone=919994927394&text=I%20would%20like%20to%20book%20an%20appointment%20with%20Rehab%20Rituals.">
                      <Button
                        //    component="a"
                        //   href="https://api.whatsapp.com/send?phone=919994927394&text=I%20would%20like%20to%20book%20an%20appointment%20with%20Rehab%20Rituals."
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        endIcon={<BookIcon />}
                        sx={{
                          fontFamily: '"Josefin Sans", sans-serif',
                          backgroundColor: "#fff",
                          color: "#004aad !important",
                          textTransform: "none",
                          "& *": {
                            color: "inherit !important",
                          },
                          "&:hover": {
                            backgroundColor: "#61dafb",
                            color: "#fff !important",
                          },
                        }}
                      >
                        Book Appointment
                      </Button></a>
                  </div>
                </div>

                <div className="burger-menu" onClick={toggleMenu}>
                  {!isMenuOpen ? (
                    <div className="burger">
                      <div>
                        <img src="./header/menu/menu.png" alt="Menu" />
                      </div>
                    </div>
                  ) : (
                    <div className="close_btn">
                      <img src="./header/menu/close.png" alt="Close" />

                      <div className={`menu_list ${isMenuOpen ? "animation" : ""}`}>
                        <div className="menu_img">
                          <div>
                            <img src="./header/menu/home.png" alt="Home" />
                          </div>
                          <div>
                            <Link to="/">Home</Link>
                          </div>
                        </div>
                        <div className="menu_img">
                          <div>
                            <img src="./header/icon/brain.png" alt="Sensory" />
                          </div>
                          <div>
                            <Link to="/sensory">Sensory</Link>
                          </div>
                        </div>
                        <div className="menu_img">
                          <div>
                            <img src="./header/menu/blogging.png" alt="Blogs" />
                          </div>
                          <div>
                            <a href="/#blogs" style={{ paddingBottom: "5px" }}>
                              Blogs
                            </a>
                          </div>
                        </div>
                        <div className="menu_img">
                          <div>
                            <img src="./gallery/gallery.png" alt="Gallery" />
                          </div>
                          <div>
                            <a href="/#gallery" style={{ paddingBottom: "5px" }}>
                              Gallery
                            </a>
                          </div>
                        </div>
                        <div className="menu_img">
                          <div>
                            <img src="./header/menu/contact.png" alt="Contact" />
                          </div>
                          <div>
                            <a href="/#contact" style={{ paddingBottom: "5px" }}>
                              Contact
                            </a>
                          </div>
                        </div>
                        <div className="menu_img" style={{ borderBottom: "none", marginTop: "10px", padding: "0 5px" }}>
                          <Button
                            component="a"
                            href="https://api.whatsapp.com/send?phone=919994927394&text=I%20would%20like%20to%20book%20an%20appointment%20with%20Rehab%20Rituals."
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="contained"
                            size="small"
                            fullWidth
                            sx={{
                              fontFamily: '"Josefin Sans", sans-serif',
                              backgroundColor: "#004aad",
                              color: "#fff !important",
                              textTransform: "none",
                              fontSize: "0.85rem",
                              "& *": {
                                color: "#fff !important",
                              },
                              "&:hover": {
                                backgroundColor: "#61dafb",
                                color: "#fff !important",
                              },
                            }}
                          >
                            Book Appointment
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {isHomePage && (
            <div className="header-2">
              <div className="header_content-2">
                <div className="heading-para reveal reveal-left">
                  <div>
                    <h1>
                      Doing <span>OT, Speech, and Behavior</span> therapy...
                      but still wondering why progress feels slow?
                    </h1>
                  </div>

                  <div className="brain-section">
                    <div>
                      <h2>
                        Your child’s brain <span>thrives</span> on
                      </h2>
                    </div>
                    <div className="brain-grid">
                      {CARDS_BRAIN.map((card, index) => (
                        <div className={`brain-card reveal reveal-scale reveal-delay-${index + 1}`} key={index}>
                          <div className="brain-card-icon">
                            <img src={card.icon} alt={card.title} />
                          </div>
                          <div>
                            <p>{card.title}</p>
                          </div>
                          <div className="select-icon">
                            <img src="./header/icon/check-mark.png" alt="checkmark" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="foundation reveal">
                    <div className="light-buld"><img src="./header/icon/lightbulb.png" alt="lightbulb" /></div>
                    <div>
                      <p>
                        <span>Sensory Weave Framework - </span>Our flagship program that brings together the
                        brain, body, behavior, and communication
                        into one meaningful developmental journey.
                      </p>
                    </div>
                  </div>
                  <div className="content_contact reveal">
                    <p>
                      Stop focusing only on therapy—focus on the foundations behind progress
                    </p>
                  </div>
                  <div className="book reveal" style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "nowrap", gap: "15px" }}>
                    <a href="https://api.whatsapp.com/send?phone=919994927394&text=Hello%20Rehab%20Rituals%2C%20I%20would%20like%20to%20connect%20with%20you%20to%20discuss%20therapy%20programs%20for%20my%20child." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <div className="contact_whatsapp" style={{ margin: 0 }}>
                        <div className="wa_img">
                          <img src="./footer/social/whatsapp_direct.png" alt="whatsapp"></img>
                        </div>
                        <div>
                          <p style={{ margin: 0, whiteSpace: "nowrap" }}>WhatsApp</p>
                        </div>
                      </div>
                    </a>

                    <div>
                      <Button
                        variant="outlined"
                        onClick={() => navigate("/sensory")}
                        sx={{
                          fontFamily: '"Josefin Sans", sans-serif',
                          fontWeight: 700,
                          fontSize: "clamp(0.8rem, 1vw, 1rem)",
                          color: "#fff",
                          letterSpacing: "2px",
                          textTransform: "none",
                          borderColor: "#fff",
                          "& .MuiButton-label": {
                            fontFamily: '"Josefin Sans", sans-serif',
                          },
                          "&:hover": {
                            borderColor: "#61dafb",
                            background: "rgba(255,255,255,0.08)",
                          },
                        }}
                      >
                        Sensory Weave
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="side-image reveal reveal-right">
                  <div className="image_card_head">
                    <img
                      src="/header/therapy-child.jpg"
                      alt="therapy"
                    />
                  </div>
                </div>

              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
