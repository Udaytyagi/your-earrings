import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { SuccessToaster, ErrorToaster } from "../../../components/Toaster";

export const createOrderApi = async (data, setLoading, navigate) => {
    setLoading(true)
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}order/create`, data, { headers });
        // console.log("response from createOrderApi", response?.data?.response?.url)
        SuccessToaster(response.data.message)
        if (data.payment_method === "cod") {
            navigate("/")
        } else if (data.payment_method === "world_pay") {
            window.location.href = response?.data?.response?.url;
        }
        setLoading(false)
        return response;
    } catch (error) {
        ErrorToaster(error.response.data.message)
        setLoading(false)
        return null;
    }
};

export const fetchOrderApi = async (setLoading) => {
    setLoading(true)
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}order-list`, {}, { headers });
        setLoading(false)
        return response;
    } catch (error) {
        setLoading(false)
        return null;
    }
};

export const fetchOrderDetailApi = async (data, setLoading, setOrderDetail, setOrderAddress) => {
    setLoading(true)
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}order-items-fetch`, data, { headers });
        setLoading(false)
        setOrderDetail(response.data.data.item_info)
        setOrderAddress(response.data.data.shipping_details)
    } catch (error) {
        setLoading(false)
        return null;
    }
};

export const orderStatusApi = async (data) => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        await axios.post(`${baseUrl}fetch-payment-details`, data, { headers });
    } catch (error) {
        return null;
    }
};