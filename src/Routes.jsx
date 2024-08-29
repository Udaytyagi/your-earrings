import { createBrowserRouter, RouterProvider } from "react-router-dom";
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Signup />,
  },
  {
    path: "/diamond",
    element: <Diamond />,
  },
  {
    path: "/single-products",
    element: <SingleProducts />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/my-orders",
    element: <Orders />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/my-account",
    element: <Account />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
