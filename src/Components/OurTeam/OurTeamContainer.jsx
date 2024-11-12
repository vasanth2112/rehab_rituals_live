import {OUR_TEAM } from "../../ListConstants.js";
import "../OurTeam/OurTeam.scss"

export default function OurTeamContainer() {
    return (<div id='ourTeam' className="our_team_container">
        <div className="our_team">
            <div className="our_team_header">
                <h1>Our Team and Facilities</h1>
                <p>
                    "Our team at Rehab Rituals consists of highly trained medical
                    professionals who are dedicated to helping our patients achieve
                    optimal health. We offer a wide range of services to meet the
                    needs of our community."
                </p>
            </div>

            <div className="our_team_facility">
                <div>
                    <div className="our_team_img">
                        <img src="./aboutus/knowme.jpg"></img>
                        <h4>Vinodhini C</h4>
                        <p>Lead & Occupational Therapist</p>
                    </div>
                </div>
                <div className="our_team_details">
                    <h2>Our Facilities</h2>
                    <p>
                        We take pride in our state-of-the-art facilities at Rehab
                        Rituals. Our clinics are equipped with the latest technology to
                        provide our patients with the best possible care.
                    </p>
                    <h2>Our Set Apart Clinic</h2>
                    <p>
                        We house the most innovative snoezelen multisensory room in the
                        city. Virtual reality system sets apart our sensory room
                        experience to maximize the learning process. We provide research
                        based interventions with the most innovative and holistic
                        methods
                    </p>
                </div>
            </div>
            <div><h2>Meet Our Team</h2></div>
            <div className="our_team_content">

                {OUR_TEAM.map((content, index) => (
                    <div className="our_team_border">
                        <div className="our_team_img">
                            <img src={content.image}></img>
                        </div>
                        <h4>{content.name}</h4>
                        <p>{content.role}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>)
}