import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

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