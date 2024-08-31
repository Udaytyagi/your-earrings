import "../Styles/cart.css";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import Coupon from "./Coupon";

function Cart() {
  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="Cart"
        image="/images/earrings-bg.png"

      />
      <div className="cart-container">
        <div className="container-fluid">
          <div className="row">
            <h2 className="pb-5">Shopping Cart</h2>
            <div className="col-md-12 col-xl-8 main-col-1">
              <div className="row  pb-3">
                <div className="col-md-7">
                  <h5>
                    Product</h5>
                </div>
                <div className="col-md-5 price-main">
                  <h5>
                    Price</h5>
                  <h5>
                    Quantity</h5>
                  <h5>
                    Total</h5>
                </div>
              </div>
              <div className="row product-row">
                <div className="col-md-7 cart-product">
                  <div className="product-desc">
                    <div className="remove-btn">
                      <RxCross2 />
                    </div>
                    <img src="images\product2.webp" alt="product2" />
                    <div className="product-info">
                      <h6>Diamond Ring</h6>
                      <p>COLOR: Blue</p>
                      <p>WEIGHT: 12 gm</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 product-price">
                  <p>$65.00</p>
                  <div className="quantity__box" style={{}}>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      <FiMinus />
                    </button>
                    <label>
                      <input
                        className="quantity__number quickview__value--number"
                        defaultValue={1}
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <p>$65.00</p>
                </div>
              </div>
              <div className="row product-row">
                <div className="col-md-7 cart-product">
                  <div className="product-desc">
                    <div className="remove-btn">
                      <RxCross2 />
                    </div>
                    <img src="images\product2.webp" alt="product2" />
                    <div className="product-info">
                      <h6>Diamond Ring</h6>
                      <p>COLOR: Blue</p>
                      <p>WEIGHT: 12 gm</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 product-price">
                  <p>$65.00</p>
                  <div className="quantity__box" style={{}}>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      <FiMinus />
                    </button>
                    <label>
                      <input
                        className="quantity__number quickview__value--number"
                        defaultValue={1}
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <p>$65.00</p>
                </div>
              </div>

              <div className="row product-row">
                <div className="col-md-7 cart-product">
                  <div className="product-desc">
                    <div className="remove-btn">
                      <RxCross2 />
                    </div>
                    <img src="images\product2.webp" alt="product2" />
                    <div className="product-info">
                      <h6>Diamond Ring</h6>
                      <p>COLOR: Blue</p>
                      <p>WEIGHT: 12 gm</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 product-price">
                  <p>$65.00</p>
                  <div className="quantity__box" style={{}}>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      <FiMinus />
                    </button>
                    <label>
                      <input
                        className="quantity__number quickview__value--number"
                        defaultValue={1}
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <p>$65.00</p>
                </div>
              </div>
              <div className="row product-row">
                <div className="col-md-7 cart-product">
                  <div className="product-desc">
                    <div className="remove-btn">
                      <RxCross2 />
                    </div>
                    <img src="images\product2.webp" alt="product2" />
                    <div className="product-info">
                      <h6>Diamond Ring</h6>
                      <p>COLOR: Blue</p>
                      <p>WEIGHT: 12 gm</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 product-price">
                  <p>$65.00</p>
                  <div className="quantity__box" style={{}}>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity decrease"
                      aria-label="quantity value"
                      value="Decrease Value"
                    >
                      <FiMinus />
                    </button>
                    <label>
                      <input
                        className="quantity__number quickview__value--number"
                        defaultValue={1}
                      />
                    </label>
                    <button
                      type="button"
                      className="quantity__value quickview__value--quantity increase"
                      aria-label="quantity value"
                      value="Increase Value"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <p>$65.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-xl-4 pt-md-3 main-col-2">
              <Coupon />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
