import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ element: Element, ...restOfProps }) {
    const user = useSelector(state => state?.user?.data);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Element {...restOfProps} />;
}

export default ProtectedRoute;
