import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserApi, updateUserProfileApi, updateUserProfilePicApi } from '../../../apis/mainApis/user/userApis';

export const fetchUser = createAsyncThunk("fetchUser", async () => {
    try {
        const response = await fetchUserApi();
        return response?.data?.data;
    } catch (error) {
        return null;
    }
});

export const updateUserProfile = createAsyncThunk("updateUserProfile", async (data, { dispatch }) => {
    try {
        await updateUserProfileApi(data);
        dispatch(fetchUser())
    } catch (error) {
        return null;
    }
});

export const updateUserProfilePic = createAsyncThunk("updateUserProfilePic", async (data, { dispatch }) => {
    try {
        await updateUserProfilePicApi(data);
        dispatch(fetchUser())
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
        compareLength: 0
    },
    reducers: {
        openLoginModal: (state) => {
            state.isLoginModal = true;
        },
        closeLoginModal: (state) => {
            state.isLoginModal = false;
        },
        setCompareLength: (state,action) => {
            state.compareLength = action.payload;
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

export const { openLoginModal, closeLoginModal, setCompareLength } = userSlice.actions;
export default userSlice.reducer;