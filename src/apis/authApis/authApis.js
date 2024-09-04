import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from '../../components/Toaster'
import { fetchUser } from "../../features/slices/user/userSlice";
import { fetchWishlist } from "../../features/slices/wishlist/wishlistSlice";
import { fetchCart } from "../../features/slices/cart/cartSlice";


export const loginApi = async (data, setLoading, dispatch, navigate, setOpenLoginModal) => {
    setLoading(true)
    try {
        const response = await axios.post(`${baseUrl}auth/login`, data);
        localStorage.setItem("earringsToken", response.data.data.token);
        dispatch(fetchUser());
        dispatch(fetchWishlist());
        dispatch(fetchCart());
        navigate('/');
        SuccessToaster(response?.data?.message)
        setOpenLoginModal(false)
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    } finally {
        setLoading(false)
    }
};

export const signUpApi = async (data, setLoading, navigate) => {
    setLoading(true);
    try {
        const response = await axios.post(`${baseUrl}auth/register`, data);
        SuccessToaster(response.data.message);
        navigate('/login');
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    } finally {
        setLoading(false)
    }
};

export const forgotPasswordApi = async (data, setLoading, navigate) => {
    setLoading(true);
    try {
        const response = await axios.post(`${baseUrl}auth/forgot/password`, data);
        SuccessToaster(response.data.message);
        navigate('/otp-verification');
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    } finally {
        setLoading(false)
    }
};

export const otpVerificationApi = async (data, setLoading, navigate) => {
    setLoading(true);
    try {
        const response = await axios.post(`${baseUrl}auth/otp/verification`, data);
        localStorage.setItem('verifyOtpToken', response?.data?.data?.token)
        SuccessToaster(response.data.message);
        navigate('/new-password');
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    } finally {
        setLoading(false)
    }
};

export const newPasswordApi = async (data, setLoading, navigate) => {
    setLoading(true);
    try {
        const response = await axios.post(`${baseUrl}auth/reset/password`, data);
        SuccessToaster(response.data.message);
        navigate('/login');
    } catch (error) {
        ErrorToaster(error.response.data.message)
        return null;
    } finally {
        setLoading(false)
    }
};

export const logoutApi = async (dispatch, navigate) => {
    localStorage.clear()
    dispatch(fetchUser())
    dispatch(fetchWishlist())
    dispatch(fetchCart())
    navigate('/')
    // try {
    //     const token = localStorage.getItem('earringsToken')
    //     const headers = {
    //         Authorization: `Bearer ${token}`,
    //     };
    //     const response = await axios.post(`${baseUrl}logout`, headers);
    //     localStorage.clear()
    //     dispatch(fetchUser());
    //     navigate('/');
    //     SuccessToaster(response?.data?.message)
    // } catch (error) {
    //     ErrorToaster(error.response.data.message)
    //     return null;
}
