import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user/userSlice";
import homeSlice from "./slices/home/homeSlice";
import wishlistSlice from "./slices/wishlist/wishlistSlice";
import cartSlice from "./slices/cart/cartSlice";
import productDetailSlice from "./slices/productDetail/productDetailSlice";
import blogSlice from "./slices/blog/blogSlice";
import addressSlice from "./slices/addresses/addressSlice";
import orderSlice from "./slices/orders/orderSlice";
import compareSlice from "./slices/compare/compareSlice"

const store = configureStore({
  reducer: {
    user: userSlice,
    homeProducts: homeSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    productDetail: productDetailSlice,
    blogs: blogSlice,
    address: addressSlice,
    order: orderSlice,
    compare:compareSlice
  },
});

export default store;
