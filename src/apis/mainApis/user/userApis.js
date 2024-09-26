import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { SuccessToaster, ErrorToaster } from "../../../components/Toaster";

export const fetchUserApi = async () => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(`${baseUrl}fetch/profile`, { headers });
        return response;
    } catch (error) {
        return null;
    }
};

export const updateUserProfileApi = async (data) => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}update/profile`, data, { headers });
        SuccessToaster(response.data.message)
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    }
};

export const updateUserProfilePicApi = async (data) => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}update/profile/picture`, data, { headers });
        SuccessToaster(response.data.message)
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    }
};