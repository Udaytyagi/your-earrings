import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUser = createAsyncThunk("fetchUser", async () => {
    // try {
    //     const response = await fetchUserApi();
    //     return response?.data?.data?.user;
    // } catch (error) {
    //     return null;
    // }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});


export default userSlice.reducer;