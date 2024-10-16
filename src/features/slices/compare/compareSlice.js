import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { compareApi } from "../../../apis/mainApis/compare/compareApis";

export const fetchCompareProduct = createAsyncThunk(
    "fetchCompareProduct",
    async (data) => {
        try {
            const response = await compareApi(data);
            return response?.data?.data?.product_varition_details;
        } catch (error) {
            return null;
        }
    }
);


const compareSlice = createSlice({
    name: "compareProduct",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompareProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCompareProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCompareProduct.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default compareSlice.reducer;
