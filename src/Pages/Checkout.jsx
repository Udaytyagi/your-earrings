import { useState, useEffect } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import { useSelector } from "react-redux";
import "../Styles/Checkout.css";
import { useDispatch } from "react-redux";
import { addAddress, fetchAddress } from "../features/slices/addresses/addressSlice";
import { Loader } from "../components/Loader";
import { ErrorToaster } from "../components/Toaster";
import { createOrderApi } from "../apis/mainApis/order/orderApis";
import { useNavigate } from "react-router-dom";
import AddAddressModal from "../components/AddAddressModal";
import EditAddressModal from "../components/EditAddressModal";
import { deleteAddress } from "../features/slices/addresses/addressSlice";
import { FaDiaspora } from "react-icons/fa6";


function Checkout() {
  const carts = useSelector(state => state?.cart?.data?.Cart_info);
  const address = useSelector(state => state?.address?.data?.user_record);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")
  const [loading, setLoading] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openEditPopup = () => {
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
  };

  useEffect(() => {
    dispatch(fetchAddress())
  }, [])

  const handleCheckout = async () => {
    if (!address || address.length === 0) {
      ErrorToaster("Please add address")
      return;
    } else if (!selectedAddressId) {
      ErrorToaster("Please select address")
      return;
    } else if (!selectedPaymentMethod) {
      ErrorToaster("Please select payment method")
      return;
    }
    const data = {
      addressId: selectedAddressId,
      payment_method: selectedPaymentMethod
    }
    await createOrderApi(data, setLoading, navigate)
  }

  const handleEditAddress = () => {
    if (!selectedAddressId) {
      ErrorToaster("Please select address you want to edit");
      return;
    }
    openEditPopup()
  }

  const handleDeleteAddress = () => {
    if (!selectedAddressId) {
      ErrorToaster("Please select address you want to delete");
      return;
    }
    dispatch(deleteAddress({ selectedAddressId: selectedAddressId, setSelectedAddressId: setSelectedAddressId }))
  }

  return (
    <>
      <EditAddressModal isEditPopupOpen={isEditPopupOpen} closeEditPopup={closeEditPopup} selectedAddressId={selectedAddressId} />
      <AddAddressModal isPopupOpen={isPopupOpen} closePopup={closePopup} />
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
                <button className="new__address--btn primary__btn mb-25 mb-3" type="button" onClick={openPopup}>
                  Add a new address
                </button>
                <div className="row pb-md-0 pb-2">
                  <div className="col-md-12">
                    <div className="add-right-check-box">
                      {
                        address && address.length > 0 ? <>
                          {
                            address?.map((ship, i) => (
                              <div className="right-address-border" key={i}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input formcheckinput-right"
                                    type="radio"
                                    name="DelvieryAddress"
                                    id="DelvieryAddress1"
                                    onClick={() => setSelectedAddressId(ship.id)}
                                  />
                                  <div className="ms-3 address-right-iteam">
                                    <div>
                                      <span>{ship.name}{" "}</span>
                                      <span>{ship.address_type === "1" ? "(Home)" : ship.address_type === "2" ? "(Office)" : "(Other)"}</span>
                                    </div>
                                    <div>
                                      <span>+91</span>
                                      <span>{ship.mobile}</span>
                                    </div>
                                    <div>
                                      <span>{ship.street}{" "}</span>
                                      <span>{ship.landmark}{" "}</span>
                                      <span>{ship.city}{" "}</span>
                                      <span>{ship.state}</span>

                                    </div>
                                    <div>
                                      <span>Pin Code: </span>
                                      <span>{ship.pin_code}</span>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </> : <div className="d-flex justify-content-center align-items-center flex-column"><img src='/images/wishlist_empty.png' alt='wishlist-empty'></img><h6>No address found</h6></div>
                      }
                    </div>
                  </div>
                </div>
                {/* <a className="account__details--link" href="">
                            View Addresses (1)
                    </a> */}


                {
                  address && address.length > 0 &&
                  <div className="account__details--footer d-flex mt-3">
                    <button className="account__details--footer__btn" type="button" onClick={() => handleEditAddress()}>
                      Edit
                    </button>
                    <button className="account__details--footer__btn" type="button" onClick={() => handleDeleteAddress()}>
                      Delete
                    </button>
                  </div>
                }
              </div>

            </div>
            <div className="col-lg-5 col-md-6">
              <div className="order-summary">
                <h5>Your Order Summary</h5>
                <div style={{ maxHeight: "240px", overflowY: "scroll", scrollbarWidth: "none" }}>
                  {
                    carts && carts?.product_info && carts?.product_info?.length > 0 && carts?.product_info?.map((product, i) => (
                      <div className="order-item px-3" key={i}>
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
                </div>


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
                  <h5>Payment Method</h5>
                  <div className="payment-methods">
                    <button className={`btn btn-outline-secondary ${selectedPaymentMethod === "cod" ? "selected" : ""}`} onClick={() => setSelectedPaymentMethod("cod")}>COD</button>
                    <button className={`btn btn-outline-secondary ${selectedPaymentMethod === "world_pay" ? "selected" : ""}`} onClick={() => setSelectedPaymentMethod("world_pay")}>World Pay</button>
                  </div>
                </div>
                <button className="btn btn-lg mt-3 w-100" onClick={() => handleCheckout()} disabled={loading}>{loading ? <Loader height="22"
                  width="22"
                  color="white" /> : 'Checkout Now'}</button>
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

