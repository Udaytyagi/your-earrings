import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCartApi, deleteAddCartApi, updateCartQuantityApi } from '../../../apis/mainApis/cart/cartApis';

export const fetchCart = createAsyncThunk("fetchCart", async () => {
    try {
        const response = await fetchCartApi();
        return response?.data?.data;
    } catch (error) {
        return null;
    }
});


export const updateCart = createAsyncThunk(
    "updateCart",
    async ({ data, variationId }, { dispatch }) => {
        await deleteAddCartApi(data, variationId);
        dispatch(fetchCart());
    }
);

export const updateQuantityCart = createAsyncThunk(
    "updateCartQuantity",
    async (data, { dispatch }) => {
        await updateCartQuantityApi(data);
        dispatch(fetchCart());
    }
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
