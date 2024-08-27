import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user/userSlice';
import homeSlice from './slices/home/homeSlice';
import wishlistSlice from './slices/wishlist/wishlistSlice';
import cartSlice from './slices/cart/cartSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        homeProducts: homeSlice,
        cart: cartSlice,
        wishlist: wishlistSlice
    },
});


export default store;
