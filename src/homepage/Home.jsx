import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Banner from "../sections/home/Banner";
import ShippingInfo from "../sections/home/ShippingInfo";
import Popularproducts from "../sections/home/Popularproducts";
import NewProducts from "../sections/home/NewProducts";

import CallToAction from "../sections/home/CallToAction";
import FeaturedProduct from "../sections/home/FeaturedProduct";
import Testimonial from "../sections/home/Testimonial";
import Homeblog from "../sections/home/Homeblog";
import Brands from "../sections/home/Brands";
import Footer from "../sections/common/Footer";



const Home = () => {
  return (
    <>
      <Topbar />
      <Navbarmid />
    <NavbarBottom />
      <Banner />
      <ShippingInfo />
      <Popularproducts />

      <NewProducts />

    <CallToAction />
    <FeaturedProduct />
    <Testimonial />
      <Homeblog />
      <Brands />
      <Footer />


    
    </>
  );
};

export default Home;
