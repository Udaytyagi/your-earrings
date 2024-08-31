import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchFilterApi = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}fetch/all/filters/earrings`, data);
        return response;
    } catch (error) {
        return null;
    }
};