import { useEffect, useState } from "react";
import { fetchPagesApi } from "../apis/mainApis/footer/footerApis";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import { FaAngleRight } from "react-icons/fa6";
import Breadcrumb from '../sections/common/Breadcrumb';

const ReturnPolicy = () => {

    const [returnPolicy, setReturnPolicy] = useState("")
    const [loading, setLoading] = useState(false)


    const fetchPagesData = async () => {
        const response = await fetchPagesApi(setLoading);
        const about = response.find(item => item.Slug === "return-policy");
        if (about) {
            setReturnPolicy(about.Description);
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
                heading="Return Policy"
                image="/images/earrings-bg.png"
                para="Explore our exquisite hoop earrings, climbers and
                    fashion earrings to find your perfect pair."
            />
            <div className="page-nav container px-0">
                <p>Home</p>
                <FaAngleRight />
                <p>Return Policy</p>
            </div>
            <section className="about-us">
                <div className="container">
                    <h3>Return Policy</h3>
                    <div className="row about-main">
                        {
                            loading ? <div className="d-flex align-items-center justify-content-center">Loading....</div> : <div dangerouslySetInnerHTML={{ __html: returnPolicy }}></div>
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ReturnPolicy
