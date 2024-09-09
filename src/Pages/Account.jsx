import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import "../Styles/account.css";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Account() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  const [activeMenu, setActiveMenu] = useState("Addresses");

  const handleMenuClick = (data) => {
    setActiveMenu(data);
  };
  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="My Account"
        image="/images/earrings-bg.png"
        para="Explore our exquisite hoop earrings, climbers and
fashion earrings to find your perfect pair."
      />
      <div className="page-nav container px-0">
        <p>Home</p>
        <FaAngleRight />
        <p>My account</p>
      </div>

      <div className="container px-0 py-5">
        <div className=" my__account--section__inner border-radius-10 d-flex">
          <div className="account__left--sidebar">
            <h2 className="account__content--title h3 mb-20">My Profile</h2>
            <ul className="account__menu">
              <li className="account__menu--list">
                <a
                  href="dashboard"
                  onClick={() => handleMenuClick("Dashboard")}
                  className={activeMenu === "Dashboard" ? "active" : ""}
                >
                  My Orders
                </a>
              </li>
              <li className="account__menu--list">
                <a
                  href="profile"
                  onClick={() => handleMenuClick("Profile")}
                  className={activeMenu === "Profile" ? "active" : ""}
                >
                  My Profile
                </a>
              </li>
              <li className="account__menu--list">
                <a
                  href="my-account"
                  onClick={() => handleMenuClick("Addresses")}
                  className={activeMenu === "Addresses" ? "active" : ""}
                >
                  Addresses
                </a>
              </li>
              <li className="account__menu--list">
                <a
                  href="wishlist"

                >
                  Wishlist
                </a>
              </li>
              <li className="account__menu--list">
                Log Out
              </li>
            </ul>
          </div>
          <div className="account__wrapper">
            <div className="account__content">


              <div className="adreress-right dashboard">
                <h2 className="account__content--title h3 mb-20">Addresses</h2>
                <button className="new__address--btn primary__btn mb-25" type="button" onClick={openPopup}>
                  Add a new address
                </button>
                <div className="d-flex justify-content-between align-iteam-center adreress-right-heading">
                  <h6>Home</h6>
                </div>
                <div className="row pb-md-0 pb-2">
                  <div className="col-md-12 col-lg-6">
                    <div className="add-right-check-box">
                      <div className="right-address-border">
                        <div className="form-check">
                          <input
                            className="form-check-input formcheckinput-right"
                            type="radio"
                            name="DelvieryAddress"
                            id="DelvieryAddress1"
                          />
                          <div className="ms-3 address-right-iteam">
                            <div>
                              <span>Vishal Bhardwaj</span>
                              <span> (Home)</span>
                            </div>
                            <div>
                              <span>+91</span>
                              <span>8888888888</span>
                            </div>
                            <div>
                              <span>Ballabgarh </span>
                              <span>Faridabad </span>
                              <span>Haryana </span>
                            </div>
                            <div>
                              <span>Pin Code: </span>
                              <span>121004</span>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/* Repeat the above block for each address */}
                    </div>
                  </div>
                </div>
                <a className="account__details--link" href="">
                  View Addresses (1)
                </a>

                <div className="account__details--footer d-flex mt-3">
                  <button className="account__details--footer__btn" type="button">
                    Edit
                  </button>
                  <button className="account__details--footer__btn" type="button">
                    Delete
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <Footer />
      {isPopupOpen ? (
        <div className="popup">
          <div className="popup-content">
            <button className="close-popup" onClick={closePopup}>
              <IoClose />
            </button>
            <section className="col-sm-12 profile-right" id="prfolie-right-5">
              <div className="row">
                <div className="col-md-12" id="profileid"></div>
                <div className="col-md-12">
                  <h5>
                    Add Address <i className="fa-solid fa-plus-circle" />
                  </h5>

                  <div>
                    <form>
                      <div className="input-div-profile">
                        <label htmlFor="Name">Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className=""
                          id="name"
                          name="name"
                        />
                      </div>
                      <div className="profile-mobile-field">
                        <h6 htmlFor="phone">Mobile Number</h6>
                        <div className="row d-flex align-items-center">
                          <div className="col-md-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected="">+91</option>
                            </select>
                          </div>
                          <div className="input-div-profile col-md-9">
                            <input
                              type="number"
                              placeholder="+91 888888888"
                              className=""
                              id="phone"
                              name="mobile"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-div-profile m-0 p-0">
                        <label htmlFor="Street">Street</label>
                        <input
                          type="text"
                          placeholder="Street"
                          name="street"
                          className=""
                          id="Street"
                        />
                      </div>
                      <div className="input-div-profile">
                        <label htmlFor="Landmark">Landmark</label>
                        <input
                          type="text"
                          placeholder="Landmark"
                          className=""
                          id="Landmark"
                          name="landmark"
                        />
                      </div>
                      <div className="d-flex m-0 p-0">
                        <div className="input-div-profile w-50 m-0 p-0">
                          <label htmlFor="State">State</label>
                          <input
                            type="text"
                            placeholder="State"
                            className=""
                            id="State"
                            name="state"
                          />
                        </div>
                        <div className="input-div-profile w-50 mx-1 m-0 p-0">
                          <label htmlFor="City">City</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name="city"
                          >
                            <option selected="">City</option>
                          </select>
                        </div>
                      </div>
                      <div className="input-div-profile">
                        <label htmlFor="Code">Pin Code</label>
                        <input
                          type="number"
                          placeholder="Pin Code"
                          className=""
                          id="Code"
                          name="code"
                        />
                      </div>
                      <div className="profile-address-radio-buttons">
                        <h6 htmlFor="Address">Address Type</h6>
                        <div className="d-flex">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Home
                            </label>
                          </div>
                          <div className="form-check mx-5">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Office
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn text-white d-flex justify-content-center align-items-center w-100 save-detalis"
                      >
                        ADD ADDRESS
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Account;
