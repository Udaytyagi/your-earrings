import React, { useEffect, useRef, createRef, useState } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import "../Styles/singleproducts.css";
import Accordion from "react-bootstrap/Accordion";
import { Rating } from "react-simple-star-rating";
import SingleProductSlider from "../Pages/SingleProductSlider";
import Testimonial from "../sections/home/Testimonial";
import { FaRegHeart } from "react-icons/fa";
import { RiUploadCloud2Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { fetchProductDetail } from "../features/slices/productDetail/productDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const variationId = searchParams.get("vId");
  const dispatch = useDispatch();
  const fileInputRef = createRef();
  const fullScreenRef = useRef();
  const product = useSelector((state) => state.productDetail.data);
  const { All_available_filter } = product && product;

  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedSettingId, setSelectedSettingId] = useState(null);
  const [selectedMetalId, setSelectedMetalId] = useState(null);
  const [selectedSizeId, setSelectedSizeId] = useState(null);

  useEffect(() => {
    dispatch(fetchProductDetail(variationId));
  }, [variationId, dispatch]);

  useEffect(() => {
    if (product) {
      const { Already_selected_filter } = product;
      setSelectedShapeId(Already_selected_filter?.shape?.id || null);
      setSelectedSettingId(Already_selected_filter?.setting?.id || null);
      setSelectedMetalId(Already_selected_filter?.metal?.id || null);
      setSelectedSizeId(Already_selected_filter?.size?.id || null);
    }
  }, [product]);

  useEffect(() => { }, [selectedShapeId]);

  const images =
    product &&
    product?.Gallery_images?.map((imgUrl) => ({
      original: imgUrl,
      thumbnail: imgUrl,
    }));

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const showFullScreen = () => {
    fullScreenRef.current.toggleFullScreen();
  };

  const handleSelectSize = (key, variationId) => {
    setSelectedSizeId(key)
    setSearchParams({ vId: variationId });
  }

  return (
    <>
      <Topbar />
      <Navbarmid />
      <NavbarBottom />

      <Breadcrumb
        heading="Round Diamond Stud Earrings"
        image="/images/round-bg.png"
        para="Explore our exquisite hoop earrings, climbers and
fashion earrings to find your perfect pair."
      />
      <div className="page-nav container px-0">
        <p>Home</p>
        <FaAngleRight />
        <p>Earrings</p>
        <FaAngleRight />
        <p>Round</p>
      </div>

      <section>
        <div className="container">
          <div className="row pt-5 justify-content-between">
            <div className="col-md-4 products-col">
              {images ? (
                <ImageGallery
                  ref={fullScreenRef}
                  items={images}
                  thumbnailPosition={"bottom"}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  lazyLoad={true}
                  slideOnThumbnailOver={true}
                  onClick={showFullScreen}
                />
              ) : (
                <p>Loading images...</p>
              )}
            </div>
            <div className="col-md-4 product-detail">
              <p>Item ID #: 038586</p>
              <h4>{product.Title}</h4>
              <div className="d-flex review-rating">
                <Rating />

                <p>(09 Reviews)</p>
              </div>
              <p dangerouslySetInnerHTML={{ __html: product.Description }}></p>
              <h5>Select Your Variation</h5>
              <div className="product-accordion">
                {All_available_filter?.shape &&
                  <>
                    <h6>Select Shapes</h6>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      {
                        Object.entries(All_available_filter.shape).map(
                          ([key, shape]) => {
                            return (
                              <div
                                key={key}
                                className={`product-shape ${key == selectedShapeId ? "selected" : ""
                                  }`}
                                onClick={() => setSelectedShapeId(parseInt(key))}
                              >
                                {shape.name}
                              </div>
                            );
                          }
                        )
                      }
                    </div>
                  </>
                }

                {All_available_filter?.shape[selectedShapeId]?.settings && <>
                  <h6>Select Settings</h6>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    {
                      Object.entries(
                        All_available_filter.shape[selectedShapeId].settings
                      ).map(([key, setting]) => {
                        return <div
                          key={key}
                          className={`product-shape ${key == selectedSettingId ? "selected" : ""
                            }`}
                          onClick={() => { setSelectedSettingId(key); setSelectedMetalId(null); setSelectedSizeId(null) }}
                        >
                          {setting.name}
                        </div>
                      }

                      )}
                  </div>
                </>
                }

                {
                  All_available_filter?.shape[selectedShapeId]?.settings[
                    selectedSettingId
                  ]?.metals && <>
                    <h6>Select Metals</h6>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      {Object.entries(
                        All_available_filter?.shape[selectedShapeId]?.settings[
                          selectedSettingId
                        ]?.metals || {}
                      ).map(([key, metal]) => {
                        return <div
                          key={key}
                          className={`product-shape ${key == selectedMetalId ? "selected" : ""
                            }`}
                          onClick={() => { setSelectedMetalId(key); setSelectedSizeId(null) }}
                        >
                          {metal.name}
                        </div>
                      }

                      )}
                    </div>
                  </>
                }

                {
                  All_available_filter?.shape[selectedShapeId]?.settings[
                    selectedSettingId
                  ]?.metals[selectedMetalId]?.sizes && <>
                    <h6>Select Size</h6>
                    <div className="d-flex align-items-center gap-2">
                      {Object.entries(
                        All_available_filter?.shape[selectedShapeId]?.settings[
                          selectedSettingId
                        ]?.metals[selectedMetalId]?.sizes || {}
                      ).map(([key, size]) => {
                        return <div
                          key={key}
                          className={`product-shape ${key == selectedSizeId ? "selected" : ""
                            }`}
                          onClick={() => handleSelectSize(key, size.variation_ids)}
                        >
                          {size.name}
                        </div>
                      }

                      )}
                    </div>
                  </>
                }


                {/* <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Change Shape</Accordion.Header>
                    <Accordion.Body>
                      <div className="product-shape">Round</div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Change Setting</Accordion.Header>
                    <Accordion.Body>
                      <div className="product-shape">4- Prong Basket</div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Change Metal</Accordion.Header>
                    <Accordion.Body>
                      <div className="product-shape">14k- White gold</div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Change Size</Accordion.Header>
                    <Accordion.Body>
                      <div className="product-shape">0.25</div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
              </div>
            </div>

            <div className="col-md-3 price-col">
              <div className="product-pric">
                {/* <h5>Retail: $599.00</h5> */}
                <h5>
                  Sale : <span>${product.Base_price}</span>
                </h5>
                <h4>Buy Now : ${product.Sale_price}</h4>
              </div>
              <div className="wishlist-btn">
                <a href="cart">
                  <button className="button-bag">Add to Bag</button>
                </a>
                <a href="wishlist">
                  <button className="button wishlist">Add to Wishlist</button>
                </a>
              </div>
              <div className="coupon">
                <p>Coupon Code</p>
                <input
                  className="discount-field"
                  placeholder="SUMMER40"
                ></input>
                <p className="applied">Applied</p>
              </div>
              <div className="order-main">
                <h6>FREE 2 DAY SHIPPING ON ALL US ORDERS:</h6>
                <div className="order-details">
                  <div className="order-by">
                    <h6>Order by:</h6>
                    <p>5PM EST</p>
                    <p> Wednesday,July 24</p>
                  </div>
                  <div className="order-by">
                    <h6>Receive as soon as:</h6>
                    <p>Friday,July 26 with Next </p>
                    <p>Day Air Shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-md-5">
        <div className="container">
          <div className="row detail-row">
            <div className="col-md-12 product-head">
              <h5>PRODUCT DETAILS</h5>
            </div>

            {product?.Earrings_information && (
              <div className="col-md-6 earing-information">
                <h6>EARRING INFORMATION</h6>
                <div className="product-information-main">
                  {Object.entries(product.Earrings_information || {}).map(
                    ([key, value]) => (
                      <div className="product-information" key={key}>
                        <p>{key}:</p>
                        <p>{value}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {product?.Daimond_information && (
              <div className="col-md-6 earing-information">
                <h6>DIAMOND INFORMATION</h6>
                <div className="product-information-main">
                  {product.Diamond_information.map((info, index) => (
                    <div className="product-information" key={index}>
                      <p>{info.label}:</p>
                      <p>{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <SingleProductSlider />

      <div className="container review-main my-5">
        {/* Reviews Section */}
        <div className="row">
          <div className="col-12 pb-1">
            <h4>Reviews</h4>
          </div>
        </div>
        <div className="row progress-row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-4">
                <div className="rating-box">
                  <div>
                    <h5>Rating</h5>
                  </div>
                  <div className="rating-value">4.5/5</div>
                  <div className="rating-text">
                    601 Ratings
                    <br />
                    206 Reviews
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="progress-container">
                  <span className="star">5 ★</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="count">425</span>
                </div>
                <div className="progress-container">
                  <span className="star">4 ★</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="count">123</span>
                </div>
                <div className="progress-container">
                  <span className="star">3 ★</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={30}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="count">27</span>
                </div>
                <div className="progress-container">
                  <span className="star">2 ★</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow={10}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="count">8</span>
                </div>
                <div className="progress-container">
                  <span className="star">1 ★</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow={15}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="count">18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Write Review Section */}
        <div className="review-section">
          <div className="row">
            <div className="col-12 pt-1 pb-1 review-rating">
              <h5>Write your Reviews</h5>
              <div className="d-flex">
                <h5>Ratings</h5>
                <Rating initialValue={4} />
              </div>
            </div>
            <div className="col-md-12 review-img">
              <textarea
                className="form-control frm"
                placeholder="Would you like to write anything about this Product?"
                rows={4}
                defaultValue={""}
              />

              <div className="file-upload">
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <div className="upload-icon" onClick={handleIconClick}>
                  <RiUploadCloud2Line />
                </div>
                <div className="upload-icon" onClick={handleIconClick}>
                  <RiUploadCloud2Line />
                </div>
                <div className="upload-icon" onClick={handleIconClick}>
                  <RiUploadCloud2Line />
                </div>
                <div className="upload-icon" onClick={handleIconClick}>
                  <RiUploadCloud2Line />
                </div>
              </div>
              <button className="submit-btn mt-3">Submit Review</button>
            </div>
          </div>
        </div>

        <div className="container p-0 mt-4">
          <div className="review-box">
            <div className="review-header">
              <img src="https://via.placeholder.com/40" alt="User Avatar" />
              <div className="user-info">
                <h6>
                  Random Person <span>(Stayed 24 Nov, 2023)</span>
                </h6>
                <p>Customer | 1 Review Written</p>
              </div>
            </div>
            <div className="review-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </div>
            <div className="review-images">
              <img src="images\review-img.png" alt="Review Image 1" />
              <img src="images\review-img.png" alt="Review Image 2" />
              <img src="images\review-img.png" alt="Review Image 3" />
              <img src="images\review-img.png" alt="Review Image 4" />
            </div>
          </div>
        </div>
        <div className="container p-0 mt-3">
          <div className="review-box">
            <div className="review-header">
              <img src="https://via.placeholder.com/40" alt="User Avatar" />
              <div className="user-info">
                <h6>
                  Random Person <span>(Stayed 24 Nov, 2023)</span>
                </h6>
                <p>Customer | 1 Review Written</p>
              </div>
            </div>
            <div className="review-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </div>
            <div className="review-images">
              <img src="images\review-img.png" alt="Review Image 1" />
              <img src="images\review-img.png" alt="Review Image 2" />
              <img src="images\review-img.png" alt="Review Image 3" />
              <img src="images\review-img.png" alt="Review Image 4" />
            </div>
          </div>
        </div>
        <div className="container p-0 mt-3">
          <div className="review-box">
            <div className="review-header">
              <img src="https://via.placeholder.com/40" alt="User Avatar" />
              <div className="user-info">
                <h6>
                  Random Person <span>(Stayed 24 Nov, 2023)</span>
                </h6>
                <p>Customer | 1 Review Written</p>
              </div>
            </div>
            <div className="review-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </div>
            <div className="review-images">
              <img src="images\review-img.png" alt="Review Image 1" />
              <img src="images\review-img.png" alt="Review Image 2" />
              <img src="images\review-img.png" alt="Review Image 3" />
              <img src="images\review-img.png" alt="Review Image 4" />
            </div>
          </div>
        </div>
        <div className="container p-0 mt-3">
          <div className="review-box">
            <div className="review-header">
              <img src="https://via.placeholder.com/40" alt="User Avatar" />
              <div className="user-info">
                <h6>
                  Random Person <span>(Stayed 24 Nov, 2023)</span>
                </h6>
                <p>Customer | 1 Review Written</p>
              </div>
            </div>
            <div className="review-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </div>
            <div className="review-images">
              <img src="images\review-img.png" alt="Review Image 1" />
              <img src="images\review-img.png" alt="Review Image 2" />
              <img src="images\review-img.png" alt="Review Image 3" />
              <img src="images\review-img.png" alt="Review Image 4" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleProducts;
