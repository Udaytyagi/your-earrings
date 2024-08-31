import { PiShoppingCartSimple } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { AiOutlineLogin } from "react-icons/ai";
import "../../Styles/navbarmid.css";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

const Navbarmid = () => {
  const user = useSelector(state => state?.user?.data);
  const wishlists = useSelector(state => state?.wishlist?.data?.Wishlist_product);
  const navigate = useNavigate()

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
                <div onClick={() => navigate('/wishlist')} className="position-relative">
                  <IoIosHeartEmpty />
                  {
                    wishlists && wishlists.length || user?.user_record?.wishlist_count ? <div className="wishlist-count d-flex justify-content-center align-items-center">
                      {wishlists && wishlists.length || user?.user_record?.wishlist_count}
                    </div> : ""
                  }
                </div>
                <div onClick={() => navigate('/cart')}>
                  <PiShoppingCartSimple />
                </div>
                {
                  user ? <div onClick={() => navigate('/dashboard')}>
                    <HiOutlineUser />
                  </div> : <div onClick={() => navigate('/login')}>
                    <AiOutlineLogin />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbarmid;
