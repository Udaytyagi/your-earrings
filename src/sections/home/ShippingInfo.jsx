import { FaPlane } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";

import { MdOutlineSupportAgent } from "react-icons/md";


import '../../Styles/shippinginfo.css'


const ShippingInfo = () => {
  return (
    <>
      <section className="shipping-info">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="shipping-content d-flex align-items-center">
                        <div className="shipping-img">
                            <FaPlane />
                        </div>

                        <div className="shipping-text">
                            <h3>Free Shipping</h3>
                            <p>We provide free shipping for all order above $500</p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="shipping-content d-flex align-items-center">
                        <div className="shipping-img1">
                           <MdOutlineLocalShipping/>
                        </div>

                        <div className="shipping-text">
                            <h3>Fast Delivery</h3>
                            <p>We provide free shipping for all order above $500</p>
                        </div>
                       
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="shipping-content d-flex align-items-center">
                        <div className="shipping-img2">
                            <MdOutlineSupportAgent />
                        </div>

                        <div className="shipping-text">
                            <h3>24/7 Support</h3>
                            <p>We provide free shipping for all order above $500</p>
                        </div>
                       
                    </div>
                </div>


            </div>
        </div>
      </section>
    </>
  )
}

export default ShippingInfo
