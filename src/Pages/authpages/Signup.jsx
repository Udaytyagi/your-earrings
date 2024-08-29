import '../../Styles/login.css'
import Topbar from '../../sections/common/Topbar'
import Navbarmid from '../../sections/common/Navbarmid'
import NavbarBottom from '../../sections/common/NavbarBottom'
import Breadcrumb from '../../sections/common/Breadcrumb'
import Footer from '../../sections/common/Footer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ErrorToaster } from '../../components/Toaster'
import { Loader } from '../../components/Loader'
import { signUpApi } from '../../apis/authApis/authApis'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const trimmedName = name.trim()
        if (trimmedName.length < 4) {
            ErrorToaster('Username must be at least 4 characters long')
            return
        }
        if (name !== trimmedName) {
            ErrorToaster('Username cannot have leading or trailing spaces')
            return
        }
        if (password.length < 8) {
            ErrorToaster('Password must be at least 8 characters long')
            return
        }
        if (password !== confirmPassword) {
            ErrorToaster('Passwords and confirm password does not match')
            return
        }

        const data = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword
        }
        signUpApi(data, setLoading, navigate)
    }

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb
                heading="Sign Up"
                image="/images/earrings-bg.png"
            />
            <section className="loginpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="account_login">
                                <div className="account_login-text mb-25">
                                    <h2>Create an account</h2>
                                    <p>Sign up if you are a new customer.</p>
                                </div>
                                <div className="account_login-field">
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                            <input
                                                className="account_login-input"
                                                placeholder="Name"
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </label>

                                        <label>
                                            <input
                                                className="account_login-input"
                                                placeholder="Email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </label>

                                        <label>
                                            <input
                                                className="account_login-input"
                                                placeholder="Password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </label>

                                        <label>
                                            <input
                                                className="account_login-input"
                                                placeholder="Confirm Password"
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </label>
                                        <button className="account_login-btn primary_btn" type="submit"> {loading ? <Loader height="22"
                                            width="22"
                                            color="white" /> : 'SignUp'}</button>
                                        <div className="account_login-divide">
                                            <span className="account_login-divide_text">OR</span>
                                        </div>
                                        <p className="account_login_signup_text">Already Have an Account? <button type="button" onClick={() => navigate('/login')}>Sign in now</button></p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
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

export default Signup
