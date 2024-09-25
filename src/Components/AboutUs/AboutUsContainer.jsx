import "../AboutUs/AboutUs.scss";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import butterfly from "../../../public/aboutus/butterfly.json";

export default function AboutUsContainer() {
  const butterflyAnimation1 = useRef(null);
  const butterflyAnimation2 = useRef(null);

  useEffect(() => {
    const butterfly1 = lottie.loadAnimation({
      container: butterflyAnimation1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: butterfly,
    });

    const butterfly2 = lottie.loadAnimation({
      container: butterflyAnimation2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: butterfly,
    });

    butterfly2.setSpeed(0.8);
    return () => {
      butterfly1.destroy();
      butterfly2.destroy();
    };
  }, []);

  return (
    <div id="aboutUs" className="aboutus">
      <div ref={butterflyAnimation1} className="anim"></div>
      <div className="about_container">
        <div className="aboutus_flex">
          <div className="image_about">
            <div className="photo-style">
              <div style={{ paddingBottom: "40px" }}>
                <img src="./aboutus/welcome.webp"></img>
              </div>
            </div>
          </div>
          <div className="about_content">
            <h2>Welcome to Rehab Rituals</h2>
            <p>
              Rehab Rituals is a private healthcare clinic, established since
              2022. The clinic houses different streams of professionals
              striving on the developmental needs and challenges of the child.
              Rehab Rituals was started with a vision to create a holistic
              developmental opportunities for every child.{" "}
            </p>
            <h2>Our Philosophy</h2>
            <p>
              Rehab Rituals was started with a vision to create a holistic
              developmental opportunities for every child. We constantly
              endeavor, bridging the gap between research and practice to ensure
              the best outcomes in the children with developmental needs
            </p>
          </div>
        </div>
      </div>
      <div ref={butterflyAnimation2} className="anime"></div>
      <div className="about_container">
        <div className="aboutus_flex_reverse">
          <div className="image_about">
            <div className="photo-style">
              <img src="./aboutus/knowme.webp"></img>

              <p>Vinodhini C</p>
            </div>
          </div>
          <div className="about_content_reverse">
            <h2>Know me</h2>
            <p>
              Warm greetings, from my side of the desk. <b>I’m Vinodhini C</b>,{" "}
              <span>Lead Occupational Therapist</span> and Owner of Rehab
              Rituals. I have completed my Master’s in Occupational Therapy in
              the Specialty of Neurosciences. I own certifications for various
              other adjunct modalities like yoga and therapeutic listening. My
              passion for Neurology, the amazement towards the complexity of the
              brain and the connecting dots between knowing to doing had lead to
              discovering effective methods of interventions. In our striving
              effort to help our little brains excel, we are onwards in
              extending our services to all children in need, to offer our
              helping hands in uplifting them from their developmental gaps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
