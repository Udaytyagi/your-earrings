import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster"

export const fetchProductDetailApi = async (data, variationId) => {
  try {
    if (data.shape || data.setting || data.metal || data.size || data.type) {
      const response = await axios.post(
        `${baseUrl}fetch/product/variation`,
        data
      );
      return response;
    } else {
      const response = await axios.post(
        `${baseUrl}fetch/product/variation/${variationId}`,
        data
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
