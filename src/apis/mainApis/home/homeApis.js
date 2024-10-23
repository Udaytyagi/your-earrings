import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster } from "../../../components/Toaster";

export const fetchHomeDataApi = async () => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}fetch/collection/list`, {}, { headers });
        return response;
    } catch (error) {
        return null;
    }
};

export const fetchOfferBannerApi = async (setLoadingImage) => {
    setLoadingImage(true)
    try {
        const response = await axios.get(`${baseUrl}discount/offer/ad`, {});
        setLoadingImage(false)
        return response;
    } catch (error) {
        setLoadingImage(false)
        return null;
    }
};

export const offerBannerSignUpApi = async (data, setEmail, setSuccessfulSignUp, setLoading, setOfferImageAfterSignUp) => {
    setLoading(true)
    try {
        const response = await axios.post(`${baseUrl}subscribe/newsletter`, data)
        setSuccessfulSignUp(true)
        setOfferImageAfterSignUp(response.data.offerImage)
        // SuccessToaster(response.data.message)
        setEmail("");
        setLoading(false)
    } catch (error) {
        // ErrorToaster(error.response.data.message)
        setLoading(false)
        return null;
    }
};
