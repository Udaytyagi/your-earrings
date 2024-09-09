import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./homepage/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/authpages/Login";
import Signup from "./Pages/authpages/Signup";
import Diamond from "./Pages/Diamond";
import SingleProducts from "./Pages/SingleProducts";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import Profile from "./Pages/Profile";
import Orders from "./Pages/Orders";
import Blog from "./sections/home/Blog";
import Checkout from "./Pages/Checkout";
import Account from "./Pages/Account";
import Dashboard from "./Pages/Dashboard";
import SingleBlog from "./Pages/SingleBlog";
import ForgotPassword from "./Pages/authpages/ForgotPassword";
import NewPassword from "./Pages/authpages/NewPassword";
import OtpVerification from "./Pages/authpages/OtpVerification";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Home />
      </ScrollToTop>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <ScrollToTop>
        <Contact />
      </ScrollToTop>
    ),
  },
  {
    path: "/login",
    element: (
      <ScrollToTop>
        <Login />
      </ScrollToTop>
    ),
  },
  {
    path: "/register",
    element: (
      <ScrollToTop>
        <Signup />
      </ScrollToTop>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <ScrollToTop>
        <ForgotPassword />
      </ScrollToTop>
    ),
  },
  {
    path: "/new-password",
    element: (
      <ScrollToTop>
        <NewPassword />
      </ScrollToTop>
    ),
  },
  {
    path: "/otp-verification",
    element: (
      <ScrollToTop>
        <OtpVerification />
      </ScrollToTop>
    ),
  },
  {
    path: "/diamond",
    element: (
      <ScrollToTop>
        <Diamond />
      </ScrollToTop>
    ),
  },
  {
    path: "/about-us",
    element: (
      <ScrollToTop>
        <About />
      </ScrollToTop>
    ),
  },
  {
    path: "/cart",
    element: (
      <ScrollToTop>
        <ProtectedRoute element={Cart} />
      </ScrollToTop>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ScrollToTop>
        <ProtectedRoute element={Wishlist} />
      </ScrollToTop>
    ),
  },
  {
    path: "/profile",
    element: (
      <ScrollToTop>
        <Profile />
      </ScrollToTop>
    ),
  },
  {
    path: "/my-orders",
    element: (
      <ScrollToTop>
        <Orders />
      </ScrollToTop>
    ),
  },
  {
    path: "/blogs",
    element: (
      <ScrollToTop>
        <Blog />
      </ScrollToTop>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ScrollToTop>
        <Checkout />
      </ScrollToTop>
    ),
  },
  {
    path: "/my-account",
    element: (
      <ScrollToTop>
        <Account />
      </ScrollToTop>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ScrollToTop>
        <Dashboard />
      </ScrollToTop>
    ),
  },
  {
    path: "/:categoryslug",
    element: (
      <ScrollToTop>
        <SingleProducts />
      </ScrollToTop>
    ),
  },
  {
    path: "/blog/:blogslug",
    element: (
      <ScrollToTop>
        <SingleBlog />
      </ScrollToTop>
    ),
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
