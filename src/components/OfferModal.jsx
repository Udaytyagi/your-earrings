import React, { useState } from 'react'
import { Modal, Form } from "react-bootstrap";
import { Loader } from './Loader';
import { newsLetterApi } from '../apis/mainApis/footer/footerApis';

const OfferModal = ({ openOfferModal, setOpenOfferModal, image }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [successfulSignup, setSuccessfulSignUp] = useState(false)


    const handleOfferSignUp = async () => {
        const data = {
            email: email,
            key: "offer"
        }
        await newsLetterApi(data, setEmail,setSuccessfulSignUp)
    }

    return (
        <Modal
            show={openOfferModal}
            onHide={() => setOpenOfferModal(false)}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="login_heading_title fw-bold">Earrings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src="/src/assets/banner.jpg" height={"100%"} width={"100%"}></img>
                {
                    !successfulSignup && <div className='d-flex align-items-center justify-content-between mt-2'>
                        <input
                            className="account_login-input mb-0 mt-sm-0 mt-2"
                            placeholder="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: "65%", fontSize: "14px" }}
                        />
                        <button className="account_login-btn primary_btn mt-sm-0 mt-2" type="submit" disabled={loading} style={{ width: "30%", fontSize: "14px" }} onClick={handleOfferSignUp}>
                            {loading ? <Loader height="22"
                                width="22"
                                color="white" /> : 'Sign Up'}
                        </button>
                    </div>
                }
            </Modal.Body>
        </Modal>
    )
}

export default OfferModal