import { useEffect, useRef, createRef, useState } from "react";
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import "../Styles/singleproducts.css";
import Accordion from "react-bootstrap/Accordion";
import { Rating } from "react-simple-star-rating";
import SingleProductSlider from "../Pages/SingleProductSlider";
import { RiUploadCloud2Line, RiDeleteBin6Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
import { fetchProductDetail } from "../features/slices/productDetail/productDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { updateCart } from "../features/slices/cart/cartSlice";
import { ErrorToaster } from "../components/Toaster";
import FeaturedProduct from "../sections/home/FeaturedProduct";
import LoginModal from "../components/LoginModal";
import { fetchCouponApi } from "../apis/mainApis/productDetail/productDetailApis";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "react-bootstrap/Dropdown";
import { updateWishlist } from "../features/slices/wishlist/wishlistSlice";
import { addReviewApi } from "../apis/mainApis/productDetail/productDetailApis";
import { KEY_PREFIX } from "redux-persist/lib/constants";
import ImageModal from "../components/ImageModal";
import jewelleryVideo from "../../public/video/jewelleryVideo.mp4"

const SingleProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const variationId = searchParams.get("vId");
  const dispatch = useDispatch();
  const fileInputRef = createRef();
  const fullScreenRef = useRef();
  const product = useSelector((state) => state?.productDetail?.data);
  const user = useSelector((state) => state?.user?.data);
  const All_available_filter =
    product?.Product_info?.All_available_filter || {};
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedSettingId, setSelectedSettingId] = useState(null);
  const [selectedMetalId, setSelectedMetalId] = useState(null);
  const [selectedSizeId, setSelectedSizeId] = useState(null);
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [selectedCouponId, setSelectedCouponId] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedSetting, setSelectedSetting] = useState("");
  const [selectedMetal, setSelectedMetal] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [updatePage, setUpdatePage] = useState(false);
  const [activeAccordionKey, setActiveAccordionKey] = useState("0");
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [image, setImage] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");
  const [reviewImages, setReviewImages] = useState([]);

  useEffect(() => {
    const data = {
      shape: selectedShape,
      setting: selectedSetting,
      metal: selectedMetal,
      size: selectedSize,
      type: selectedType,
    };
    dispatch(fetchProductDetail({ data: data, variationId: variationId }));
  }, [variationId, dispatch, updatePage]);

  useEffect(() => {
    if (product && product?.Product_info) {
      const { Already_selected_filter } = product.Product_info;
      setSelectedShapeId(Already_selected_filter?.SelectedIdShape || null);
      setSelectedSettingId(Already_selected_filter?.SelectedIdSetting || null);
      setSelectedMetalId(Already_selected_filter?.SelectedIdMetal || null);
      setSelectedSizeId(Already_selected_filter?.SelectedIdSize || null);
      setSelectedTypeId(Already_selected_filter?.v_Id || null);
      setSelectedShape(Already_selected_filter?.shape);
      setSelectedSetting(Already_selected_filter?.setting);
      setSelectedMetal(Already_selected_filter?.metal);
      setSelectedSize(Already_selected_filter?.size);
      setSelectedType(Already_selected_filter?.type);
    }
  }, [product]);

  const images = [
    ...(product?.Product_info?.Gallery_images?.map((item) => {
      const isVideo = item.endsWith('.mp4');
      return {
        original: item,
        thumbnail: item,
        isVideo,
      };
    }) || []),
    {
      original: jewelleryVideo,
      thumbnail: "/images/blog-1.png",
      isVideo: true,
    },
  ];

  const renderItem = (item) => {
    if (item.isVideo) {
      return (
        <video controls autoPlay muted style={{ width: '100%' }}>
          <source src={item.original} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return <img src={item.original} alt="" style={{ width: '100%' }} />;
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const showFullScreen = () => {
    fullScreenRef.current.toggleFullScreen();
  };

  const handleSelectSize = (key, variationId) => {
    setSelectedSizeId(key);
    setSearchParams({ vId: variationId });
  };

  const handleAddToCart = () => {
    if (user) {
      const data = {
        coupon_id: selectedCouponId,
        action: "add",
      };
      dispatch(
        updateCart({
          data: data,
          variationId: selectedTypeId ? selectedTypeId : variationId,
        })
      );
    } else {
      setOpenLoginModal(true);
    }
  };

  const handleUpdateWishlist = async () => {
    if (user) {
      const data = {
        variation_id: selectedTypeId ? selectedTypeId : variationId,
      };
      await dispatch(updateWishlist(data));
      setUpdatePage(!updatePage);
    } else {
      setOpenLoginModal(true);
    }
  };

  const handleAccordionClick = (eventKey) => {
    setActiveAccordionKey(eventKey);
  };

  const handleAddCoupon = async (couponId) => {
    if (couponId !== selectedCouponId) {
      setSelectedCouponId(couponId);
      const response = await fetchCouponApi(
        selectedTypeId ? selectedTypeId : variationId,
        couponId
      );
      setDiscountPrice(response.data.data.Sale_price.After_discount_price);
    }
  };

  const handleRemoveCoupon = () => {
    setSelectedCouponId(0);
    setDiscountPrice("");
  };

  const handleAddReview = async () => {
    const base64Images = await Promise.all(reviewImages.map(convertToBase64));

    const data = {
      productId: product?.Product_info?.Id,
      rating: rating,
      description: description,
      images: base64Images,
    };

    if (!user) {
      ErrorToaster("Please login");
      return;
    }

    if (!rating) {
      ErrorToaster("Please give rating");
      return;
    }
    await addReviewApi(data, setRating, setDescription, setReviewImages);
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    if (reviewImages.length + files.length > 4) {
      ErrorToaster("You can upload a maximum of 4 images.");
      return;
    }

    const newImages = files.slice(0, 4 - reviewImages.length);

    if (newImages.length + reviewImages.length <= 4) {
      setReviewImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleRemoveImage = (index) => {
    setReviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageModal = (image) => {
    setImage(image);
    setOpenImageModal(true);
  };

  return (
    <>
      <ImageModal
        openImageModal={openImageModal}
        setOpenImageModal={setOpenImageModal}
        image={image}
      />
      <LoginModal
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
      />
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="Round Diamond Stud Earrings"
        image="/images/round-bg.png"
        para="Explore our exquisite hoop earrings, climbers and
fashion earrings to find your perfect pair."
      />
      {/* <div className="page-nav container px-0">
        <p>Home</p>
        <FaAngleRight />
        <p>Earrings</p>
        <FaAngleRight />
        <p>Round</p>
      </div> */}
      <section>
        <div className="container" style={{ padding: "0px 40px" }}>
          <div className="row pt-3 justify-content-between">
            <div className="col-lg-4 products-col">
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
                  renderItem={renderItem}
                />
              ) : (
                <p>Loading images...</p>
              )}
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0 product-detail">
              <p>Item ID #: {product?.Product_info?.Item_id}</p>
              <h4>{product?.Product_info?.Title}</h4>
              {/* <div className="d-flex review-rating">
                <Rating ratingValue={product.Rating || 5} readonly />
              </div> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: product?.Product_info?.Description,
                }}
              ></p>
              <h5>Select Other Variation</h5>
              <div className="product-accordion">
                <Accordion
                  defaultActiveKey="0"
                  activeKey={activeAccordionKey}
                  onSelect={handleAccordionClick}
                >
                  {/* <Accordion.Item eventKey="1">
                    <Accordion.Header>Change Shape</Accordion.Header>
                    <Accordion.Body>
                      {All_available_filter?.shape &&
                        <>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            {
                              Object.entries(All_available_filter.shape).map(
                                ([key, shape]) => {
                                  return (
                                    <div key={key}
                                      className={`product-shape ${key == selectedShapeId ? "selected" : ""
                                        }`}>
                                      <div
                                        className="product-shape"
                                        onClick={() => { setSelectedShapeId(parseInt(key)); setSelectedSettingId(null); setSelectedMetalId(null); setSelectedSizeId(null) }}
                                        style={{ backgroundColor: "#a0793633" }}
                                      >
                                        {shape.name}
                                      </div>
                                    </div>
                                  );
                                }
                              )
                            }
                          </div>
                        </>
                      }
                    </Accordion.Body>
                  </Accordion.Item> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="singleproduct-dropdown-toggle"
                    >
                      Change Setting
                    </Dropdown.Toggle>
                    {product &&
                      All_available_filter?.shape[selectedShapeId]
                        ?.settings && (
                        <Dropdown.Menu style={{ width: "100%" }}>
                          {Object.entries(
                            All_available_filter.shape[selectedShapeId].settings
                          ).map(([key, setting]) => {
                            return (
                              <Dropdown.Item
                                key={KEY_PREFIX}
                                className={`product-shape ${key == selectedSettingId ? "selected" : ""
                                  }`}
                                onClick={() => {
                                  setSelectedSettingId(key);
                                  setSelectedSetting(setting.name);
                                  setUpdatePage(!updatePage);
                                  handleRemoveCoupon();
                                }}
                              >
                                {" "}
                                {setting.name}
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      )}
                  </Dropdown>

                  {/* <Accordion.Item eventKey="1">
                    <Accordion.Header>Change Setting</Accordion.Header>
                    <Accordion.Body>
                      {product && All_available_filter?.shape[selectedShapeId]?.settings && <>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          {
                            Object.entries(
                              All_available_filter.shape[selectedShapeId].settings
                            ).map(([key, setting]) => {

                              return <div key={key} className={`product-shape ${key == selectedSettingId ? "selected" : ""
                                }`}>
                                <div
                                  className="product-shape"
                                  onClick={() => { setSelectedSettingId(key); setSelectedSetting(setting.name); setUpdatePage(!updatePage); handleRemoveCoupon() }}
                                  style={{ backgroundColor: "#a0793633" }}
                                >
                                  {setting.name}
                                </div>
                              </div>
                            }

                            )}
                        </div>
                      </>
                      }
                    </Accordion.Body>
                  </Accordion.Item> */}

                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="singleproduct-dropdown-toggle"
                    >
                      Change Metal
                    </Dropdown.Toggle>
                    {product &&
                      All_available_filter?.shape[selectedShapeId]?.settings[
                        selectedSettingId
                      ]?.metals && (
                        <Dropdown.Menu style={{ width: "100%" }}>
                          {Object.entries(
                            All_available_filter?.shape[selectedShapeId]
                              ?.settings[selectedSettingId]?.metals || {}
                          ).map(([key, metal]) => {
                            return (
                              <Dropdown.Item
                                key={KEY_PREFIX}
                                className={`product-shape ${key == selectedMetalId ? "selected" : ""
                                  }`}
                                onClick={() => {
                                  setSelectedMetalId(key);
                                  setSelectedMetal(metal.name);
                                  setUpdatePage(!updatePage);
                                  handleRemoveCoupon();
                                }}
                              >
                                {metal.name}
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      )}
                  </Dropdown>

                  {/* <Accordion.Item eventKey="2">
                    <Accordion.Header>Change Metal</Accordion.Header>
                    <Accordion.Body>
                      {
                        product && All_available_filter?.shape[selectedShapeId]?.settings[
                          selectedSettingId
                        ]?.metals && <>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            {Object.entries(
                              All_available_filter?.shape[selectedShapeId]?.settings[
                                selectedSettingId
                              ]?.metals || {}
                            ).map(([key, metal]) => {
                              return <div className={`product-metal ${key == selectedMetalId ? "selected" : ""
                                }`} key={key}>
                                <div
                                  className="product-metal"
                                  onClick={() => { setSelectedMetalId(key); setSelectedMetal(metal.name); setUpdatePage(!updatePage); handleRemoveCoupon() }}
                                  style={{ backgroundColor: `${metal.color_code}` }}
                                >
                                  {metal.name}
                                </div>
                              </div>
                            }

                            )}
                          </div>
                        </>
                      }
                    </Accordion.Body>
                  </Accordion.Item> */}

                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="singleproduct-dropdown-toggle"
                    >
                      Change Size
                    </Dropdown.Toggle>
                    {product &&
                      All_available_filter?.shape[selectedShapeId]?.settings[
                        selectedSettingId
                      ]?.metals[selectedMetalId]?.sizes && (
                        <Dropdown.Menu style={{ width: "100%" }}>
                          {Object.entries(
                            All_available_filter?.shape[selectedShapeId]
                              ?.settings[selectedSettingId]?.metals[
                              selectedMetalId
                            ]?.sizes || {}
                          ).map(([key, size]) => {
                            return (
                              <Dropdown.Item
                                key={KEY_PREFIX}
                                className={`product-shape ${key == selectedSizeId ? "selected" : ""
                                  }`}
                                onClick={() => {
                                  setSelectedSizeId(key);
                                  setSelectedSize(size.name);
                                  setUpdatePage(!updatePage);
                                  handleRemoveCoupon();
                                }}
                              >
                                {" "}
                                {size.name}
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      )}
                  </Dropdown>

                  {/* <Accordion.Item eventKey="3">
                    <Accordion.Header>Change Size</Accordion.Header>
                    <Accordion.Body>
                      {
                        product && All_available_filter?.shape[selectedShapeId]?.settings[
                          selectedSettingId
                        ]?.metals[selectedMetalId]?.sizes && <>
                          <div className="d-flex align-items-center gap-2">
                            {Object.entries(
                              All_available_filter?.shape[selectedShapeId]?.settings[
                                selectedSettingId
                              ]?.metals[selectedMetalId]?.sizes || {}
                            ).map(([key, size]) => {
                              return <div key={key}
                                className={`product-shape ${key == selectedSizeId ? "selected" : ""
                                  }`}>
                                <div
                                  className="product-shape"
                                  onClick={() => { setSelectedSizeId(key); setSelectedSize(size.name); setUpdatePage(!updatePage); handleRemoveCoupon() }}
                                  style={{ backgroundColor: "#a0793633" }}
                                >
                                  {size.name}
                                </div>
                              </div>
                            }

                            )}
                          </div>
                        </>
                      }
                    </Accordion.Body>
                  </Accordion.Item> */}

                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="singleproduct-dropdown-toggle"
                    >
                      Change Type
                    </Dropdown.Toggle>
                    {product &&
                      All_available_filter?.shape[selectedShapeId]?.settings[
                        selectedSettingId
                      ]?.metals[selectedMetalId]?.sizes[selectedSizeId]
                        ?.types && (
                        <Dropdown.Menu style={{ width: "100%" }}>
                          {Object.entries(
                            All_available_filter?.shape[selectedShapeId]
                              ?.settings[selectedSettingId]?.metals[
                              selectedMetalId
                            ]?.sizes[selectedSizeId].types || {}
                          ).map(([key, metal]) => {
                            return (
                              <Dropdown.Item
                                key={KEY_PREFIX}
                                className={`product-shape ${metal.variation_ids == selectedTypeId
                                  ? "selected"
                                  : ""
                                  }`}
                                onClick={() => {
                                  setSelectedTypeId(metal.variation_ids);
                                  setSelectedType(metal.name);
                                  setUpdatePage(!updatePage);
                                  handleRemoveCoupon();
                                }}
                              >
                                {metal.name}
                              </Dropdown.Item>
                            );
                          })}
                        </Dropdown.Menu>
                      )}
                  </Dropdown>

                  {/* <Accordion.Item eventKey="4">
                    <Accordion.Header>Change Type</Accordion.Header>
                    <Accordion.Body>
                      {
                        product && All_available_filter?.shape[selectedShapeId]?.settings[
                          selectedSettingId
                        ]?.metals[selectedMetalId]?.sizes[selectedSizeId]?.types && <>
                          <div className="d-flex align-items-center gap-2">
                            {Object.entries(
                              All_available_filter?.shape[selectedShapeId]?.settings[
                                selectedSettingId
                              ]?.metals[selectedMetalId]?.sizes[selectedSizeId].types || {}
                            ).map(([key, metal]) => {
                              return <div key={key}
                                className={`product-shape ${metal.variation_ids == selectedTypeId ? "selected" : ""
                                  }`}>
                                <div
                                  className="product-shape"
                                  onClick={() => { setSelectedTypeId(metal.variation_ids); setSelectedType(metal.name); setUpdatePage(!updatePage); handleRemoveCoupon() }}
                                  style={{ backgroundColor: "#a0793633" }}
                                >
                                  {metal.name}
                                </div>
                              </div>
                            }

                            )}
                          </div>
                        </>
                      }
                    </Accordion.Body>
                  </Accordion.Item> */}
                </Accordion>
              </div>
            </div>

            <div className="col-lg-3 mt-3 mt-lg-0 price-col">
              <div className="product-pric">
                <h5>
                  Sale : <span>${product?.Product_info?.Base_price}</span>
                </h5>
                <h4>Buy Now : ${product?.Product_info?.Sale_price}</h4>
                {discountPrice && <h4>Discounted Price : ${discountPrice}</h4>}
              </div>
              <div className="wishlist-btn">
                <button
                  className="button-bag"
                  onClick={() => handleAddToCart()}
                >
                  Add to Bag
                </button>
                <button
                  className="button wishlist"
                  onClick={() => handleUpdateWishlist()}
                >
                  {product?.Product_info?.Wishlist === true
                    ? "Remove from wishlist"
                    : "Add to wishlist"}
                </button>
              </div>
              {product?.Product_info &&
                product?.Product_info?.Discount?.length > 0 && (
                  <div className="coupon">
                    <p>Coupon Available</p>
                    {product?.Product_info?.Discount?.map((discount, i) => (
                      <div
                        className={`discount-field ${discount.coupon_id === selectedCouponId
                          ? "selected"
                          : ""
                          }`}
                        key={i}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <div
                            onClick={() => handleAddCoupon(discount?.coupon_id)}
                          >
                            <span> {discount?.name}</span>
                            <br></br>
                            {discount?.type === "fixed" ? (
                              <>
                                <span>Discount Amount : </span>
                                <span>{discount?.discount_amount}</span>
                              </>
                            ) : (
                              <>
                                <span>Discount Percentage : </span>
                                <span>{discount?.discount_percent}%</span>
                              </>
                            )}
                          </div>
                          {discountPrice && (
                            <RxCross2 onClick={() => handleRemoveCoupon(0)} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              {/* <div className="order-main">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <div className="container" style={{ padding: "0px 40px" }}>
          <div className="row detail-row">
            <div className="col-md-12 product-head">
              <h5>PRODUCT DETAILS</h5>
            </div>

            {product?.Product_info?.Earrings_information && (
              <div className="col-md-6 earing-information">
                <h6>EARRING INFORMATION</h6>
                <div className="product-information-main">
                  {Object.entries(
                    product?.Product_info?.Earrings_information || {}
                  ).map(([key, value]) => (
                    <div className="product-information" key={key}>
                      <p>{key}:</p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {product?.Product_info?.Diamond_information && (
              <div className="col-md-6 earing-information">
                <h6>DIAMOND INFORMATION</h6>
                <div className="product-information-main">
                  {Object.entries(
                    product?.Product_info?.Diamond_information || {}
                  ).map(([key, value]) => (
                    <div className="product-information" key={key}>
                      <p>{key}:</p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <SingleProductSlider product={product} />
      <section className="pt-5">
        <div className="container" style={{ padding: "0px 25px" }}>
          <div className="review-main">
            <div className="row">
              <div className="col-12 pb-1 mt-3">
                <h4>Reviews</h4>
              </div>
            </div>
            <div className="row progress-row">
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="rating-box">
                      <div>
                        <h5>Rating</h5>
                      </div>
                      <div className="rating-value">
                        {product?.Review_section?.avg_review || 0}/5
                      </div>
                      <div className="rating-text">
                        {product?.Review_section?.total_rating_count || 0}{" "}
                        Ratings
                        <br />
                        {product?.Review_section?.total_review_count || 0}{" "}
                        Reviews
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 mt-3 mt-lg-0">
                    <div className="progress-container">
                      <span className="star">5★</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{
                            width:
                              product?.Review_section?.fiveRatingPercentage ||
                              0,
                          }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="count">
                        {product?.Review_section?.five_rating_count || 0}
                      </span>
                    </div>
                    <div className="progress-container">
                      <span className="star">4★</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{
                            width:
                              product?.Review_section?.fourRatingPercentage ||
                              0,
                          }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="count">
                        {product?.Review_section?.four_rating_count || 0}
                      </span>
                    </div>
                    <div className="progress-container">
                      <span className="star">3★</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{
                            width:
                              product?.Review_section?.threeRatingPercentage ||
                              0,
                          }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="count">
                        {product?.Review_section?.three_rating_count || 0}
                      </span>
                    </div>
                    <div className="progress-container">
                      <span className="star">2★</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{
                            width:
                              product?.Review_section?.twoRatingPercentage || 0,
                          }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="count">
                        {product?.Review_section?.two_rating_count || 0}
                      </span>
                    </div>
                    <div className="progress-container">
                      <span className="star">1★</span>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{
                            width:
                              product?.Review_section?.twoRatingPercentage || 0,
                          }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="count">
                        {product?.Review_section?.one_rating_count || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-section">
              <div className="row">
                <div className="col-12 pt-1 pb-1 review-rating">
                  <h5>Write your Reviews</h5>
                  <div className="d-flex flex-wrap">
                    <h5>Ratings</h5>
                    <Rating onClick={setRating} ratingValue={rating} />
                  </div>
                </div>
                <div className="col-md-12 review-img">
                  <textarea
                    className="form-control frm"
                    placeholder="Would you like to write anything about this Product?"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <div className="file-upload">
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      multiple
                      onChange={handleImageChange}
                    />

                    {reviewImages?.map((image, index) => (
                      <div key={index} className="uploaded-image">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Review Image ${index + 1}`}
                          width={"80px"}
                          height={"80px"}
                        />
                        <RiDeleteBin6Line
                          style={{
                            cursor: "pointer",
                            color: "red",
                            width: "20px",
                            height: "20px",
                          }}
                          onClick={() => handleRemoveImage(index)}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="upload-icon" onClick={handleIconClick}>
                    <RiUploadCloud2Line />
                  </div>
                  <button
                    className="submit-btn mt-3"
                    onClick={() => handleAddReview()}
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>

            <div className="container p-0 mt-4">
              {
                product && product?.Review_section?.user_review && product?.Review_section?.user_review?.length > 0 &&
                product?.Review_section?.user_review?.map((product, i) => (
                  <div className="review-box" key={i}>
                    <div className="review-header">
                      <img src={product?.user_img || "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="User Avatar" />
                      <div className="user-info">
                        <h6>
                          {product?.createdBy} <span>({product?.createdAt})</span>
                        </h6>
                        <p>Self</p>
                      </div>
                    </div>
                    <Rating readonly initialValue={product.rating} size={15} />
                    <div className="review-content">
                      {product?.description}
                    </div>
                    <div className="review-images">
                      {
                        product?.review_img.map((image, j) => (
                          <img src={image} alt={`Review Image ${j + 1}`} key={j} onClick={() => handleImageModal(image)} />
                        ))
                      }
                    </div>
                  </div>
                ))
              }


            </div>

            <div className="container p-0 mt-4">
              {product &&
                product?.Review_section?.all_review &&
                product?.Review_section?.all_review?.length > 0 &&
                product?.Review_section?.all_review?.map((item, i) => (
                  <div className="review-box" key={i}>
                    <div className="review-header">
                      <img
                        src={item.user_img || "https://img.freepik.com/free-icon/user_318-159711.jpg"}
                        alt="User Avatar"
                      />
                      <div className="user-info">
                        <h6>
                          {item.createdBy} <span>({item.createdAt})</span>
                        </h6>
                        <p>Customer</p>
                      </div>
                    </div>
                    <Rating readonly initialValue={item.rating} size={15} />
                    <div className="review-content">{item.description}</div>
                    <div className="review-images">
                      {item?.review_img?.map((image, j) => (
                        <img
                          src={image}
                          alt={`Review Image ${j + 1}`}
                          key={j}
                          onClick={() => handleImageModal(image)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleProducts;
