import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { SuccessToaster, ErrorToaster } from "../../../components/Toaster";

export const fetchPagesApi = async (setLoading) => {
    setLoading(true)
    try {
        const response = await axios.post(`${baseUrl}fetch/pages/list`, {});
        setLoading(false)
        return response?.data?.data?.Pages_list;
    } catch (error) {
        setLoading(false)
        return null;
    }
};

export const contactUsApi = async (data, setLoading, setFormData) => {
    setLoading(true)
    try {
        const response = await axios.post(`${baseUrl}post/inquiry/details`, data);
        setLoading(false)
        SuccessToaster(response.data.message)
        setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
        ErrorToaster(error.response.data.message)
        setLoading(false)
        return null;
    }
};

export const newsLetterApi = async (data, setEmail, setSuccessfulSignUp) => {
    try {
        const response = await axios.post(`${baseUrl}subscribe/newsletter`, data);
        setSuccessfulSignUp(true)
        SuccessToaster(response.data.message)
        setEmail("");
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    }
};