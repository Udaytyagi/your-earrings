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

function Wishlist() {
  const dispatch = useDispatch();
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
                {wishlists && wishlists.length > 0 ? <div className="main-heading mb-20">My wishlist</div> : <div className="main-heading mb-20 d-flex justify-content-center">Your Wishlist is empty</div>}
                {
                  wishlists && wishlists.length > 0 ? <div className="table-wishlist">
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      border={0}
                      width="100%"
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
                                <a href="#" className="trash-icon">
                                  <span className="in-stock-box">View Item</span>
                                </a>
                              </td>
                              <td width="15%">
                                <button className="round-black-btn small-btn">
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
