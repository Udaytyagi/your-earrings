import { useState } from 'react'
import '../../Styles/login.css'
import Topbar from '../../sections/common/Topbar'
import Navbarmid from '../../sections/common/Navbarmid'
import NavbarBottom from '../../sections/common/NavbarBottom'
import Breadcrumb from '../../sections/common/Breadcrumb'
import Footer from '../../sections/common/Footer'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../apis/authApis/authApis'
import { useDispatch } from 'react-redux';
import { Loader } from '../../components/Loader'

const NewPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (event) => {
        event.preventDefault()
        const data = {
            email: "",
            password: ""
        }
        loginApi(data, setLoading, dispatch, navigate);
    }

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb heading="Login" image="/images/earrings-bg.png" />
            <section className="loginpage">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="account_login">
                                <div className="account_login-text mb-25">
                                    <h2>New Password</h2>
                                    <p>Setup your new password.</p>
                                </div>

                                <form className="account_login-field" onSubmit={handleLogin}>
                                    <label>
                                        <input
                                            className="account_login-input"
                                            placeholder="Password"
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </label>
                                    <label>
                                        <input
                                            className="account_login-input"
                                            placeholder="Password"
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </label>
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
