import { useState } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import "../Styles/dashboard.css";
import { FaAngleRight } from "react-icons/fa6";

function Account() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleMenuClick = (data) => {
    setActiveMenu(data);
  };

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
              <li className="account__menu--list">
                <a
                  href="dashboard"
                  onClick={() => handleMenuClick("Dashboard")}
                  className={activeMenu === "Dashboard" ? "active" : ""}
                >
                  Dashboard
                </a>
              </li>
              <li className="account__menu--list">
                <a
                  href="profile"
                  onClick={() => handleMenuClick("Profile")}
                  className={activeMenu === "Profile" ? "active" : ""}
                >
                  My Profile
                </a>
              </li>
              <li className="account__menu--list">
                <a
                  href="my-account"
                  onClick={() => handleMenuClick("Addresses")}
                  className={activeMenu === "Addresses" ? "active" : ""}
                >
                  Addresses
                </a>
              </li>
              <li className="account__menu--list">
                <a
                  href="wishlist"
                >
                  Wishlist
                </a>
              </li>
              <li className="account__menu--list">
                <a
                  href="login"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
          <div className="account__wrapper">
            <div className="account__content">
              <div className="adreress-right dashboard">
                {/* Table content remains the same */}
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
                        #2024
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
                        Fulfilled
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
                        $44.00 USD
                      </td>
                    </tr>
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
                        #2164
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
                        $36.00 USD
                      </td>
                    </tr>
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
                        #2345
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
                        $87.00 USD
                      </td>
                    </tr>
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
                        #1244
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
                        Fulfilled
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
                        $66.00 USD
                      </td>
                    </tr>
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
                        #3455
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
                        Fulfilled
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
                        $55.00 USD
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Account;
