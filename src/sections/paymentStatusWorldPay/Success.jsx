import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "../../Styles/Success.css"
import { orderStatusApi } from '../../apis/mainApis/order/orderApis';

const Success = () => {
    const navigate = useNavigate();
    const { orderId } = useParams();
    const id = orderId?.split("=")[1];

    useEffect(() => {
        async function orderstatus() {
            const data = {
                orderId: id,
                payment_status: "Success"
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
            <div className="success_card">
                <div className='d-flex align-items-center justify-content-center'>
                    <i className="checkmark">✓</i>
                </div>
                <h1>Payment success</h1>
                <p className="mb-2">
                    We have received your purchase request
                    <br /> We will be in touch shortly
                </p>
                <div className='d-flex align-items-center justify-content-center'>
                    <span className="checkout_homepage" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        Go to home page
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Success
