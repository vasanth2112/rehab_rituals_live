import "../Header/Header.scss";
import { useState, useRef, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import background_video from "../../assets/videos/baby.webm";
import loader from "../../../public/loader.json";
import Lottie from "lottie-web";
// import { HighQuality } from "@mui/icons-material";
import { CARDS_BRAIN } from "../../ListConstants.js";
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';

export default function HeaderContainer() {
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
        <div ref={loaderAnimation} className="loader"></div> // Replace with your loader design
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
                    {/* <a href="#aboutUs">About Us</a> */}
                    {/* <a href="#ourTeam">Our Team</a> */}
                    {/* <a href="#service">Services</a> */}
                    <Link to="/sensory">Sensory</Link>
                    <a href="/#blogs">Blogs</a>
                    <a href="/#gallery">Gallery</a>
                    <a href="/#contact">Contact</a>
                    <Button
                      variant="contained"
                      endIcon={<BookIcon />}
                      component="a"
                      href="https://api.whatsapp.com/send?phone=919994927394&text=I%20would%20like%20to%20book%20an%20appointment%20with%20Rehab%20Rituals."
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        fontFamily: '"Josefin Sans", sans-serif',
                       // backgroundColor: "#61dafbea",
                        backgroundColor: "#fff",
                        color: "#004aad",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "#61dafb",
                          color: "#fff",
                        },
                      }}
                    >
                      Book Appointment
                    </Button>
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
                        {/* <div className="menu_img">
                          <div>
                            <img src="./header/menu/information.png" alt="About Us" />
                          </div>
                          <div>
                            <a href="#aboutUs">About Us</a>
                          </div>
                        </div>
                        <div className="menu_img">
                          <div>
                            <img src="./header/menu/group.png" alt="Our Team" />
                          </div>
                          <div>
                            <a href="#ourTeam">Our Team</a>
                          </div>
                        </div>
                        <div className="menu_img">
                          <div>
                            <img src="./header/menu/service.png" alt="Services" />
                          </div>
                          <div>
                            <a href="#service">Services</a>
                          </div>
                        </div> */}
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
                              color: "#fff",
                              textTransform: "none",
                              fontSize: "0.85rem",
                              "&:hover": {
                                backgroundColor: "#61dafb",
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

          {/* <header className="viewport-header">
           <div className="transparent_div">
              {/*  <div className="flex_header">
                <div className="top_header">
                  <h1>Rehab</h1>
                </div>
                <div>
                  <img
                    src="./header/back_logo.png"
                    className="back_logo"
                    alt="logo"
                  />
                </div>
                <div className="bottom_header">
                  <h1>Rituals</h1>
                </div>
              </div>
              <div>
                <p>Pioneering Holistic Research Driven Therapy</p>
              </div>
              <div><h1>Doing OT, speech, and behavior therapy… but still wondering why progress feels slow?</h1>
              <p>Your child’s brain thrives on</p></div>
            </div>
             <div className="bottom_content">
              <span>
                SPECIALITY CLINIC FOR AUTISM ADHD & OTHER EXCEPTIONALITIES.
              </span>
            </div>
          </header> */}

          {/* <div className="new_header_container">
            <div className=""><div><h1>Helping Your Child Thrive, Every Step of the way</h1></div>
            <div><p></p></div>
            <p></p></div>
            <div className=""></div>
          </div> */}

          {isHomePage && (
            <div className="header-2">
              <div className="header_content-2">
                <div className="heading-para">
                  <div>
                    <h1>
                      Doing <span>OT, Speech, and Behavior</span> therapy...
                      but still wondering why progress feels slow?
                    </h1>
                  </div>
                  {/* <div className="Doing_ot">
                    <p>
                      Doing OT, speech, and behavior therapy...
                      but still wondering why progress feels slow?
                    </p>
                  </div> */}

                  <div className="brain-section">
                    <div>
                      <h2>
                        Your child’s brain <span>thrives</span> on
                      </h2>
                    </div>
                    <div className="brain-grid">
                      {CARDS_BRAIN.map((card, index) => (
                        <div className="brain-card" key={index}>
                          <div className="brain-card-icon">
                            <img src={card.icon} alt={card.title} />
                          </div>
                          <div>
                            <p>{card.title}</p>
                          </div>
                          <div className="select-icon">
                            <img src="./header/icon/check-mark.png" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="foundation">
                    <div className="light-buld"><img src="./header/icon/lightbulb.png" /></div>
                    <div>
                      {/* <h2>Sensory Weave Framework</h2> */}
                      <p>
                        <span>Sensory Weave Framework - </span>Our flagship program that brings together the
                        brain, body, behavior, and communication
                        into one meaningful developmental journey.
                      </p>
                    </div>
                  </div>
                  <div className="content_contact">
                    <p>
                      Stop focusing only on therapy—focus on the foundations behind progress
                    </p>
                  </div>
                  {/* GRID 5 */}
                  <div className="book" style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap: "nowrap", gap: "15px" }}>
                    <a href="https://api.whatsapp.com/send?phone=919994927394" style={{ textDecoration: 'none' }}>
                      <div className="contact_whatsapp" style={{ margin: 0 }}>
                        <div className="wa_img">
                          <img src="./footer/social/whatsapp_direct.png"></img>
                        </div>
                        <div>
                          <p style={{ margin: 0, whiteSpace: "nowrap" }}>WhatsApp</p>
                        </div>
                      </div>
                    </a>

                    {/* GRID 6 */}
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
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>

                {/* GRID 7 */}
                <div className="side-image">
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
      )
      }
    </div >
  );
}
