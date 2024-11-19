import { TextField, Button } from "@mui/material";
import { useState } from "react";
import "../ContactUs/Footer.scss"
import emailjs from 'emailjs-com';

export default function FooterContainer() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_k1cl3n9', // Replace with your EmailJS service ID
            'template_yc3mp1y', // Replace with your EmailJS template ID
            {
                from_name: formData.name,
                from_email: formData.email,
                to_name: "Rihab Rituals",
                message: formData.message,
            },
            '4k87KzehqGdNBQtUJ' // Replace with your EmailJS user ID
        )
            .then(
                (result) => {
                    //console.log(result.text);
                    setSuccessMessage('Mail sent successfully! We will reply to you soon.');
                    setFormData({ name: '', email: '', message: '' }); // Reset form after success
                },
                (error) => {
                    //console.log(error.text);
                    setSuccessMessage('Failed to send email. Please try again.');
                }
            );
    };
    return (<div id='contact' className="footer">
        <div className="footer_flex">
            <div className="footer_div">
                <div className="header_test">
                    <div>
                        <h5>Need Help ?</h5>
                    </div>
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                    <div className="contact">
                        <div className="contact_img">
                            <img src="./footer/social/telephone.png"></img>
                        </div>
                        <div>
                            <a href="tel:9994927394">9994927394</a>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact_img">
                            <img src="./footer/social/mail.png"></img>
                        </div>
                        <div>
                            <a href="mailto:rehabrituals@gmail.com?subject=Need%20Your%20Help%20">rehabrituals@gmail.com</a>
                        </div>
                    </div>
                    <a href="https://api.whatsapp.com/send?phone=919994927394">
                        <div className="contact_whatsapp">
                            <div className="wa_img">
                                <img src="./footer/social/whatsapp_direct.png"></img>
                            </div>
                            <div>
                                <p>WhatsApp</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="footer_aboutus_container">
                    <div className="footer_aboutus">
                        <div>
                            <img src="./footer/logo/day-care-logo.jpg"></img>
                        </div>
                        <div>
                            <p>
                                We love our customers, so feel free to visit during normal
                                business hours.
                            </p>
                        </div>
                        <div className="socia_icons">
                            <a href="https://www.instagram.com/rehabrituals/?utm_source=qr&igsh=Ymc2ZHV3NTdvYzFl">
                                <img src="./footer/social/instagram.png"></img>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=919994927394">
                                <img src="./footer/social/whatsapp.png"></img>
                            </a>
                            <a href="mailto:rehabrituals@gmail.com?subject=Need%20Your%20Help%20">
                                <img src="./footer/social/mail.png"></img>
                            </a>
                            <a href="https://www.facebook.com/share/ZMa6ebpHS45oSxoX/?mibextid=qi2Omg">
                                <img src="./footer/social/facebook.png" style={{ padding: "0px" }}></img>
                            </a>
                        </div>
                    </div>
                    <div className="working_hours">
                        <h4>Working Hours</h4>
                        <div>
                            <p>Monday to Saturday</p>
                            <p>09:30 AM - 08:00 PM</p>
                        </div>
                    </div>
                    <div className="address">
                        <div className="address_flex">
                            <div>
                                <h4>Address </h4>
                            </div>
                        </div>

                        <div className="map-container">
                            <a href="https://www.google.co.in/maps/place/Rehab+Rituals/@13.0230995,80.2026027,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5267f414488e01:0x4ff1a5bfcdea4c38!8m2!3d13.0230995!4d80.2051776!16s%2Fg%2F11j91h9zdy?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                            ><img src="./footer/map/map.png" className="map-image" alt="Map" /></a>
                            <p>
                                19-10,
                                <br />
                                Balaji Nagar 1st Main Rd,
                                <br />
                                Defence Colony,
                                <br />
                                Ekkatuthangal,
                                <br />
                                Chennai,
                                <br />
                                Tamil Nadu, India.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer_container_right">
                    <div className="message_header">
                        <p>Your Feedback</p>
                    </div>
                    <div className="message_box_conrtainer">
                        <form onSubmit={sendEmail}>
                            <div className="textfield_div">
                                <div>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <TextField
                                        fullWidth
                                        label="Mail ID"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <TextField
                                        fullWidth
                                        id="outlined-multiline-static"
                                        label="Message"
                                        name="message"
                                        multiline
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Button fullWidth variant="outlined" type="submit">
                                        SEND
                                    </Button>
                                </div>
                                <div>{successMessage && <p>{successMessage}</p>}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer_social">
                <p>Copyright © 2024 Rehab Rituals - All Rights Reserved.</p>
            </div>
        </div>
    </div>)
}
