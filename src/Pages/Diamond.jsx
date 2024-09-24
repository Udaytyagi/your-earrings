import React, { useState, useEffect } from 'react';
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import Filter from "./Filter";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import { FaAngleRight } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";
import "../Styles/diamond.css";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { fetchFilterApi } from '../apis/mainApis/filter/filterApis';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateWishlist } from '../features/slices/wishlist/wishlistSlice';
import SidebarFilters from '../components/SidebarFilters';

const Diamond = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedShapeSlug, setSelectedShapeSlug] = useState("");
  const [selectedSettingSlug, setSelectedSettingSlug] = useState("");
  const [selectedMetalSlug, setSelectedMetalSlug] = useState("");
  // const [selectedSize, setSelectedSize] = useState("");
  const [types, setTypes] = useState(null)
  const [shapes, setShapes] = useState([]);
  const [settings, setSettings] = useState([]);
  const [metals, setMetals] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [updatePage, setUpdatePage] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState("5000+")

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        ...(selectedShapeSlug && { shape_names: selectedShapeSlug }),
        ...(selectedSettingSlug && { setting_names: selectedSettingSlug }),
        ...(selectedMetalSlug && { metal_names: selectedMetalSlug }),
        ...(selectedSizes?.length > 0 && { size_names: selectedSizes }),
        ...(minPrice && { min_price: minPrice }),
        ...(maxPrice && { max_price: maxPrice === "5000+" ? 50000000 : maxPrice }),
      }

      const response = await fetchFilterApi(data)
      const { Shape_list, Size_list, types, selected } = response.data.data;
      setShapes(Shape_list);
      const selectedShape = Shape_list.find(shape => shape.slug === selected.shape_id);
      setSettings(selectedShape?.settings || []);
      const selectedSetting = selectedShape?.settings.find(setting => setting.slug === selected.setting_id);
      setMetals(selectedSetting?.metal || []);
      setSizes(Size_list);
      setTypes(types)
      setSelectedShapeSlug(selected.shape_id);
      setSelectedSettingSlug(selected.setting_id);
      setSelectedMetalSlug(selected.metal_id);
    };

    fetchData();
  }, [updatePage, priceRange, selectedSizes, minPrice, maxPrice]);


  const handleShapeChangeSlug = (slug) => {
    setSelectedShapeSlug(slug);
    setUpdatePage(!updatePage);
  };

  const handleSettingChangeSlug = (slug) => {
    setSelectedSettingSlug(slug);
    setUpdatePage(!updatePage);
  };

  const handleMetalChangeSlug = (slug) => {
    setSelectedMetalSlug(slug);
    setUpdatePage(!updatePage);
  };

  const handleUpdateWishlist = (variationId) => {
    const data = {
      variation_id: variationId
    }
    dispatch(updateWishlist(data))
    setUpdatePage(!updatePage);
  }

  return (
    <>
      <SidebarFilters showFilters={showFilters} setShowFilters={setShowFilters} sizes={sizes} selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes} setPriceRange={setPriceRange} priceRange={priceRange} minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="Round Diamond Stud Earrings"
        image="/images/earrings-bg.png"
        para="Explore our exquisite hoop earrings, climbers and
              fashion earrings to find your perfect pair."
      />

      <div className="page-nav container px-lg-0">
        <p>Home</p>
        <FaAngleRight />
        <p>Earrings</p>
      </div>

      <h3 className="diamond-main-heading text-center">
        Find The Perfect Diamond Studs
      </h3>

      <section className="diamond" style={{ padding: "0px 25px" }}>
        <div className="container">
          <div className="row diamond-row">
            <div className="col-md-12 diamond-head">
              <h5>Select Your Shapes</h5>
            </div>
            <div className="shapes">
              {shapes?.map(shape => (
                <div className={`shapes-inner ${shape.slug === selectedShapeSlug ? 'selected' : ''}`} key={shape.id} onClick={() => handleShapeChangeSlug(shape.slug)}>
                  <div>
                    <img className="img-diamond" src={shape.image} alt={shape.title} />
                  </div>
                  <h6>{shape.title}</h6>
                </div>
              ))}
            </div>
          </div>

          <div className="row diamond-row">
            <div className="col-md-12 diamond-head">
              <h5>Select Your Settings</h5>
            </div>
            <div className="shapes settings slt justify-content-md-start justify-content-center">
              {settings?.map(setting => (
                <div className={`shapes-inner shapes-inner-slt ${setting.slug === selectedSettingSlug ? 'selected' : ''}`} key={setting.id} onClick={() => handleSettingChangeSlug(setting.slug)}>
                  <img className="img-diamond" src={setting.image[selectedMetalSlug]} alt={setting.title} />
                  <h6>{setting.title}</h6>
                </div>
              ))}
            </div>
          </div>

          <div className="row diamond-row">
            <div className="col-md-12 diamond-head">
              <h5>Select Your Metals</h5>
            </div>
            <div className="shapes select-btn">
              {Object.entries(metals).map(([key, metal]) => (
                <div className={`shapes-inner shapes-inner-btn  ${metal.slug === selectedMetalSlug ? 'selected' : ""}`} key={metal.id} onClick={() => handleMetalChangeSlug(metal.slug)} style={{ backgroundColor: metal.color_code }} >
                  <h6>{metal.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <div className="col-md-12 col-lg-3  filter-main">
              <Filter sizes={sizes} selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes} setPriceRange={setPriceRange} priceRange={priceRange} />
        </div> */}

      <div className='container py-3 single-product-filter-container'>
        <div className='row'>
          <div className='col-12 p-0'>
            <button className="filter-button" onClick={() => setShowFilters(true)}>
              <span className="filter-icon"><IoFilter /></span>
              Filters
            </button>
          </div>
        </div>
      </div>


      <section className="range d-md-block d-none">
        <div className="container range-contain mb-4">
          <div className="row">
            <div className="col-md-12 diamond-head">
              <h5>Select the Size, Lab Diamond Quality & Prices</h5>
            </div>
            <div className="col-md-12 diamond-card-col">
              <div className="row">
                {
                  <div className="col-md-3 new-product-items-button">
                    <button>Diamond Sizes</button>
                  </div>
                }
                {
                  <div className="col-md-3 new-product-items-button">
                    <button>Beautiful (VS2+)</button>
                  </div>
                }
                {
                  <div className="col-md-3 new-product-items-button">
                    <button>Brilliant (VS1+)</button>
                  </div>
                }
                {
                  <div className="col-md-3 new-product-items-button">
                    <button>Masterpiece (VVS2+)</button>
                  </div>
                }
              </div>
              {
                types && types.length !== 0 ? <>
                  {types && Object.entries(types).map(([size, categories]) => (
                    <div className="row daimond-row-size" key={size}>
                      <div className="col-md-3 mb-4 d-flex flex-column align-items-center justify-content-center">
                        <p className='daimond-p-size'>{size}</p>
                      </div>
                      {categories?.map((category, i) => {
                        const categoryName = Object.keys(category)[0];
                        if (["Beautiful", "Brilliant", "Masterpiece"].includes(categoryName)) {
                          return (
                            <div className="col-md-3 mb-4" key={i}>
                              <div className="new-product-items mt-3">
                                {
                                  Object.values(category)[0]?.length > 0 ? (
                                    Object.values(category)[0].map(product => (
                                      <div key={product.variation_id}>

                                        {
                                          product?.wishlist === true ? <div className="wishlist-icon-fill d-flex justify-content-end" onClick={() => handleUpdateWishlist(product?.variation_id)}><FaHeart /></div> : <div className="wishlist-icon d-flex justify-content-end" onClick={() => handleUpdateWishlist(product?.variation_id)}><FaRegHeart /></div>
                                        }
                                        <img
                                          className="img-fluid"
                                          src={product.featured_image}
                                          alt="Product Image"
                                        />
                                        <hr />
                                        <p>{product.title}</p>
                                        <div className="rating-price d-flex">
                                          <h4>
                                            <span>${product.base_price}</span>${product.sale_price}
                                          </h4>
                                          <Rating initialValue={0} readonly />
                                        </div>
                                        <button className="diamond-card-btn" onClick={() => navigate(`/${product.slug}?vId=${product.variation_id}`)}>BUY NOW</button>
                                      </div>
                                    ))
                                  ) : "No product available"
                                }
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  ))}
                </> : <div className='fw-bold d-flex align-items-center justify-content-center py-3'>No product available</div>
              }
            </div>
          </div>
          {/* <nav>
            <ul className="pagination pb-5 px-2 d-flex justify-content-end">
              <li className="page-item">
                <a href="#" className="page-link prev-page">
                  <TbPlayerTrackPrevFilled />
                </a>
              </li>
              <li className="page-item active current-page">
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li className="page-item">
                <a href="#" className="page-link next-page">
                  <TbPlayerTrackNextFilled />
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </section>

      <section className='range-mobile d-md-none d-block' style={{ padding: "25px 25px" }}>
        <div className='container'>
          <div className='row'>
            <h6>Select the size and Lab Diamond Quality</h6>

            {
              types && types.length !== 0 ? <>
                {types && Object.entries(types).map(([size, categories]) => (
                  <div className='range-mobile-main-div mt-3' key={size}>
                    <div className='row'>
                      <div className='col-6 d-flex align-items-start justify-content-start'>
                        <div className='range-mobile-border'>
                          <img
                            className="img-fluid"
                            src={categories[0]?.one_featured_image}
                            alt="Product Image"
                          />
                        </div>
                      </div>
                      <div className='col-6'>
                        <p className='m-0 range-mobile-weight'>{size} cwc</p>
                        {shapes?.map((shape, i) => (
                          <p className='m-0' key={i}>{shape.slug === selectedShapeSlug && shape.title}</p>
                        ))}
                        {settings?.map((setting, i) => (
                          <p className='m-0' key={i}>{setting.slug === selectedSettingSlug && setting.title}</p>
                        ))}
                        {Object?.entries(metals).map(([key, metal]) => (
                          <p className='m-0' key={key}>{metal.slug === selectedMetalSlug && metal.title}</p>
                        ))}
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-3 d-flex align-items-center justify-content-center'>
                        <h6 className='m-0'>Quality</h6>
                      </div>
                      <div className='col-3 d-flex align-items-center justify-content-center'>
                        <h6 className='m-0'>Color</h6>
                      </div>
                      <div className='col-3 d-flex align-items-center justify-content-center'>
                        <h6 className='m-0'>Clarity</h6>
                      </div>
                      <div className='col-3 d-flex align-items-center justify-content-center'>
                        <h6 className='m-0'>Price</h6>
                      </div>
                    </div>

                    {['Beautiful', 'Brilliant', 'Masterpiece'].map((type, i) => {
                      const category = categories.find(cat => Object.keys(cat)[0] === type);
                      const products = category ? Object.values(category)[0] : [];
                      const clarityOptions = ['VS2+', 'VS1+', 'VVS2+'];
                      const clarity = clarityOptions[i % clarityOptions.length];
                      const colorOptions = ["I-J", "H-I", "G-H"];
                      const color = colorOptions[i % colorOptions.length]

                      return (
                        <div className='row range-mobile-inner-div mt-3' key={i} onClick={() => {
                          if (products.length > 0) {
                            const firstProduct = products[0];
                            navigate(`/${firstProduct.slug}?vId=${firstProduct.variation_id}`);
                          }
                        }}>
                          <div className='col-3 d-flex align-items-center justify-content-center'>
                            <h6 className='m-0'>{type}</h6>
                          </div>

                          {products.length > 0 ? (
                            products.map((product, index) => {
                              return (
                                <React.Fragment key={product.variation_id}>
                                  <div className='col-3 d-flex align-items-center justify-content-center'>
                                    <h6 className='m-0'>{color}</h6>
                                  </div>
                                  <div className='col-3 d-flex align-items-center justify-content-center'>
                                    <h6 className='m-0'>{clarity}</h6>
                                  </div>
                                  <div className='col-3 d-flex align-items-center justify-content-center pe-0'>
                                    <div className='d-flex flex-column align-items-center'>
                                      <p className='m-0 range-mobile-base-price pe-0'>${product.base_price}</p>
                                      <p className='m-0 range-mobile-sale-price pe-0'>${product.sale_price}</p>
                                    </div>
                                  </div>
                                </React.Fragment>
                              );
                            })
                          ) : (
                            <div className='col-12 d-flex align-items-center justify-content-end'>
                              <p className='m-0'>No Product Available</p>
                            </div>
                          )}
                        </div>
                      );
                    })}

                  </div>
                ))}
              </> : <div className='fw-bold d-flex align-items-center justify-content-center py-3'>No product available</div>
            }
          </div>
        </div>
      </section>




      <Footer />
    </>
  );
};

export default Diamond;
