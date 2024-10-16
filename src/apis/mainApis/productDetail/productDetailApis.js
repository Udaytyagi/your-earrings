import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster"

export const fetchProductDetailApi = async (data, variationId) => {
  try {
    const token = localStorage.getItem('earringsToken')
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(
      `${baseUrl}fetch/product/variation/${variationId}`,
      data, { headers }
    );
    return response;
  } catch (error) {
    return null;
  }
};

export const fetchVariationProductDetailApi = async (data, navigate) => {
  try {
    const token = localStorage.getItem('earringsToken')
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.post(
      `${baseUrl}fetch/product/variation`,
      data, { headers }
    );
    navigate(`/${response?.data?.product?.Product_info.Slug}?vId=${response?.data?.product?.Product_info?.Already_selected_filter?.v_Id}`);
    return response;
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
