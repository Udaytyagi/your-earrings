import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import '../../Styles/topbar.css'


const Topbar = () => {
  return (
    <>

        <section className="topbar-sec">
        <div className="container">
          <div className="row ">

            <div className="col-md-12 d-flex">
              <div className="topbar-info">
                    <p><a href="tel:+91-9999999999"><MdLocalPhone /> +91-9999999999</a></p>
                    <p><a href="mailto:info@example.com"><FaEnvelope /> info@example.com</a></p>
              </div>
              </div>

          

            
          </div>
        </div>
      </section>

    </>
  )
}

export default Topbar
