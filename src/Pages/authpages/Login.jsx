import '../../Styles/login.css'
import Topbar from '../../sections/common/Topbar'
import Navbarmid from '../../sections/common/Navbarmid'
import NavbarBottom from '../../sections/common/NavbarBottom'
import Breadcrumb from '../../sections/common/Breadcrumb'
import Footer from '../../sections/common/Footer'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate = useNavigate()
  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="Login"
        image="/images/earrings-bg.png"
      />
      <section className="loginpage">
        <div className="container">
          <div className="row">

            <div className="col-xl-6">


              <div className="account_login">

                <div className="account_login-text mb-25">
                  <h2>Login</h2>
                  <p>Login if you are a returning customer.</p>
                </div>

                <div className="account_login-field">
                  <label>
                    <input className="account_login-input" placeholder="Email Address" type="email" />
                  </label>
                  <label>
                    <input className="account_login-input" placeholder="Password" type="password" />
                  </label>
                  <div className="account_login-remember_forgot mb-15 d-flex justify-content-end align-items-center">
                    <button className="account_login-forgot" type="submit">Forgot Your Password?</button>
                  </div>
                  <button className="account_login-btn primary_btn" type="submit">Login</button>
                  <div className="account_login-divide">
                    <span className="account_login-divide_text">OR</span>
                  </div>
                  <p className="account_login_signup_text">Don't Have an Account?<button type="submit" onClick={() => navigate('/sign-up')}>Sign up now</button></p>
                </div>
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

export default Login