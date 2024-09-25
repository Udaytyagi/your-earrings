import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { SuccessToaster, ErrorToaster } from "../../../components/Toaster";

export const fetchAddressApi = async () => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}fetch/shipping/details`, {}, { headers });
        return response;
    } catch (error) {
        return null;
    }
};

export const addAddressApi = async (data, setLoading, closePopup) => {
    setLoading(true)
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}add/shpping/address`, data, { headers });
        SuccessToaster(response.data.message)
        setLoading(false)
        closePopup()
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        setLoading(false)
        return null;
    }
};

export const deleteAddressApi = async (selectedAddressId, setSelectedAddressId) => {

    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}delete/shpping/address/${selectedAddressId}`, {}, { headers });
        setSelectedAddressId("")
        SuccessToaster(response.data.message)
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    }
};


export const updateAddressApi = async (selectedAddressId, data, setLoading, closeEditPopup) => {
    setLoading(true)
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}update/shpping/address/${selectedAddressId}`, data, { headers });
        SuccessToaster(response.data.message)
        setLoading(false)
        closeEditPopup()
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        setLoading(false)
        return null;
    }
};