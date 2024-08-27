import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";

import '../Styles/breadcrumb.css'
import '../Styles/about.css'

import { FaHeadphones } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import Breadcrumb from '../sections/common/Breadcrumb';

const Contact = () => {
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
                           <span> <FaHeadphones /></span>
                                <h4>Call Us</h4>

                                <p> <a href="#">+91-9999999999</a></p>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-box text-center">
                           <span> <FaEnvelopeOpen /></span>
                                <h4>Mail Us</h4>

                                <p><a href="#">info@yourearrings.com</a></p>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-box text-center">
                           <span> <FaMapMarkerAlt /></span>
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
                              <div class="contact_message form">
                             
                              <form id="contact-form" method="POST" action="#">
                                  <p>  
                                    <label> Your Name (required)</label>
                                      <input name="name" placeholder="Name *" type="text" /> 
                                  </p>
                                  <p>       
                                    <label>  Your Email (required)</label>
                                      <input name="email" placeholder="Email *" type="email" />
                                  </p>
                                  <p>          
                                    <label>  Subject</label>
                                      <input name="subject" placeholder="Subject *" type="text" />
                                  </p>    
                                  <div class="contact_textarea">
                                      <label>  Your Message</label>
                                      <textarea placeholder="Message *" name="message" class="form-control2"></textarea>     
                                  </div>   
                                  <button type="submit"> Send</button>  
                                  <p class="form-messege"></p>
                              </form> 

                          </div>
                        </div>

                        <div className="col-md-6">
                            <div class="row">
                               <div className="getintouch-map d-flex justify-content-center">
                               
                               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23636933.18422941!2d-20.123043607120856!3d43.68211601401104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sin!4v1723115314604!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                               </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


           


       











            <Footer />
        </>
    )
}

export default Contact