import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateCart, updateQuantityCart } from "../features/slices/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carts = useSelector(state => state?.cart?.data?.Cart_info);

  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  const handleRemoveCart = (variationId) => {
    const data = {
      coupon_id: "",
      action: "remove"
    }
    dispatch(updateCart({ data: data, variationId: variationId }))
  }

  const handleQuantity = (action, variationId) => {
    const data = {
      variation_id: variationId,
      action: action
    }
    dispatch(updateQuantityCart(data))
  }

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
            {carts && carts?.product_info && carts?.product_info?.length > 0 ? <h2 className="pb-lg-5 pb-3">Shopping Cart</h2> : <h2 className="pb-5 d-flex justify-content-center">Your cart is empty</h2>}
            {
              carts && carts?.product_info && carts?.product_info?.length > 0 ? <>
                <div className="col-md-12">
                  <div className="cart-product-desktop">
                    <div className="row  pb-3 cart-table">
                      <div className="col-lg-4">
                        <h5>Product</h5>
                      </div>
                      <div className="col-lg-2">
                        <h5>Actual Price</h5>
                      </div>
                      <div className="col-lg-2">
                        <h5>Discount Price</h5>
                      </div>
                      <div className="col-lg-3">
                        <h5>Quantity</h5>
                      </div>
                      <div className="col-lg-1">
                        <h5>Total Price</h5>
                      </div>
                    </div>
                    {
                      carts && carts?.product_info && carts?.product_info?.length > 0 && carts?.product_info?.map((product, i) => (
                        <div className="row product-row" key={i}>
                          <div className="col-lg-4 cart-product">
                            <div className="product-desc">
                              <div className="remove-btn" onClick={() => handleRemoveCart(product?.variation_id)}>
                                <RxCross2 />
                              </div>
                              <img src={product?.image || "images/product2.webp"} alt="product2" />
                              <div className="product-info">
                                <h6>{product?.title}</h6>
                                {product?.selected_names?.shape && <p>SHAPE: {product?.selected_names?.shape}</p>}
                                {product?.selected_names?.setting && <p>SETTING: {product?.selected_names?.setting}</p>}
                                {product?.selected_names?.metal && <p>METAL: {product?.selected_names?.metal}</p>}
                                {product?.selected_names?.size && <p>SIZE: {product?.selected_names?.size}</p>}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <p className="d-flex justify-content-center">${product?.sale_price}</p>
                          </div>
                          <div className="col-lg-2">
                            <p className="d-flex justify-content-center">${product?.after_discount_price}</p>
                          </div>
                          <div className="col-lg-3">
                            <div className="quantity__box">
                              <button
                                type="button"
                                className="quantity__value quickview__value--quantity decrease"
                                aria-label="quantity value"
                                value="Decrease Value"
                                onClick={() => handleQuantity("subtract", product?.variation_id)}
                              >
                                <FiMinus />
                              </button>
                              <label>
                                <input
                                  className="quantity__number quickview__value--number"
                                  value={product?.quantity}
                                />
                              </label>
                              <button
                                type="button"
                                className="quantity__value quickview__value--quantity increase"
                                aria-label="quantity value"
                                value="Increase Value"
                                onClick={() => handleQuantity("add", product?.variation_id)}
                              >
                                <FiPlus />
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-1">
                            <p className="d-flex justify-content-center">${product?.total_current_price?.toFixed(2)}</p>
                          </div>
                        </div>
                      ))
                    }
                  </div>

                  <div className="cart-mobile">
                    {
                      carts && carts?.product_info && carts?.product_info?.length > 0 && carts?.product_info?.map((product, i) => (
                        <div className="row shadow-mobile" key={i}>
                          <div className="col-4 d-flex justify-content-center align-items-start">
                            <img
                              src={product?.image || "images/product2.webp"}
                              alt="images"
                              className="img-fluid"
                            />
                          </div>
                          <div className="col-8">
                            <p className="cart-mobile-name mb-1" style={{
                              // whiteSpace: "nowrap",
                              // overflow: "hidden",
                              // textOverflow: "ellipsis",
                            }}>{product?.title}</p>
                            <p className="cart-mobile-variation-name mb-1 d-flex align-items-center">SHAPE : <p className="m-0 ms-2" style={{ fontWeight: "500" }}> {product?.selected_names?.shape}</p></p>
                            <p className="cart-mobile-variation-name mb-1 d-flex align-items-center">SETTING : <p className="m-0 ms-2" style={{ fontWeight: "500" }}>{product?.selected_names?.setting}</p></p>
                            <p className="cart-mobile-variation-name mb-1 d-flex align-items-center">METAL : <p className="m-0 ms-2" style={{ fontWeight: "500" }}>{product?.selected_names?.metal}</p></p>
                            <p className="cart-mobile-variation-name mb-1 d-flex align-items-center">SIZE : <p className="m-0 ms-2" style={{ fontWeight: "500" }}>{product?.selected_names?.size}</p></p>
                            <p className="cart-mobile-price mb-1">Actual Price :${product?.sale_price}</p>
                            <p className="cart-mobile-price mb-1">Discount Price : ${product?.after_discount_price}</p>
                            <div className="d-flex align-items-center mb-1">
                              <div className="quantity__box me-3">
                                <button
                                  type="button"
                                  className="quantity__value quickview__value--quantity decrease"
                                  aria-label="quantity value"
                                  value="Decrease Value"
                                  onClick={() => handleQuantity("subtract", product?.variation_id)}
                                >
                                  <FiMinus />
                                </button>
                                <label>
                                  <input
                                    className="quantity__number quickview__value--number"
                                    value={product?.quantity}
                                  />
                                </label>
                                <button
                                  type="button"
                                  className="quantity__value quickview__value--quantity increase"
                                  aria-label="quantity value"
                                  value="Increase Value"
                                  onClick={() => handleQuantity("add", product?.variation_id)}
                                >
                                  <FiPlus />
                                </button>
                              </div>
                              <div className="remove-btn" onClick={() => handleRemoveCart(product?.variation_id)}>
                                <RxCross2 />
                              </div>
                            </div>
                            <p className="mb-0">
                              Total Price : ${product?.total_current_price?.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))
                    }
                  </div>

                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                      <Coupon carts={carts} navigate={navigate} />
                    </div>
                  </div>
                </div>
              </> : <div className="d-flex justify-content-center"><img src='/images/wishlist_empty.png' alt='cart-empty'></img></div>
            }
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
