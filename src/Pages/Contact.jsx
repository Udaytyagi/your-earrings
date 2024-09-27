import React, { useState } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import '../Styles/breadcrumb.css';
import '../Styles/about.css';
import { FaHeadphones, FaEnvelopeOpen, FaMapMarkerAlt } from "react-icons/fa";
import Breadcrumb from '../sections/common/Breadcrumb';
import { contactUsApi } from "../apis/mainApis/footer/footerApis";
import { Loader } from "../components/Loader";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContactUs = async (e) => {
        e.preventDefault();
        await contactUsApi(formData, setLoading, setFormData);
    };

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb
                heading="Contact Us"
                image="/images/earrings-bg.png"
            />

            <section className="contactus-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-box text-center">
                                <span><FaHeadphones /></span>
                                <h4>Call Us</h4>
                                <p><a href="tel:+919999999999">+91-9999999999</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-box text-center">
                                <span><FaEnvelopeOpen /></span>
                                <h4>Mail Us</h4>
                                <p><a href="mailto:info@yourearrings.com">info@yourearrings.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-box text-center">
                                <span><FaMapMarkerAlt /></span>
                                <h4>Reach Us</h4>
                                <p>Delhi, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="getntouch text-center">
                                <h3>Get In Touch</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact_message form">
                                <form id="contact-form" onSubmit={handleContactUs}>
                                    <p>
                                        <label>Your Name (required)</label>
                                        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name *" type="text" required />
                                    </p>
                                    <p>
                                        <label>Your Email (required)</label>
                                        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email *" type="email" required />
                                    </p>
                                    <p>
                                        <label>Subject</label>
                                        <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject *" type="text" required />
                                    </p>
                                    <div className="contact_textarea">
                                        <label>Your Message</label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message *" className="form-control2" required></textarea>
                                    </div>
                                    <button type="submit" disabled={loading}>
                                        {loading ? <Loader height="22" width="22" color="white" /> : 'Send'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row">
                                <div className="getintouch-map d-flex justify-content-center mt-md-0 mt-3">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23636933.18422941!2d-20.123043607120856!3d43.68211601401104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sin!4v1723115314604!5m2!1sen!2sin"
                                        width="600"
                                        height="450"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
