import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWishlist = createAsyncThunk("fetchWishlist", async () => {
    //   try {
    //     const response = await fetchWishListApi();
    //     return response?.data?.data;
    //   } catch (error) {
    //     console.log("Error fetching wishlist products:", error.response);
    //     throw error;
    //   }
});

export const removeFromWishlist = createAsyncThunk(
    "removeFromWishlist",
    async (productId) => {
        // try {
        //     const response = await removeWishlistApi(productId);
        //     toast(response.data.message);
        // } catch (error) {
        //     toast(error.response.data.message);
        //     console.log("Error add to wishlist products:", error.response);
        //     throw error;
        // }
    }
);

export const addToWishlist = createAsyncThunk(
    "addToWishlist",
    async (productId) => {
        // try {
        //     const response = await addWishlist(productId);
        //     // console.log("add to wishlist", response);
        //     toast(response.data.message);
        // } catch (error) {
        //     console.log("Error add to wishlist products:", error.response);
        //     throw error;
        // }
    }
);
const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWishlist.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default wishlistSlice.reducer;
