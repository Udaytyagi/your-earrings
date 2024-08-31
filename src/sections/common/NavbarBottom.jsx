import '../../Styles/navbarbottom.css'
import { useNavigate } from 'react-router-dom'

const NavbarBottom = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="navbarbottom">
                <div className="container">
                    <div className="row">


                        <div className="col-md-12 d-flex align-items-center justify-content-center">
                            <div className="navigation">
                                <ul>
                                    <li onClick={() => navigate('/')}>Home</li>

                                    <li onClick={() => navigate('/diamond')}>Diamond Earrings</li>

                                    <li onClick={() => navigate('/about-us')}>About Us</li>

                                    <li onClick={() => navigate('/contact-us')}>Contact</li>

                                    <li onClick={() => navigate('/blog')}>Blog</li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavbarBottom