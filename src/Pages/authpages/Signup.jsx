
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
                                    <p>Sign up if you are a new customer.</p>
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
                                    <button className="account_login-btn primary_btn" type="submit">Sign Up</button>
                                    <div className="account_login-divide">
                                        <span className="account_login-divide_text">OR</span>
                                    </div>
                                    <p className="account_login_signup_text">Already Have an Account? <button type="submit">Sign in now</button></p>
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