import Routes from './Routes'
import { useDispatch } from 'react-redux';
import { fetchUser } from './features/slices/user/userSlice';
import { fetchWishlist } from './features/slices/wishlist/wishlistSlice';
import { fetchCart } from './features/slices/cart/cartSlice';

function App() {

  const dispatch = useDispatch();
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
