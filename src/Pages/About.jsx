import { useEffect, useState } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import { FaAngleRight } from "react-icons/fa6";
import '../Styles/breadcrumb.css'
import '../Styles/contact.css'
import { AiOutlineAntDesign } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import Breadcrumb from '../sections/common/Breadcrumb';
import { fetchPagesApi } from "../apis/mainApis/footer/footerApis";

const About = () => {

    const [aboutUs, setAboutUs] = useState("")
    const [loading, setLoading] = useState(false)


    const fetchPagesData = async () => {
        const response = await fetchPagesApi(setLoading);
        const about = response.find(item => item.Slug === "about-us");
        if (about) {
            setAboutUs(about.Description);
        }
    }


    useEffect(() => {
        fetchPagesData()
    }, []);

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <Breadcrumb
                heading="About Us"
                image="/images/earrings-bg.png"
                para="Explore our exquisite hoop earrings, climbers and
                    fashion earrings to find your perfect pair."
            />
            <div className="page-nav container px-0">
                <p>Home</p>
                <FaAngleRight />
                <p>About Us</p>
            </div>



            <section className="about-us">
                <div className="container">
                    <div className="row about-main">
                        {
                            loading ? <div className="d-flex align-items-center justify-content-center">Loading....</div> : <div dangerouslySetInnerHTML={{ __html: aboutUs }}></div>
                        }

                        {/* <div className="col-md-12 col-lg-6">
                            <div className="about-test">


                                <p className="pt-md-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita cumque voluptate enim, animi doloribus hic possimus, distinctio, repellendus nostrum cupiditate rem temporibus optio eaque aliquid ea veritatis error voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea laudantium velit reprehenderit accusamus sed sit qui, placeat autem repudiandae amet repellendus quibusdam maiores sunt vel itaque nisi delectus harum!</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vitae mollitia saepe earum ab commodi nam incidunt fuga iure sit laborum nostrum veritatis consequuntur adipisci inventore quo numquam corporis id!</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita cumque voluptate enim, animi doloribus hic possimus, distinctio, repellendus nostrum cupiditate rem temporibus optio eaque aliquid ea veritatis error voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="aboutimg1">
                                        <img className='img-fluid' src="/images/about-1.jpg" alt="intro" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="aboutimg2">
                                        <img className='img-fluid' src="/images/about-us.jpg" alt="intro" />
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </section>


            {/* <section className="whychooseus">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="whyus text-center">
                                <h3>Why choose us?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="whychoose-test text-center">
                                <span> <AiOutlineAntDesign /></span>
                                <h4>Creative Design</h4>

                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="whychoose-test text-center">
                                <span> <RiMoneyDollarCircleLine /></span>
                                <h4>100% Money Back Guarantee</h4>

                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="whychoose-test text-center">
                                <span> <MdSupportAgent /></span>
                                <h4>Online Support 24/7</h4>

                                <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>

                            </div>
                        </div>



                    </div>
                </div>
            </section> */}















            <Footer />
        </>
    )
}

export default About