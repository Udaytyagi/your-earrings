import { useState } from 'react'
import '../../Styles/login.css'
import Topbar from '../../sections/common/Topbar'
import Navbarmid from '../../sections/common/Navbarmid'
import NavbarBottom from '../../sections/common/NavbarBottom'
import Breadcrumb from '../../sections/common/Breadcrumb'
import Footer from '../../sections/common/Footer'
import { useNavigate } from 'react-router-dom'
import { forgotPasswordApi } from '../../apis/authApis/authApis'
import { Loader } from '../../components/Loader'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleForgotPassword = async (event) => {
        event.preventDefault()
        const data = {
            email: email,
        }
        await forgotPasswordApi(data, setLoading, navigate)
    }

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb heading="Forgot Password" image="/images/earrings-bg.png" />
            <section className="loginpage">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="account_login">
                                <div className="account_login-text mb-25">
                                    <h2>Forgot Password</h2>
                                    <p>Enter your existing email.</p>
                                </div>

                                <form className="account_login-field" onSubmit={handleForgotPassword}>
                                    <label>
                                        <input
                                            className="account_login-input"
                                            placeholder="Email Address"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <button className="account_login-btn primary_btn" type="submit" disabled={loading}>
                                        {loading ? <Loader height="22"
                                            width="22"
                                            color="white" /> : 'Generate Otp'}
                                    </button>
                                </form>
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

export default ForgotPassword
