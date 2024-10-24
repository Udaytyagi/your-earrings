import Routes from './Routes'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './features/slices/user/userSlice';
import { fetchWishlist } from './features/slices/wishlist/wishlistSlice';
import { fetchCart } from './features/slices/cart/cartSlice';
import { setCompareLength } from './features/slices/user/userSlice';
import OfferModal from './components/OfferModal';
import { useEffect, useState } from 'react';
import { fetchOfferBannerApi } from './apis/mainApis/home/homeApis';

function App() {
  const [openOfferModal, setOpenOfferModal] = useState(true)
  const [offerImage, setOfferImage] = useState("")
  const [loadingImage, setLoadingImage] = useState()
  const dispatch = useDispatch();
  const existingCompareIds = JSON.parse(localStorage.getItem('compareItems')) || [];
  const compareLength = existingCompareIds.length;
  dispatch(setCompareLength(compareLength));

  const token = localStorage.getItem("earringsToken");
  if (token && openOfferModal) {
    dispatch(fetchUser());
    dispatch(fetchWishlist());
    dispatch(fetchCart());
  }

  const fetchOfferBanner = async () => {
    const response = await fetchOfferBannerApi(setLoadingImage);
    setOfferImage(response.data.offerImage)
  }

  useEffect(() => {
    fetchOfferBanner()
  }, [])


  return (
    <>
      <OfferModal openOfferModal={openOfferModal} setOpenOfferModal={setOpenOfferModal} offerImage={offerImage} loadingImage={loadingImage} />
      <Routes />
    </>
  )
}

export default App
