import { useState, useRef, useEffect } from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { AiOutlineLogin } from "react-icons/ai";
import "../../Styles/navbarmid.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { fetchSearchApi } from "../../apis/mainApis/search/searchApis";
import debounce from 'debounce';
import { openLoginModal } from "../../features/slices/user/userSlice";
import LoginModal from "../../components/LoginModal";
import { MdDehaze } from "react-icons/md";
import SidebarNavbar from "../../components/SidebarNavbar";

const Navbarmid = () => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector(state => state?.user?.data);
  const wishlists = useSelector(state => state?.wishlist?.data?.Wishlist_product);
  const carts = useSelector(state => state?.cart?.data?.Cart_info?.product_info);
  const [searchData, setSearchData] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false)
  const [updatePage, setUpdatePage] = useState(false)
  const [show, setShow] = useState(false)


  useEffect(() => {
    setUpdatePage(!updatePage)
  }, [wishlists, carts])

  const debouncedSearch = debounce(async (query) => {
    if (query.length >= 1) {
      setLoading(true);
      try {
        const response = await fetchSearchApi({ title: query });
        setSearchData(response?.data?.data?.Search_product || []);
      } finally {
        setLoading(false);
      }
    } else {
      setSearchData([]);
    }
  }, 300);

  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleWishlist = () => {
    if (user) {
      navigate('/wishlist');
    } else {
      setOpenLoginModal(true)
    }
  }

  const handleCart = () => {
    if (user) {
      navigate('/cart')
    } else {
      setOpenLoginModal(true)
    }
  }

  return (
    <>
      <SidebarNavbar show={show} setShow={setShow} />
      <LoginModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} />
      <section className="navbarmid d-md-none d-block">
        <div className="container">
          <div className="row d-flex align-items-center mb-3">

            <div className="col-1" onClick={() => setShow(true)}>
              <MdDehaze style={{ fontSize: "25px" }} />
            </div>

            <div className="col-1">
            </div>

            <div className="col-6" onClick={() => navigate('/')}>
              <div className="logo" style={{ cursor: "pointer" }}>
                <img className="img-fluid" src="/images/logo.png" alt="Logo" />
              </div>
            </div>

            <div className="col-3">
            </div>

            <div className="col-1">
              <div className="cart d-flex align-items-center justify-content-end">
                <div onClick={() => handleWishlist()} className="position-relative" style={{ cursor: "pointer" }}>
                  <IoIosHeartEmpty />
                  {
                    wishlists && wishlists.length > 0 && <div className="wishlist-count d-flex justify-content-center align-items-center">
                      {wishlists.length}
                    </div>
                  }
                </div>
                <div onClick={() => handleCart()} className="position-relative" style={{ cursor: "pointer" }}>
                  <PiShoppingCartSimple />
                  {
                    carts && carts.length > 0 && <div className="wishlist-count d-flex justify-content-center align-items-center">
                      {carts.length}
                    </div>
                  }
                </div>
                {
                  user ? <div onClick={() => navigate('/dashboard/profile')} style={{ cursor: "pointer" }}>
                    <HiOutlineUser />
                  </div> : <div onClick={() => navigate('/login')}>
                    <HiOutlineUser />
                  </div>
                }
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="search" ref={searchRef}>
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    debouncedSearch(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                />
                <button type="submit" className="searchButton">
                  Search
                </button>
                {showDropdown && searchData && searchData?.length > 0 && (
                  <div className="searchDropdown" ref={dropdownRef}>
                    {loading && <div className="loading">Loading...</div>}
                    {searchData?.map(item => (
                      <div key={item.variation_id} className="searchItem" onClick={() => navigate(`/${item.slug}?vId=${item.variation_id}`)}>
                        {item.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Desktop navbar */}
      <section className="navbarmid d-md-block d-none">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-2 col-md-3" onClick={() => navigate('/')}>
              <div className="logo" style={{ cursor: "pointer" }}>
                <img className="img-fluid" src="/images/logo.png" alt="Logo" />
              </div>
            </div>

            <div className="col-lg-1 d-lg-block d-none"></div>
            <div className="col-md-6">
              <div className="search" ref={searchRef}>
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    debouncedSearch(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                />
                <button type="submit" className="searchButton">
                  Search
                </button>
                {showDropdown && searchData && searchData?.length > 0 && (
                  <div className="searchDropdown" ref={dropdownRef}>
                    {loading && <div className="loading">Loading...</div>}
                    {searchData?.map(item => (
                      <div key={item.variation_id} className="searchItem" onClick={() => navigate(`/${item.slug}?vId=${item.variation_id}`)}>
                        {item.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-1"></div>

            <div className="col-md-2">
              <div className="cart d-flex align-items-center justify-content-end">
                <div onClick={() => handleWishlist()} className="position-relative" style={{ cursor: "pointer" }}>
                  <IoIosHeartEmpty />
                  {
                    wishlists && wishlists.length > 0 && <div className="wishlist-count d-flex justify-content-center align-items-center">
                      {wishlists.length}
                    </div>
                  }
                </div>
                <div onClick={() => handleCart()} className="position-relative" style={{ cursor: "pointer" }}>
                  <PiShoppingCartSimple />
                  {
                    carts && carts.length > 0 && <div className="wishlist-count d-flex justify-content-center align-items-center">
                      {carts.length}
                    </div>
                  }
                </div>
                {
                  user ? <div onClick={() => navigate('/dashboard/profile')} style={{ cursor: "pointer" }}>
                    <HiOutlineUser />
                  </div> : <div onClick={() => navigate('/login')}>
                    <HiOutlineUser />
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
