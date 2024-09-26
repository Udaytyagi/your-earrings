import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchBlogApi = async (setLoading) => {
    setLoading(true)
    try {
        const response = await axios.post(`${baseUrl}fetch/blogs/list`, {});
        setLoading(false)
        return response;
    } catch (error) {
        setLoading(false)
        return null;
    }
};

export const fetchSingleBlogApi = async (slug, setLoading) => {
    setLoading(true)
    try {
        const response = await axios.post(`${baseUrl}get/blog/${slug}`, {});
        setLoading(false)
        return response;
    } catch (error) {
        setLoading(false)
        return null;
    }
};