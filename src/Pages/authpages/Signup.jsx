
import '../../Styles/login.css'

import Topbar from '../../sections/common/Topbar'
import Navbarmid from '../../sections/common/Navbarmid'
import NavbarBottom from '../../sections/common/NavbarBottom'
import Breadcrumb from '../../sections/common/Breadcrumb'

import Footer from '../../sections/common/Footer'



const Signup = () => {
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
                                    <p>Login if you area a returning customer.</p>
                                </div>

                                <div className="account_login-field">
                                    <label>
                                        <input className="account_login-input" placeholder="Name" type="email" />
                                    </label>

                                    <label>
                                        <input className="account_login-input" placeholder="Email" type="email" />
                                    </label>

                                    <label>
                                        <input className="account_login-input" placeholder="Password" type="password" />
                                    </label>


                                    <label>
                                        <input className="account_login-input" placeholder="Confirm Password" type="password" />
                                    </label>
                                    <div className="account_login-remember_forgot mb-15 d-flex justify-content-between align-items-center">
                                        <div className="account_login-remember position_relative">
                                            <input className="checkout_checkbox-input" id="check1" type="checkbox" />
                                            <span className="checkout_checkbox-checkmark"></span>
                                            <label className="checkout_checkbox-label login_remember-label" for="check1">
                                                Remember me</label>
                                        </div>
                                        <button className="account_login-forgot" type="submit">Forgot Your Password?</button>
                                    </div>
                                    <button className="account_login-btn primary_btn" type="submit">Login</button>
                                    <div className="account_login-divide">
                                        <span className="account_login-divide_text">OR</span>
                                    </div>
                                    <div className="account_social d-flex justify-content-center mb-15">
                                        <a className="account_social-link facebook" target="_blank" href="https://www.facebook.com">Facebook</a>
                                        <a className="account_social-link google" target="_blank" href="https://www.google.com">Google</a>
                                        <a className="account_social-link twitter" target="_blank" href="https://twitter.com">Twitter</a>
                                    </div>
                                    <p className="account_login_signup_text">Don,t Have an Account? <button type="submit">Sign up now</button></p>
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