import { CiUser } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import Topbar from "../common/Topbar";
import Navbarmid from "../common/Navbarmid";
import NavbarBottom from "../common/NavbarBottom";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";

import '../../Styles/blog.css'

const Blog = () => {
  return (
    
     <>
      <Topbar/>
      <Navbarmid />
      <NavbarBottom />

      <Breadcrumb
        heading="Blog"
        image="/images/earrings-bg.png"
      
      />
      <section className="blog-sec">
            <div className="container">

                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="blog-latestpost">
                            <h2>Latest Post</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="blog-post">
                            <h5>20<br/> july</h5>
                            <img className='img-fluid' src="/images/blog-1.png" alt="" />
                            
                            <h3>Exquisite Designer Earrings</h3>
                            

                            <div className="admin-info">
                               <a href="#"><CiUser /> admin </a>
                               <a href="#">Diamond </a>
                            </div>

                            <p>Voluptatum sed natus doloremque totam harum, ad excepturi. Id pariatur quos nulla saepe nesciunt cum, repellat esse magnam eveniet molestiae...</p>

                            <a href="#">Read More <FaAngleRight /></a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="blog-post">
                            <h5>20<br/> july</h5>
                            <img className='img-fluid' src="/images/blog-2.png" alt="" />
                            
                            <h3>Exquisite Designer Earrings</h3>
                            

                            <div className="admin-info">
                               <a href="#"><CiUser /> admin </a>
                               <a href="#">Diamond </a>
                            </div>

                            <p>Voluptatum sed natus doloremque totam harum, ad excepturi. Id pariatur quos nulla saepe nesciunt cum, repellat esse magnam eveniet molestiae...</p>

                            <a href="#">Read More <FaAngleRight /></a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="blog-post">
                            <h5>20<br/> july</h5>
                            <img className='img-fluid' src="/images/blog-3.png" alt="" />
                            
                            <h3>Exquisite Designer Earrings</h3>
                            

                            <div className="admin-info">
                               <a href="#"><CiUser /> admin </a>
                               <a href="#">Diamond </a>
                            </div>

                            <p>Voluptatum sed natus doloremque totam harum, ad excepturi. Id pariatur quos nulla saepe nesciunt cum, repellat esse magnam eveniet molestiae...</p>

                            <a href="#">Read More <FaAngleRight /></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>


        <Footer/>
    </>
  )
}

export default Blog
