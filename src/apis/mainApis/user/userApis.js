import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

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