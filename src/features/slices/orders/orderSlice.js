import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrderApi } from "../../../apis/mainApis/order/orderApis";

export const fetchOrders = createAsyncThunk(
    "fetchOrders",
    async (setLoading) => {
        try {
            const response = await fetchOrderApi(setLoading);
            return response?.data?.data;
        } catch (error) {
            return null;
        }
    }
);

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchOrders.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export default orderSlice.reducer;
