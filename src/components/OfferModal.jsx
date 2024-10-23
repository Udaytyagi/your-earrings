import { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Loader } from './Loader';
import { offerBannerSignUpApi } from '../apis/mainApis/home/homeApis';

const OfferModal = ({ openOfferModal, setOpenOfferModal, offerImage, loadingImage }) => {
    const [offerImageAfterSignUp, setOfferImageAfterSignUp] = useState("")
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [successfulSignup, setSuccessfulSignUp] = useState(false)

    const handleOfferSignUp = async (e) => {
        e.preventDefault()
        const data = {
            email: email,
            key: "offer"
        }
        await offerBannerSignUpApi(data, setEmail, setSuccessfulSignUp, setLoading, setOfferImageAfterSignUp)
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
                {
                    !successfulSignup && <>
                        {
                            loadingImage ? <div className='text-center'>Loading...</div> : <img src={offerImage} height={"100%"} width={"100%"}></img>
                        }
                    </>
                }
                {successfulSignup && <img src={offerImageAfterSignUp} height={"100%"} width={"100%"}></img>}
                {
                    !successfulSignup && <form className='d-flex align-items-center justify-content-between mt-2' onSubmit={handleOfferSignUp}>

                        <input
                            className="account_login-input mb-0 mt-sm-0 mt-2"
                            placeholder="Email Address"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: "65%", fontSize: "14px" }}
                        />
                        <button className="account_login-btn primary_btn mt-sm-0 mt-2" type="submit" disabled={loading} style={{ width: "30%", fontSize: "14px" }}>
                            {loading ? <Loader height="22"
                                width="22"
                                color="white" /> : 'Sign Up'}
                        </button>

                    </form>
                }
            </Modal.Body>
        </Modal >
    )
}

export default OfferModal