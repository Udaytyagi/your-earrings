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
  const dispatch = useDispatch();
  const existingCompareIds = JSON.parse(localStorage.getItem('compareItems')) || [];
  const compareLength = existingCompareIds.length;
  dispatch(setCompareLength(compareLength));

  const token = localStorage.getItem("earringsToken");
  if (token) {
    dispatch(fetchUser());
    dispatch(fetchWishlist());
    dispatch(fetchCart());
  }


  return (
    <>
      <OfferModal openOfferModal={openOfferModal} setOpenOfferModal={setOpenOfferModal} />
      <Routes />
    </>
  )
}

export default App
