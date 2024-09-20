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

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (event) => {
    event.preventDefault()
    const data = {
      email: email,
      password: password
    }
    await loginApi(data, setLoading, dispatch, navigate)
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
            <div className="col-lg-6">
              <div className="account_login">
                <div className="account_login-text mb-25">
                  <h2>Login</h2>
                  <p>Login if you are a returning customer.</p>
                </div>

                <form className="account_login-field" onSubmit={handleLogin}>
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
                  <label>
                    <input
                      className="account_login-input"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                  <div className="account_login-remember_forgot mb-15 d-flex justify-content-end align-items-center">
                    <button className="account_login-forgot" type="button" onClick={() => navigate('/forgot-password')}>Forgot Your Password?</button>
                  </div>
                  <button className="account_login-btn primary_btn" type="submit" disabled={loading}>
                    {loading ? <Loader height="22"
                      width="22"
                      color="white" /> : 'Login'}
                  </button>
                  <div className="account_login-divide">
                    <span className="account_login-divide_text">OR</span>
                  </div>
                  <p className="account_login_signup_text">Don't Have an Account?<button type="button" onClick={() => navigate('/register')}>Sign up now</button></p>
                </form>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center justify-content-center">
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
