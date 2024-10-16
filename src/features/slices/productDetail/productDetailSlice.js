import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductDetailApi, fetchVariationProductDetailApi } from "../../../apis/mainApis/productDetail/productDetailApis";

export const fetchProductDetail = createAsyncThunk(
  "fetchProductDetail",
  async ({ data, variationId }) => {
    try {
      const response = await fetchProductDetailApi(data, variationId);
      return response?.data?.product;
    } catch (error) {
      return null;
    }
  }
);

export const fetchVariationProductDetail = createAsyncThunk(
  "fetchProductDetail",
  async ({ data, navigate }) => {
    try {
      const response = await fetchVariationProductDetailApi(data, navigate);
      return response?.data?.product;
    } catch (error) {
      return null;
    }
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProductDetail.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export default productDetailSlice.reducer;
