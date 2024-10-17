import Routes from './Routes'
import { useDispatch } from 'react-redux';
import { fetchUser } from './features/slices/user/userSlice';
import { fetchWishlist } from './features/slices/wishlist/wishlistSlice';
import { fetchCart } from './features/slices/cart/cartSlice';
import { setCompareLength } from './features/slices/user/userSlice';

function App() {

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
      <Routes />
    </>
  )
}

export default App
