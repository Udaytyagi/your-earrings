import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";

export const fetchProductDetailApi = async (variationId) => {
  try {
    const response = await axios.post(
      `${baseUrl}fetch/product/variation/${variationId}`,
      {}
    );
    return response;
  } catch (error) {
    return null;
  }
};
