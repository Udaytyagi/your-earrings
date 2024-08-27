import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";



import "../Styles/Checkout.css";




function Checkout() {
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
      <div className="col-lg-7 col-md-6">
        <div className="main checkout__mian">
          <form action="#">
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
          </form>
        </div>
      </div>
      <div className="col-lg-5 col-md-6">
      <div className="order-summary">
  <h5>Your Order Summary</h5>
  <div className="order-item">
    <img src="images/product2.webp" alt="Item 1" />
    <div className="order-item-details">
      <span>Fluids &amp; Chemicals</span>
      <small>COLOR: Blue</small>
    </div>
    <span>£65.00</span>
  </div>
  <div className="order-item">
    <img src="images/product2.webp" alt="Item 2" />
    <div className="order-item-details">
      <span>Cargo Accessories</span>
      <small>COLOR: Green</small>
    </div>
    <span>£82.00</span>
  </div>
  <div className="order-item">
    <img src="images/product2.webp" alt="Item 3" />
    <div className="order-item-details">
      <span>Motorbike Care</span>
      <small>COLOR: White</small>
    </div>
    <span>£78.00</span>
  </div>
  <div className="my-3 discount-main">
    <input
      type="text"
      className="form-control gift-field"
      placeholder="Gift card or discount code"
    />
    <button className="btn-apply">Apply</button>
  </div>
  <div className="order-total">
    <div className="d-flex justify-content-between subtotal-btn">
      <span>Subtotal</span>
      <span>£860.00</span>
    </div>
    <div className="d-flex justify-content-between shipping-btn">
      <span>Shipping</span>
      <span>Calculated at next step</span>
    </div>
    <div className="d-flex justify-content-between total-main">
      <span>Total</span>
      <span>£860.00</span>
    </div>
  </div>
<div className="payment-main py-3">
<h5>Payment</h5>
<div className="payment-methods">
    <button className="btn btn-outline-secondary">Credit Card</button>
    <button className="btn btn-outline-secondary">Bank Transfer</button>
    <button className="btn btn-outline-secondary">Paypal</button>
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

