import { useState } from 'react'
import '../../Styles/login.css'
import Topbar from '../../sections/common/Topbar'
import Navbarmid from '../../sections/common/Navbarmid'
import NavbarBottom from '../../sections/common/NavbarBottom'
import Breadcrumb from '../../sections/common/Breadcrumb'
import Footer from '../../sections/common/Footer'
import { useNavigate } from 'react-router-dom'
import { otpVerificationApi } from '../../apis/authApis/authApis'
import { Loader } from '../../components/Loader'
import OtpInput from "react-otp-input";
import { ErrorToaster } from '../../components/Toaster'

const OtpVerification = () => {
    const navigate = useNavigate()
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false)

    const handleOtpVerification = async () => {
        const data = {
            otp: otp
        }
        if (otp?.length === 4) {
            await otpVerificationApi(data, setLoading, navigate)
        } else {
            ErrorToaster("Enter your four digit otp correctly")
        }
    }

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb heading="Otp Verification" image="/images/earrings-bg.png" />
            <section className="loginpage">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="account_login">
                                <div className="account_login-text mb-25">
                                    <h2>Otp Verification</h2>
                                    <p>Enter the otp sent to your email.</p>
                                </div>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span>-</span>}
                                    renderInput={(props) => <input {...props} />}
                                    inputStyle={{
                                        height: "2em",
                                        width: "2em"
                                    }}
                                    containerStyle={{
                                        justifyContent: "center"
                                    }}
                                    inputType={"tel"}
                                />
                                <button className="account_login-btn primary_btn" type="submit" disabled={loading} onClick={() => handleOtpVerification()}>
                                    {loading ? <Loader height="22"
                                        width="22"
                                        color="white" /> : 'Verify Otp'}
                                </button>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="login-img">
                                <img className='img-fluid' src="/images/login.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default OtpVerification
