import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster"

export const fetchCartApi = async () => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}fetch/cart/details`, {}, { headers });
        return response;
    } catch (error) {
        return null;
    }
};

export const deleteAddCartApi = async (data, variationId) => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}add/to/cart/${variationId}`, data, { headers });
        SuccessToaster(response.data.message)
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    }
};

export const updateCartQuantityApi = async (data) => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}increase/cart/quantity`, data, { headers });
        SuccessToaster(response.data.message)
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    }
};