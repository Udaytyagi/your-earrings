import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlogApi, fetchSingleBlogApi } from "../../../apis/mainApis/blog/blogApis";

export const fetchBlog = createAsyncThunk(
    "fetchBlog",
    async () => {
        try {
            const response = await fetchBlogApi();
            return response?.data?.data;
        } catch (error) {
            return null;
        }
    }
);

export const fetchSingleBlog = createAsyncThunk(
    "fetchSingleBlog",
    async (slug) => {
        try {
            const response = await fetchSingleBlogApi(slug);
            return response?.data?.data;
        } catch (error) {
            return null;
        }
    }
);

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        isLoading: false,
        data: [],
        singleBlog: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlog.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchBlog.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // single blog
        builder.addCase(fetchSingleBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.singleBlog = action.payload;
        });
    },
});
export default blogSlice.reducer;
