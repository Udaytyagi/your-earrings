import { useEffect } from "react";
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
import { fetchHomeProducts } from "../features/slices/home/homeSlice";
import { useDispatch, useSelector } from 'react-redux';
import { updateHomeWishlist } from "../features/slices/wishlist/wishlistSlice";


const Home = () => {
  const dispatch = useDispatch();
  const allCollection = useSelector(state => state?.homeProducts?.data?.All_collection);
  const newArrival = useSelector(state => state?.homeProducts?.data?.New_arrival);
  const testimonial = useSelector(state => state?.homeProducts?.data?.Testinomial);
  const blogs = useSelector(state => state?.homeProducts?.data?.Latest_blog_list);
  const bannerInfo = useSelector(state => state?.homeProducts?.data?.banner_info);
  const wishlistHomeUpdate = useSelector(state => state?.wishlist?.isUpdatingHome);

  useEffect(() => {
    dispatch(fetchHomeProducts())
  }, [dispatch, wishlistHomeUpdate])

  const handleUpdateWishlist = (variationId) => {
    const data = {
      variation_id: variationId
    }
    dispatch(updateHomeWishlist(data))
  }

  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Banner />
      <ShippingInfo />
      {
        allCollection && allCollection.length > 0 && <Popularproducts products={allCollection[0]} handleUpdateWishlist={handleUpdateWishlist} />
      }
      {
        allCollection && allCollection.length > 2 && <NewProducts products={allCollection[2]} handleUpdateWishlist={handleUpdateWishlist} />
      }
      {/* {
        newArrival && newArrival.length > 0 && <NewProducts products={newArrival} handleUpdateWishlist={handleUpdateWishlist} />
      } */}
      {
        bannerInfo && <CallToAction products={bannerInfo[0]} />
      }
      {
        allCollection && allCollection.length > 1 && <FeaturedProduct products={allCollection[1]} />
      }
      {
        testimonial && testimonial.length > 0 && <Testimonial products={testimonial} />
      }
      {
        blogs && blogs.length > 0 && <Homeblog blogs={blogs} />
      }
      <Brands />
      <Footer />



    </>
  );
};

export default Home;
