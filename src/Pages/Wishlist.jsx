import { useEffect } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import "../Styles/wishlist.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { fetchWishlist } from "../features/slices/wishlist/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../features/slices/wishlist/wishlistSlice";
import { updateCart } from "../features/slices/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const wishlists = useSelector(state => state?.wishlist?.data?.Wishlist_product);


  useEffect(() => {
    dispatch(fetchWishlist())
  }, [dispatch])

  const handleUpdateWishlist = (variationId) => {
    const data = {
      variation_id: variationId
    }
    dispatch(updateWishlist(data))
  }

  const handleAddToCart = (variationId) => {
    const data = {
      coupon_id: "",
      action: "add"
    }
    dispatch(updateCart({ data: data, variationId: variationId }))
  }

  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />

      <Breadcrumb
        heading="Wishlist"
        image="/images/earrings-bg.png"

      />

      <>
        <div className="cart-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {wishlists && wishlists.length > 0 ? <div className="main-heading mb-20">My Wishlist</div> : <h1 className="main-heading mb-20 d-flex justify-content-center fw-bold">Your wishlist is empty</h1>}
                {
                  wishlists && wishlists.length > 0 ? <div className="table-wishlist">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      border={0}
                      width="100%"
                      className="wishlist-table-desktop"
                    >
                      <thead>
                        <tr>
                          <th width="45%">Product Name</th>
                          <th width="15%">Price</th>
                          <th width="15%">View Item</th>
                          <th width="15%" />
                          <th width="10%" />
                        </tr>
                      </thead>
                      <tbody>
                        {
                          wishlists.map((wishlist, i) => (
                            <tr key={i}>
                              <td width="45%">
                                <div className="display-flex align-center">
                                  <div className="img-product">
                                    <img
                                      src={wishlist.Image || "images/product2.webp"} alt=""
                                      className="mCS_img_loaded"
                                    />
                                  </div>
                                  <div className="name-product">{wishlist?.Name}</div>
                                </div>
                              </td>
                              <td width="15%" className="price">
                                ${wishlist?.Sale_price}
                              </td>
                              <td width="15%">
                                <span className="in-stock-box" onClick={() => navigate(`/${wishlist.Slug}?vId=${wishlist.Variation_id}`)}>View Item</span>
                              </td>
                              <td width="15%">
                                <button className="round-black-btn small-btn" onClick={() => handleAddToCart(wishlist?.Variation_id)}>
                                  Add to Cart
                                </button>
                              </td>
                              <td width="10%" className="text-center">
                                <div className="trash-icon" onClick={() => handleUpdateWishlist(wishlist.Variation_id)}>
                                  <RiDeleteBinLine />
                                </div>
                              </td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </table>

                    <div className="cart-mobile">
                      {
                        wishlists.map((wishlist, i) => (
                          <div className="row shadow-mobile" key={i}>
                            <div className="col-4 d-flex justify-content-center align-items-start">
                              <img
                                src={wishlist.Image || "images/product2.webp"}
                                alt="images"
                                className="img-fluid"
                              />
                            </div>
                            <div className="col-8">
                              <p className="cart-mobile-name mb-1" style={{
                                // whiteSpace: "nowrap",
                                // overflow: "hidden",
                                // textOverflow: "ellipsis",
                              }}>{wishlist?.Name}</p>

                              <span className="in-stock-box me-2" onClick={() => navigate(`/${wishlist.Slug}?vId=${wishlist.Variation_id}`)}>View Item</span>
                              <button className="round-black-btn small-btn" onClick={() => handleAddToCart(wishlist?.Variation_id)}>
                                Add to Cart
                              </button>
                              <div className="trash-icon" onClick={() => handleUpdateWishlist(wishlist.Variation_id)}>
                                <RiDeleteBinLine />
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div> : <div className="d-flex justify-content-center"><img src='/images/wishlist_empty.png' alt='wishlist-empty'></img></div>
                }
              </div>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
}

export default Wishlist;
