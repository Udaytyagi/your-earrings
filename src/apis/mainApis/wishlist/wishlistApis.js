import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster"


export const fetchWishlistApi = async () => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}fetch/wishlist/product`, {}, { headers });
        return response;
    } catch (error) {
        return null;
    }
};

export const updateWishlistApi = async (data) => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}add/remove/wishlist/product`, data, { headers });
        SuccessToaster(response.data.message)
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    }
};