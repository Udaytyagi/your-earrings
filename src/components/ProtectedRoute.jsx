import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ element: Element, ...restOfProps }) {
    const { user, loading } = useSelector(state => ({
        user: state.user.data,
        loading: state.user.isLoading
    }));

    if (loading) {
        return <div className="d-flex align-items-center justify-content-center">Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Element {...restOfProps} />;
}

export default ProtectedRoute;