import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeProducts = createAsyncThunk(
    "fetchHomeProducts",
    async (userId) => {
        // try {
        //     const response = await homeProductApi(userId);
        //     return response?.data?.data?.homeProduct;
        // } catch (error) {
        //     return null;
        // }
    }
);

const homeSlice = createSlice({
    name: "homeProducts",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomeProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchHomeProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchHomeProducts.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export default homeSlice.reducer;
