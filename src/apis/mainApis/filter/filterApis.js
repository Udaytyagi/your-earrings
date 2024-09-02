import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchFilterApi = async (data) => {
    try {
        const token = localStorage.getItem('earringsToken')
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axios.post(`${baseUrl}fetch/all/filters/earrings`, data, { headers });
        return response;
    } catch (error) {
        return null;
    }
};