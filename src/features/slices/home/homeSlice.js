import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHomeDataApi } from "../../../apis/mainApis/home/homeApis";

export const fetchHomeProducts = createAsyncThunk(
    "fetchHomeProducts",
    async () => {
        try {
            const response = await fetchHomeDataApi();
            return response?.data?.data;
        } catch (error) {
            return null;
        }
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
