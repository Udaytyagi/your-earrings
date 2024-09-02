import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchBlogApi = async () => {
    try {
        const response = await axios.post(`${baseUrl}fetch/blogs/list`, {});
        return response;
    } catch (error) {
        return null;
    }
};

export const fetchSingleBlogApi = async (slug) => {
    try {
        const response = await axios.post(`${baseUrl}get/blog/${slug}`, {});
        return response;
    } catch (error) {
        return null;
    }
};