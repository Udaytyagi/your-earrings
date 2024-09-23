import axios from "axios";
import { baseUrl } from "../../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from "../../../components/Toaster"

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
