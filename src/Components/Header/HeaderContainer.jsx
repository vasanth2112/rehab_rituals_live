import "../Header/Header.scss";
import { useState,useRef,useEffect } from "react";
import background_video from "../../assets/videos/baby_walk.webm";
import loader from "../../../public/loader.json";
import Lottie from "lottie-web";

export default function HeaderContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

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
    <div id="home" className="header-container">
      {!isVideoLoaded && (
       <div ref={loaderAnimation} className="loader"></div> // Replace with your loader design
      )}
      <video autoPlay loop muted onCanPlayThrough={handleVideoLoad}>
        <source src={background_video} type="video/webm" />
      </video>

      {isVideoLoaded && (
        <>
          <div className="header-grid">
            <div className="nav-slide">
              <div className="nav-bar">
                <a href="#home">Home</a>
                <a href="#aboutUs">About Us</a>
                <a href="#ourTeam">Our Team</a>
                <a href="#service">Services</a>
                <a href="#contact">Contact</a>
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
                          <a href="#home">Home</a>
                        </div>
                      </div>
                      <div className="menu_img">
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
                      </div>
                      <div className="menu_img">
                        <div>
                          <img src="./header/menu/contact.png" alt="Contact" />
                        </div>
                        <div>
                          <a href="#contact" style={{ paddingBottom: "5px" }}>
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <header className="viewport-header">
            <div className="transparent_div">
              <div className="flex_header">
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
                <p>Pioneering Research Driven Therapy</p>
              </div>
            </div>
            <div className="bottom_content">
              <span>
                SPECIALITY CLINIC FOR AUTISM ADHD & OTHER EXCEPTIONALITIES.
              </span>
            </div>
          </header>
        </>
      )}
    </div>
  );
}
