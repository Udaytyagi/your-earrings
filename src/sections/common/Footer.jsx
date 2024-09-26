import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "../../Styles/footer.css";
import { newsLetterApi } from "../../apis/mainApis/footer/footerApis";

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleNewsLetter = async (e) => {
    e.preventDefault()
    const data = {
      email: email
    }
    await newsLetterApi(data, setEmail)
  }

  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="footer-logo">
                <a href="/">
                  <img
                    className="img-fluid"
                    src="/images/logo-footer.png"
                    alt=""
                  />
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus voluptates hic pariatur accusantium voluptatum.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-info">
                <h4>Company Info</h4>

                <ul className="usefull-info">
                  <li onClick={() => {
                    window.open("/about-us", "_blank");
                  }}>
                    About Us
                  </li>
                  <li onClick={() => {
                    window.open("/return-policy", "_blank");
                  }}>
                    Return Policy
                  </li>
                  <li onClick={() => {
                    window.open("/contact-us", "_blank");
                  }}>
                    Contact Us
                  </li>
                  <li>
                    Payment Options
                  </li>
                  <li>
                    Track your Order
                  </li>
                  <li>
                    Returns
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-info">
                <h4>Member Account</h4>

                <ul className="usefull-info">
                  <li>
                    Delivery Information
                  </li>
                  <li>
                    International Shipping
                  </li>
                  <li>
                    Payment Options
                  </li>
                  <li>
                    Track your Order
                  </li>
                  <li>
                    Returns
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-info">
                <h4>Useful Links</h4>

                <ul className="usefull-info">
                  <li>
                    Delivery Information
                  </li>
                  <li>
                    International Shipping
                  </li>
                  <li>
                    Payment Options
                  </li>
                  <li>
                    Track your Order
                  </li>
                  <li>
                    Returns
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-newsletter">
                <h4>join Our Email List</h4>

                <div className="email-subs-form">
                  <form onSubmit={handleNewsLetter}>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      name="emails"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      name="submit"
                      className="lnk btn-main bg-btn"
                    >
                      JOIN NOW
                    </button>
                  </form>
                </div>

                <h5>Join Us</h5>

                <div className="social-share">
                  <a href="#"><FaFacebookF /></a>

                  <a href="#"><FaLinkedinIn /></a>

                  <a href="#"><FaInstagram /></a>
                </div>

              </div>
            </div>
          </div>

          <div className="row copybar py-2">
            <div className="col-md-6 d-flex">
              <div className="footer-copyright">
                <p>Copyright © 2024 Your Earrings. All Rights Reserved.</p>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="footer-copyright">
                <img
                  className="img-fluid"
                  src="/images/payment-method.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
