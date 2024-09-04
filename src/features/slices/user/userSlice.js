import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserApi } from '../../../apis/mainApis/user/userApis';

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    try {
        const response = await fetchUserApi();
        return response?.data?.data;
    } catch (error) {
        return null;
    }
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        isLoginModal: false,
    },
    reducers: {
        openLoginModal: (state) => {
            state.isLoginModal = true;
        },
        closeLoginModal: (state) => {
            state.isLoginModal = false;
        },
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

export const { openLoginModal, closeLoginModal } = userSlice.actions;
export default userSlice.reducer;