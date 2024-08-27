import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import "../Styles/wishlist.css";
import { RiDeleteBinLine } from "react-icons/ri";

function Wishlist() {
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
                <div className="main-heading mb-20">My wishlist</div>
                <div className="table-wishlist">
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
                      <tr>
                        <td width="45%">
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src="images/product2.webp"                                alt=""
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">Diamond Ring</div>
                          </div>
                        </td>
                        <td width="15%" className="price">
                          $110.00
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
                          <a href="#" className="trash-icon">
                            <RiDeleteBinLine />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="45%">
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src="images/product2.webp"                                alt=""
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">Diamond Ring</div>
                          </div>
                        </td>
                        <td width="15%" className="price">
                          $110.00
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
                          <a href="#" className="trash-icon">
                            <RiDeleteBinLine />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="45%">
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src="images/product2.webp"
                                alt=""
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">Diamond Ring</div>
                          </div>
                        </td>
                        <td width="15%" className="price">
                          $110.00
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
                          <a href="#" className="trash-icon">
                            <RiDeleteBinLine />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="45%">
                          <div className="display-flex align-center">
                            <div className="img-product">
                              <img
                                src="images/product2.webp"
                                alt=""
                                className="mCS_img_loaded"
                              />
                            </div>
                            <div className="name-product">Diamond Ring</div>
                          </div>
                        </td>
                        <td width="15%" className="price">
                          $110.00
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
                          <a href="#" className="trash-icon">
                            <RiDeleteBinLine />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
