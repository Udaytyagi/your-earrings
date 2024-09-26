import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster"

export const fetchProductDetailApi = async (data, variationId) => {
  try {
    const token = localStorage.getItem('earringsToken')
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    if (data.shape || data.setting || data.metal || data.size || data.type) {
      const response = await axios.post(
        `${baseUrl}fetch/product/variation`,
        data, { headers }
      );
      return response;
    } else {
      const response = await axios.post(
        `${baseUrl}fetch/product/variation/${variationId}`,
        data, { headers }
      );
      return response;
    }
  } catch (error) {
    return null;
  }
};

export const fetchCouponApi = async (variationId, couponId) => {
  try {
    const response = await axios.post(
      `${baseUrl}discount/product/${variationId}/${couponId}`,
      {}
    );
    SuccessToaster(response.data.message)
    return response;
  } catch (error) {
    return null;
  }
};


export const addReviewApi = async (data, setRating, setDescription, setReviewImages) => {
  try {
    const token = localStorage.getItem('earringsToken')
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(
      `${baseUrl}add/review`,
      data, { headers }
    );
    SuccessToaster(response.data.message)
    setRating("")
    setDescription("")
    setReviewImages([])
    return response;
  } catch (error) {
    ErrorToaster(error.response.data.message)
    return null;
  }
};
