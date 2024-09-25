import { useState } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import "../Styles/dashboard.css";
import { FaAngleRight } from "react-icons/fa6";
import { logoutApi } from "../apis/authApis/authApis";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import MyProfile from "../sections/dashboard/MyProfile";
import MyOrders from "../sections/dashboard/MyOrders";
import MyAddresses from "../sections/dashboard/MyAddresses";


function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const dashboardSection = location.pathname.split('/')[2];

  const handleLogout = () => {
    logoutApi(dispatch, navigate)
  }

  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="Dashboard"
        image="/images/earrings-bg.png"
        para="Explore our exquisite hoop earrings, climbers and
           fashion earrings to find your perfect pair."
      />
      <div className="page-nav container px-0">
        <p>Home</p>
        <FaAngleRight />
        <p>Dashboard</p>
      </div>

      <div className="container px-0 py-5">
        <div className="my__account--section__inner border-radius-10 d-flex">

          <div className="account__left--sidebar">
            <h2 className="account__content--title h3 mb-20">My Profile</h2>
            <ul className="account__menu">
              <li className={`account__menu--list ${dashboardSection === "profile" ? "active" : ""}`} onClick={() => navigate('/dashboard/profile')}>
                My Profile
              </li>
              <li className={`account__menu--list ${dashboardSection === "orders" ? "active" : ""}`} onClick={() => navigate('/dashboard/orders')}>
                My Orders
              </li>
              <li className={`account__menu--list ${dashboardSection === "addresses" ? "active" : ""}`} onClick={() => navigate('/dashboard/addresses')}>
                My Addresses
              </li>
              <li className="account__menu--list" onClick={() => navigate('/wishlist')}>
                My  Wishlist
              </li>
              <li className="account__menu--list" onClick={() => navigate('/wishlist')}>
                My  Cart
              </li>
              <li className="account__menu--list" onClick={() => handleLogout()}>
                Log Out
              </li>
            </ul>
          </div>


          {
            dashboardSection === 'profile' && <MyProfile />
          }
          {
            dashboardSection === 'orders' && <MyOrders />
          }
          {
            dashboardSection === 'addresses' && <MyAddresses />
          }
          {/* <div className="account__wrapper">
            <div className="account__content">
              <div className="adreress-right dashboard">
                <table
                  className="table table-bordered"
                  style={{
                    borderCollapse: "collapse",
                    borderLeft: "1px solid #dee2e6",
                    borderRight: "1px solid #dee2e6",
                    margin: "0px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "1px solid #dee2e6",
                          fontWeight: 600,
                        }}
                      >
                        Order
                      </th>
                      <th
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "1px solid #dee2e6",
                          fontWeight: 600,
                        }}
                      >
                        Date
                      </th>
                      <th
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "1px solid #dee2e6",
                          fontWeight: 600,
                        }}
                      >
                        Payment Status
                      </th>
                      <th
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "1px solid #dee2e6",
                          fontWeight: 600,
                        }}
                      >
                        Fulfillment Status
                      </th>
                      <th
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderTop: "1px solid #dee2e6",
                          fontWeight: 600,
                        }}
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderBottom: "1px solid #dee2e6",
                          fontSize: "15px",
                          padding: "13px 10px",
                        }}
                      >
                        #2014
                      </td>
                      <td
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderBottom: "1px solid #dee2e6",
                          fontSize: "15px",
                          padding: "13px 10px",
                        }}
                      >
                        November 24, 2022
                      </td>
                      <td
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderBottom: "1px solid #dee2e6",
                          fontSize: "15px",
                          padding: "13px 10px",
                        }}
                      >
                        Paid
                      </td>
                      <td
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderBottom: "1px solid #dee2e6",
                          fontSize: "15px",
                          padding: "13px 10px",
                        }}
                      >
                        Unfulfilled
                      </td>
                      <td
                        style={{
                          borderLeft: "none",
                          borderRight: "none",
                          borderBottom: "1px solid #dee2e6",
                          fontSize: "15px",
                          padding: "13px 10px",
                        }}
                      >
                        $40.00 USD
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
