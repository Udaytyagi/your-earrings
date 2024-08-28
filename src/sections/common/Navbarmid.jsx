import { PiShoppingCartSimple } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { AiOutlineLogin } from "react-icons/ai";
import "../../Styles/navbarmid.css";

const Navbarmid = () => {
  return (
    <>
      <section className="navbarmid">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-2">
              <a href="/">
                <div className="logo">
                  <img className="img-fluid" src="/images/logo.png" alt="Logo" />
                </div>
              </a>

            </div>

            <div className="col-md-1"></div>

            <div className="col-md-6">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                />
                <button type="submit" className="searchButton">
                  Search
                </button>
              </div>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-2">
              <div className="cart d-flex align-items-center justify-content-end">
                <a href="wishlist">
                  <IoIosHeartEmpty />
                </a>
                <a href="cart">
                  {" "}
                  <PiShoppingCartSimple />
                </a>
                <a href="login">
                  {" "}
                  <AiOutlineLogin />
                </a>
                {/* <a href="dashboard">
                  {" "}
                  <HiOutlineUser />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbarmid;
