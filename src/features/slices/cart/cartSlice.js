import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCart = createAsyncThunk('fetchCart', async () => {
    //   try {
    //     const headers = {
    //       Authorization: `Bearer ${token}`,
    //     };
    //     const response = await axios.post(`${BaseUrl}fetch-carts`, {}, {headers});
    //     return response?.data;
    //   } catch (error) {
    //     console.error('Error fetching cart products:', error);
    //   }
});

export const removeFromCart = createAsyncThunk(
    'removeFromCart',
    async ({ cartId, productId, dispatch }) => {
        // try {
        //   const data = {
        //     cartId: cartId,
        //     productId: parseInt(productId),
        //   };
        //   const headers = {
        //     Authorization: `Bearer ${token}`,
        //   };
        //   const response = await axios.post(`${BaseUrl}remove-from-cart`, data, {
        //     headers,
        //   });
        //   dispatch(fetchCart());
        //   SuccessToast(response?.data?.message);
        // } catch (error) {
        //   console.error('Error remove cart products:', error);
        //   ErrorToast(error?.response?.data?.message);
        //   // throw error;
        // }
    },
);

export const addToCart = createAsyncThunk(
    'addToCart',
    async ({ productId, variationId, quantity, dispatch }, thunkAPI) => {
        // let token = await AsyncStorage.getItem('logFeller_Token');
        // try {
        //   const data = {
        //     product_id: productId,
        //     variant_id: variationId || '',
        //     quantity: quantity,
        //   };
        //   const headers = {
        //     Authorization: `Bearer ${token}`,
        //   };
        //   const response = await axios.post(`${BaseUrl}add-to-cart`, data, {
        //     headers,
        //   });
        //   dispatch(fetchCart());
        //   SuccessToast(response?.data?.message);
        // } catch (error) {
        //   console.log('Error add cart products:', error.response);
        //   ErrorToast(error?.response?.data?.message);
        //   // throw error;
        // }
    },
);

export const updateToCart = createAsyncThunk(
    'updateToCart',
    async ({ cartId, quantity, dispatch }, thunkAPI) => {
        // try {
        //     let token = await AsyncStorage.getItem('logFeller_Token');
        //     const data = {
        //         cart_id: cartId,
        //         quantity: quantity,
        //     };
        //     const headers = {
        //         Authorization: `Bearer ${token}`,
        //     };
        //     const response = await axios.post(`${BaseUrl}update-cart`, data, {
        //         headers,
        //     });
        //     dispatch(fetchCart());
        //     SuccessToast(response?.data?.message);
        // } catch (error) {
        //     console.log('Error update cart products:', error.response.data.message);
        //     ErrorToast(error?.response?.data?.message);
        //     // throw error;
        // }
    },
);

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: builder => {
        builder.addCase(fetchCart.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCart.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default cartSlice.reducer;
