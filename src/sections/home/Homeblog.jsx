import { CiUser } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";

import '../../Styles/blog.css'

const Blog = ({ blogs }) => {
    return (

        <>
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
                        {
                            blogs && blogs.length > 0 && blogs?.map((blog, i) => (
                                <div className="col-md-4" key={i}>
                                    <div className="blog-post">
                                        <h5>{blog?.Created_at}</h5>
                                        <img className='img-fluid' src={blog?.Images || "/images/blog-1.png"} alt="" />

                                        <h3>{blog?.Title}</h3>


                                        <div className="admin-info">
                                            <a href="#"><CiUser /> admin </a>
                                            <a href="#">{blog?.Category_name} </a>
                                        </div>

                                        <p dangerouslySetInnerHTML={{ __html: blog?.Description }}></p>

                                        <a href="#">Read More <FaAngleRight /></a>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </section>


        </>
    )
}

export default Blog
