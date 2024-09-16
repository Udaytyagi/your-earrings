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
import "../Styles/diamond.css";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { fetchFilterApi } from '../apis/mainApis/filter/filterApis';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateWishlist } from '../features/slices/wishlist/wishlistSlice';

const Diamond = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedShapeSlug, setSelectedShapeSlug] = useState("");
  const [selectedSettingSlug, setSelectedSettingSlug] = useState("");
  const [selectedMetalSlug, setSelectedMetalSlug] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [types, setTypes] = useState(null)
  const [shapes, setShapes] = useState([]);
  const [settings, setSettings] = useState([]);
  const [metals, setMetals] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        ...(selectedShapeSlug && { shape_names: selectedShapeSlug }),
        ...(selectedSettingSlug && { setting_names: selectedSettingSlug }),
        ...(selectedMetalSlug && { metal_names: selectedMetalSlug }),
        ...(selectedSizes?.length > 0 && { size_names: selectedSizes }),
        ...(priceRange[0] && { min_price: priceRange[0] }),
        ...(priceRange[1] && { max_price: priceRange[1] }),
      }

      const response = await fetchFilterApi(data)
      const { Shape_list, Size_list, types, selected } = response.data.data;
      console.log("types", types)
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
  }, [updatePage, selectedSize, priceRange, selectedSizes]);


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
      <Topbar />
      <Navbarmid />
      <NavbarBottom />
      <Breadcrumb
        heading="Round Diamond Stud Earrings"
        image="/images/earrings-bg.png"
        para="Explore our exquisite hoop earrings, climbers and
              fashion earrings to find your perfect pair."
      />

      <div className="page-nav container px-0">
        <p>Home</p>
        <FaAngleRight />
        <p>Earrings</p>
      </div>

      <h3 className="diamond-main-heading text-center">
        Find The Perfect Diamond Studs
      </h3>

      <section className="diamond">
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
            <div className="shapes settings justify-content-md-start justify-content-center">
              {settings?.map(setting => (
                <div className={`shapes-inner ${setting.slug === selectedSettingSlug ? 'selected' : ''}`} key={setting.id} onClick={() => handleSettingChangeSlug(setting.slug)}>
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
                <div className={`shapes-inner ${metal.slug === selectedMetalSlug ? 'selected' : ""}`} key={metal.id} onClick={() => handleMetalChangeSlug(metal.slug)} style={{ backgroundColor: metal.color_code }} >
                  <h6>{metal.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="range">
        <div className="container range-contain">
          <div className="row">
            <div className="col-md-12 diamond-head">
              <h5>Select the Size, Lab Diamond Quality & Prices</h5>
            </div>
            {/* <div className="col-md-12 col-lg-3  filter-main">
              <Filter sizes={sizes} selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes} setPriceRange={setPriceRange} priceRange={priceRange} />
            </div> */}
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
              {types && Object.entries(types).map(([size, categories]) => (
                <div className="row daimond-row-size" key={size}>
                  <div className="col-md-3 mb-4 d-flex flex-column align-items-center justify-content-center">
                    <p className='daimond-p-size'>{size}</p>
                  </div>
                  {categories?.map((category, i) => (
                    <div className="col-md-3 mb-4" key={i}>
                      <div className="new-product-items mt-3">
                        {/* <h5>{Object.keys(category)[0]}</h5> */}
                        {Object.values(category)[0]?.length > 0 ? <>
                          {
                            Object.values(category)[0].map(product => (
                              <div key={product.variation_id}>
                                <div className="wishlist-icon-fill d-flex justify-content-end">
                                  <FaHeart />
                                </div>
                                <img
                                  className="img-fluid"
                                  src={product.featured_image}
                                  alt="Product Image"
                                />
                                <hr />
                                <p>{product.title}</p>
                                <div className="rating-price d-flex">
                                  <h4>
                                    <span>${product.sale_price}</span> ${product.base_price}
                                  </h4>
                                  <Rating initialValue={0} readonly />
                                </div>
                                <button className="diamond-card-btn">BUY NOW</button>
                              </div>
                            ))
                          }
                        </> : "No product available"}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
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

      <Footer />
    </>
  );
};

export default Diamond;
