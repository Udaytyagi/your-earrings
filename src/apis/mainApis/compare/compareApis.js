import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster"

export const compareApi = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}compare/products`, data);
        return response;
    } catch (error) {
        return null;
    }
};
