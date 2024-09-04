import { useState } from 'react'
import '../../Styles/login.css'
import Topbar from '../../sections/common/Topbar'
import Navbarmid from '../../sections/common/Navbarmid'
import NavbarBottom from '../../sections/common/NavbarBottom'
import Breadcrumb from '../../sections/common/Breadcrumb'
import Footer from '../../sections/common/Footer'
import { useNavigate } from 'react-router-dom'
import { newPasswordApi } from '../../apis/authApis/authApis'
import { Loader } from '../../components/Loader'
import { ErrorToaster } from '../../components/Toaster'

const NewPassword = () => {
    const navigate = useNavigate()
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const validateForm = () => {
        if (newPassword.length < 8) {
            ErrorToaster('New password must be at least 8 characters long')
            return false;
        }
        if (newPassword !== confirmPassword) {
            ErrorToaster('New password and Confirm password does not match')
            return false;
        }
        return true;
    }

    const handleNewPassword = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("verifyOtpToken")
        const data = {
            token: token,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        }
        if (validateForm()) {
            await newPasswordApi(data, setLoading, navigate);
        }
    }

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb heading="New Password" image="/images/earrings-bg.png" />
            <section className="loginpage">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="account_login">
                                <div className="account_login-text mb-25">
                                    <h2>New Password</h2>
                                    <p>Setup your new password.</p>
                                </div>

                                <form className="account_login-field" onSubmit={handleNewPassword}>
                                    <label>
                                        <input
                                            className="account_login-input"
                                            placeholder="New Password"
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        <input
                                            className="account_login-input"
                                            placeholder="Confirm Password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <button className="account_login-btn primary_btn" type="submit" disabled={loading}>
                                        {loading ? <Loader height="22"
                                            width="22"
                                            color="white" /> : 'Submit'}
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

export default NewPassword
