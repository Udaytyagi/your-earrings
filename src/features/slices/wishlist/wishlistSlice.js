import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWishlistApi, updateWishlistApi } from "../../../apis/mainApis/wishlist/wishlistApis";

export const fetchWishlist = createAsyncThunk("fetchWishlist", async () => {
    try {
        const response = await fetchWishlistApi();
        return response?.data?.data;
    } catch (error) {
        return null;
    }
});

export const updateHomeWishlist = createAsyncThunk(
    "updateHomeWishlist",
    async (data, { dispatch }) => {
        await updateWishlistApi(data);
        dispatch(fetchWishlist());
    }
);

export const updateWishlist = createAsyncThunk(
    "updateWishlist",
    async (data, { dispatch }) => {
        await updateWishlistApi(data);
        dispatch(fetchWishlist());
    }
);


const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        isLoading: false,
        isUpdatingHome: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        // Fetch wishlist
        builder.addCase(fetchWishlist.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchWishlist.fulfilled, (state, action) => {

            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchWishlist.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // UpdateHome wishlist
        builder.addCase(updateHomeWishlist.fulfilled, (state) => {
            state.isUpdatingHome = !state.isUpdatingHome;
        });
    },
});

export default wishlistSlice.reducer;
