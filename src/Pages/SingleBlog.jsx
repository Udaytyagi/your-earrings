import { useEffect } from 'react'
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleBlog } from '../features/slices/blog/blogSlice';
import { useParams } from 'react-router-dom';

function SingleBlog() {
    const blog = useSelector(state => state?.blogs?.singleBlog?.blog_info && state?.blogs?.singleBlog?.blog_info[0])
    console.log("blog", blog)
    const params = useParams();
    const slug = params.blogslug;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleBlog(slug))
    }, [dispatch, slug])

    if (blog) return;

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb
                heading="Blogs"
                image="/images/earrings-bg.png"
            />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={blog?.Images} alt="" height={"100%"} width={"100%"}></img>
                        <h3>{blog?.Title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: blog?.Description }}></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleBlog
