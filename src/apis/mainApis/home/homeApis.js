import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchHomeDataApi = async () => {
    try {
        const response = await axios.post(`${baseUrl}fetch/collection/list`);
        return response;
    } catch (error) {
        return null;
    }
};