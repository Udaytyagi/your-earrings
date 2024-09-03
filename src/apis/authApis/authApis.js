import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { ErrorToaster, SuccessToaster } from '../../components/Toaster'
import { fetchUser } from "../../features/slices/user/userSlice";


export const loginApi = async (data, setLoading, dispatch, navigate) => {
    setLoading(true)
    try {
        const response = await axios.post(`${baseUrl}auth/login`, data);
        localStorage.setItem("earringsToken", response.data.data.token);
        dispatch(fetchUser());
        navigate('/');
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