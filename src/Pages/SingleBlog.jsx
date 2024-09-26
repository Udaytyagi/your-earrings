import { useEffect, useState } from 'react'
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleBlog } from '../features/slices/blog/blogSlice';
import { useParams } from 'react-router-dom';

function SingleBlog() {
    const [loading, setLoading] = useState(false)
    const blog = useSelector(state => state?.blogs?.singleBlog?.blog_info && state?.blogs?.singleBlog?.blog_info[0])
    const params = useParams();
    const slug = params.blogslug;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleBlog({ slug: slug, setLoading: setLoading }))
    }, [dispatch, slug])

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
                        {
                            loading ? <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "20vh" }}>Loading....</div> : <>
                                <img src={blog?.Images} alt="" className='img-fluid' height={"100%"} width={"100%"}></img>
                                <h3 className='mt-2'>{blog?.Title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: blog?.Description }}></p>
                            </>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleBlog
