import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { orderStatusApi } from "../../apis/mainApis/order/orderApis";
import "../../Styles/Failed.css"

const Cancel = () => {

    const { orderId } = useParams();
    const id = orderId?.split("=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        async function orderstatus() {
            const data = {
                orderId: id,
                payment_status: "Cancel"
            };
            await orderStatusApi(data);
        }
        orderstatus();
    }, [id]);


    return (
        <div
            style={{ height: "100vh" }}
            className="d-flex align-items-center justify-content-center"
        >
            <div className="failed_card">
                <div className="d-flex align-items-center justify-content-center">
                    <i className="fa-solid fa-xmark-large">X</i>
                </div>
                <h1>Payment is canceled</h1>
                {/* <p className="mb-2">Please try again later</p> */}
                <div className="d-flex align-items-center justify-content-center">
                    <span className="checkout_homepage" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
                        Go to home page
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Cancel
