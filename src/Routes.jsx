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
        <Cart />
      </ScrollToTop>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ScrollToTop>
        <Wishlist />
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
    path: "/blog",
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
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
