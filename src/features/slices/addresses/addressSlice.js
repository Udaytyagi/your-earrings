import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAddressApi, addAddressApi, deleteAddressApi, updateAddressApi } from "../../../apis/mainApis/address/addressApis";

export const fetchAddress = createAsyncThunk(
    "fetchAddress",
    async () => {
        try {
            const response = await fetchAddressApi();
            return response?.data?.data;
        } catch (error) {
            return null;
        }
    }
);

export const addAddress = createAsyncThunk(
    "addAddress",
    async ({ data, setLoading, closePopup }, { dispatch }) => {
        try {
            await addAddressApi(data, setLoading, closePopup);
            dispatch(fetchAddress())
        } catch (error) {
            return null;
        }
    }
);

export const deleteAddress = createAsyncThunk(
    "deleteAddress",
    async ({ selectedAddressId, setSelectedAddressId }, { dispatch }) => {
        try {
            await deleteAddressApi(selectedAddressId, setSelectedAddressId);
            dispatch(fetchAddress())
        } catch (error) {
            return null;
        }
    }
);

export const updateAddress = createAsyncThunk(
    "updateAddress",
    async ({ selectedAddressId, data, setLoading, closeEditPopup }, { dispatch }) => {
        try {
            await updateAddressApi(selectedAddressId, data, setLoading, closeEditPopup);
            dispatch(fetchAddress())
        } catch (error) {
            return null;
        }
    }
);


const addressSlice = createSlice({
    name: "address",
    initialState: {
        isLoading: false,
        data: [],
        singleAddress: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAddress.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAddress.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAddress.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
export default addressSlice.reducer;
