import { useState } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import "../Styles/Checkout.css";


function Checkout() {
  const carts = useSelector(state => state?.cart?.data?.Cart_info);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="Checkout"
        image="/images/earrings-bg.png"
      />

      <div className="checkout__page--area section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 main checkout__mian">

              <div className="adreress-right dashboard" style={{ borderLeft: "0px" }}>
                <h2 className="account__content--title h3 mb-20">Addresses</h2>
                <button className="new__address--btn primary__btn mb-25" type="button" onClick={openPopup}>
                  Add a new address
                </button>
                <div className="d-flex justify-content-between align-iteam-center adreress-right-heading">
                </div>
                <div className="row pb-md-0 pb-2">
                  <div className="col-md-12 col-lg-6">
                    <div className="add-right-check-box">
                      {
                        carts && carts?.shipping_details?.map((ship, i) => (
                          <div className="right-address-border" key={i}>
                            <div className="form-check">
                              <input
                                className="form-check-input formcheckinput-right"
                                type="radio"
                                name="DelvieryAddress"
                                id="DelvieryAddress1"
                              />
                              <div className="ms-3 address-right-iteam">
                                <div>
                                  <span>{ship.name}</span>
                                  <span>{ship.address_type === 1 ? "(Home)" : ship.address_type === 2 ? "(Office)" : "(Other)"}</span>
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
                        ))
                      }
                      {/* Repeat the above block for each address */}
                    </div>
                  </div>
                </div>
                {/* <a className="account__details--link" href="">
                            View Addresses (1)
                        </a> */}

                <div className="account__details--footer d-flex mt-3">
                  <button className="account__details--footer__btn" type="button">
                    Edit
                  </button>
                  <button className="account__details--footer__btn" type="button">
                    Delete
                  </button>
                </div>
              </div>
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
              {/* <form action="#">
                  <div className="checkout__content--step section__contact--information">
                    <div className="checkout__section--header d-flex align-items-center justify-content-between pb-4 mb-25 flex-column flex-lg-row">
                      <h2 className="checkout__header--title p-0 h3">
                        Contact information
                      </h2>
                      <p className="layout__flex--item">
                        Already have an account?
                        <a className="layout__flex--item__link" href="login">
                          Log in
                        </a>
                      </p>
                    </div>
                    <div className="customer__information">
                      <div className="checkout__email--phone mb-12">
                        <label>
                          <input
                            className="checkout__input--field border-radius-5"
                            placeholder="Email or mobile phone mumber"
                            type="text"
                          />
                        </label>
                      </div>
                      <div className="checkout__checkbox">
                        <input
                          className="checkout__checkbox--input"
                          id="check1"
                          type="checkbox"
                        />

                        <label className="checkout__checkbox--label" htmlFor="check1">
                          Email me with news and offers
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="checkout__content--step section__shipping--address">
                    <div className="checkout__section--header mb-25">
                      <h2 className="checkout__header--title h3">Billing Details</h2>
                    </div>
                    <div className="section__shipping--address__content">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                          <div className="checkout__input--list ">
                            <label
                              className="checkout__input--label mb-10"
                              htmlFor="input1"
                            >
                              Fist Name{" "}
                              <span className="checkout__input--label__star">*</span>
                            </label>
                            <input
                              className="checkout__input--field border-radius-5"
                              placeholder="First name (optional)"
                              id="input1"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                          <div className="checkout__input--list">
                            <label
                              className="checkout__input--label mb-10"
                              htmlFor="input2"
                            >
                              Last Name{" "}
                              <span className="checkout__input--label__star">*</span>
                            </label>
                            <input
                              className="checkout__input--field border-radius-5"
                              placeholder="Last name"
                              id="input2"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <label
                              className="checkout__input--label mb-10"
                              htmlFor="input3"
                            >
                              Company Name{" "}
                              <span className="checkout__input--label__star">*</span>
                            </label>
                            <input
                              className="checkout__input--field border-radius-5"
                              placeholder="Company (optional)"
                              id="input3"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <label
                              className="checkout__input--label mb-10"
                              htmlFor="input4"
                            >
                              Address{" "}
                              <span className="checkout__input--label__star">*</span>
                            </label>
                            <input
                              className="checkout__input--field border-radius-5"
                              placeholder="Address1"
                              id="input4"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <input
                              className="checkout__input--field border-radius-5"
                              placeholder="Apartment, suite, etc. (optional)"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-12 mb-20">
                          <div className="checkout__input--list">
                            <label
                              className="checkout__input--label mb-10"
                              htmlFor="input5"
                            >
                              Town/City{" "}
                              <span className="checkout__input--label__star">*</span>
                            </label>
                            <input
                              className="checkout__input--field border-radius-5"
                              placeholder="City"
                              id="input5"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 mb-20">
                          <div className="checkout__input--list">
                            <label
                              className="checkout__input--label mb-10"
                              htmlFor="country"
                            >
                              Country/region{" "}
                              <span className="checkout__input--label__star">*</span>
                            </label>
                            <div className="checkout__input--select select">
                              <select
                                className="checkout__input--select__field border-radius-5"
                                id="country"
                              >
                                <option value={1}>India</option>
                                <option value={2}>United States</option>
                                <option value={3}>Netherlands</option>
                                <option value={4}>Afghanistan</option>
                                <option value={5}>Islands</option>
                                <option value={6}>Albania</option>
                                <option value={7}>Antigua Barbuda</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-20">
                          <div className="checkout__input--list">
                            <label
                              className="checkout__input--label mb-10"
                              htmlFor="input6"
                            >
                              Postal Code{" "}
                              <span className="checkout__input--label__star">*</span>
                            </label>
                            <input
                              className="checkout__input--field border-radius-5"
                              placeholder="Postal code"
                              id="input6"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <details>
                      <summary className="checkout__checkbox mb-20">
                        <input
                          className="checkout__checkbox--input"
                          type="checkbox"
                        />
                        <span className="checkout__checkbox--checkmark" />
                        <span className="checkout__checkbox--label">
                          Ship to a different address?
                        </span>
                      </summary>
                      <div className="section__shipping--address__content">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                            <div className="checkout__input--list ">
                              <label
                                className="checkout__input--label mb-10"
                                htmlFor="input7"
                              >
                                Fist Name{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="First name (optional)"
                                id="input7"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-10"
                                htmlFor="input8"
                              >
                                Last Name{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Last name"
                                id="input8"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-10"
                                htmlFor="input9"
                              >
                                Company Name{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Company (optional)"
                                id="input9"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-10"
                                htmlFor="input10"
                              >
                                Address{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Address1"
                                id="input10"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Apartment, suite, etc. (optional)"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-10"
                                htmlFor="input11"
                              >
                                Town/City{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="City"
                                id="input11"
                                type="text"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-10"
                                htmlFor="country2"
                              >
                                Country/region{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <div className="checkout__input--select select">
                                <select
                                  className="checkout__input--select__field border-radius-5"
                                  id="country2"
                                >
                                  <option value={1}>India</option>
                                  <option value={2}>United States</option>
                                  <option value={3}>Netherlands</option>
                                  <option value={4}>Afghanistan</option>
                                  <option value={5}>Islands</option>
                                  <option value={6}>Albania</option>
                                  <option value={7}>Antigua Barbuda</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-20">
                            <div className="checkout__input--list">
                              <label
                                className="checkout__input--label mb-10"
                                htmlFor="input12"
                              >
                                Postal Code{" "}
                                <span className="checkout__input--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="checkout__input--field border-radius-5"
                                placeholder="Postal code"
                                id="input12"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </details>
                    <div className="checkout__checkbox">
                      <input
                        className="checkout__checkbox--input"
                        id="checkbox2"
                        type="checkbox"
                      />
                      <span className="checkout__checkbox--checkmark" />
                      <label
                        className="checkout__checkbox--label"
                        htmlFor="checkbox2"
                      >
                        Save this information for next time
                      </label>
                    </div>
                  </div>
                  <div className="order-notes mb-20">
                    <label className="checkout__input--label mb-10" htmlFor="order">
                      Order Notes{" "}
                      <span className="checkout__input--label__star">*</span>
                    </label>
                    <textarea
                      className="checkout__notes--textarea__field border-radius-5"
                      id="order"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      spellCheck="false"
                      defaultValue={""}
                    />
                  </div>
                  <div className="checkout__content--step__footer d-flex align-items-center">
                    <a
                      className="continue__shipping--btn primary__btn border-radius-5"
                      href="/"
                    >
                      Continue To Shipping
                    </a>
                    <a className="previous__link--content" href="cart">
                      Return to cart
                    </a>
                  </div>
                </form> */}

            </div>
            <div className="col-lg-5 col-md-6">
              <div className="order-summary">
                <h5>Your Order Summary</h5>
                {
                  carts && carts?.product_info && carts?.product_info?.length > 0 && carts?.product_info?.map((product, i) => (
                    <div className="order-item" key={i}>
                      <img src={product?.image || "images/product2.webp"} alt="Item 1" />
                      <div className="order-item-details">
                        <span>{product?.title}</span>
                        {product?.selected_names?.shape && <small>SHAPE: {product?.selected_names?.shape}</small>}
                        {product?.selected_names?.setting && <small>SETTING: {product?.selected_names?.setting}</small>}
                        {product?.selected_names?.metal && <small>METAL: {product?.selected_names?.metal}</small>}
                        {product?.selected_names?.size && <small>SIZE: {product?.selected_names?.size}</small>}
                        {<small>QUANTITY: {product?.quantity}</small>}
                        {<small>TOTAL: ${product?.total_current_price}</small>}
                      </div>
                      <span>${product?.after_discount_price}</span>
                    </div>
                  ))
                }

                {/* <div className="my-3 discount-main">
                  <input
                    type="text"
                    className="form-control gift-field"
                    placeholder="Gift card or discount code"
                  />
                  <button className="btn-apply">Apply</button>
                </div> */}
                <div className="order-total">
                  <div className="d-flex justify-content-between subtotal-btn">
                    <span>Subtotal</span>
                    <span>${carts?.grand_total?.toFixed(2) || "Something went wrong"}</span>
                  </div>
                  <div className="d-flex justify-content-between shipping-btn">
                    <span>Shipping</span>
                    <span>Calculated after selecting address</span>
                  </div>
                  <div className="d-flex justify-content-between total-main">
                    <span>Total</span>
                    <span>${carts?.grand_total?.toFixed(2) || "Something went wrong"}</span>
                  </div>
                </div>
                <div className="payment-main py-3">
                  <h5>Payment</h5>
                  <div className="payment-methods">
                    <button className="btn btn-outline-secondary">COD</button>
                    {/* <button className="btn btn-outline-secondary">Bank Transfer</button>
                    <button className="btn btn-outline-secondary">Paypal</button> */}
                  </div>
                </div>
                <button className="btn btn-lg mt-3 w-100">Checkout Now</button>
              </div>

            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Checkout

