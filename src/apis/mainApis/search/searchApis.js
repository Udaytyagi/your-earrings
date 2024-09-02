import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchSearchApi = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}search/product`, data);
        return response;
    } catch (error) {
        return null;
    }
};