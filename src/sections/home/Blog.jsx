import { useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import Topbar from "../common/Topbar";
import Navbarmid from "../common/Navbarmid";
import NavbarBottom from "../common/NavbarBottom";
import Footer from "../common/Footer";
import Breadcrumb from "../common/Breadcrumb";
import '../../Styles/blog.css'
import { useSelector, useDispatch } from "react-redux";
import { fetchBlog } from "../../features/slices/blog/blogSlice";
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const blogs = useSelector(state => state?.blogs?.data?.blog_list)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchBlog())
    }, [dispatch])


    return (

        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb
                heading="Blogs"
                image="/images/earrings-bg.png"

            />
            <section className="blog-sec">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="blog-latestpost">
                                <h2>Latest Posts</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            blogs?.map((blog, i) => (
                                <div className="col-md-4" key={blog.Slug}>
                                    {/* onClick={() => navigate(`/blog/${blog.Slug}`)} */}
                                    <div className="blog-post">
                                        <h5>{blog?.Created_at}</h5>
                                        <img className='img-fluid' src={blog?.Images || "/images/blog-1.png"} alt="" />
                                        <h3>{blog.Title}</h3>
                                        <div className="admin-info">
                                            <span className="d-flex align-items-center"><CiUser className="me-1" /> admin</span>
                                            <span className="ms-2">{blog?.Category_name} </span>
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: blog?.Description }}></p>
                                        <span>Read More <FaAngleRight /></span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Blog
