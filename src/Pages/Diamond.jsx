import React, { useState, useEffect } from 'react';
import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";
import Filter from "./Filter";
import { FaRegHeart } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";
import { FaAngleRight } from "react-icons/fa6";
import axios from 'axios';
import "../Styles/diamond.css";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

const Diamond = () => {
  const [selectedShapeSlug, setSelectedShapeSlug] = useState("");
  const [selectedSettingSlug, setSelectedSettingSlug] = useState("");
  const [selectedMetalSlug, setSelectedMetalSlug] = useState("");
  const [selectedMetalId, setSelectedMetalId] = useState("1")
  const [selectedSize, setSelectedSize] = useState(1);
  const [beautifullProducts, setBeautifullProducts] = useState([]);
  const [brilliantProducts, setBrilliantProducts] = useState([]);
  const [masterpieceProducts, setMasterpieceProducts] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [settings, setSettings] = useState([]);
  const [metals, setMetals] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 0]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          ...(selectedShapeSlug && { shape_names: [selectedShapeSlug] }),
          ...(selectedSettingSlug && { setting_names: [selectedSettingSlug] }),
          ...(selectedMetalSlug && { metal_names: [selectedMetalSlug] }),
          ...(selectedSizes?.length > 0 && { size_names: selectedSizes }),
          ...(priceRange[0] && { min_price: priceRange[0] }),
          ...(priceRange[1] && { max_price: priceRange[1] }),
        }

        const response = await axios.post('https://earring-backend.cyberx-infosystem.us/api/fetch/all/filters/earrings', data);
        const { Shape_list, Size_list, types, selected } = response.data.data;
        // selected.shape_slug
        // selected.setting_slug
        // selected.metal_slug

        setShapes(Shape_list);
        const selectedShape = Shape_list.find(shape => shape.slug === selectedShapeSlug);
        setSettings(selectedShape?.settings || []);
        const selectedSetting = selectedShape?.settings.find(setting => setting.slug === selectedSettingSlug);
        setMetals(selectedSetting?.metal || []);
        setSizes(Size_list);
        setBeautifullProducts(types.Beautiful);
        setBrilliantProducts(types.Brilliant);
        setMasterpieceProducts(types.Masterpiece);
        if (!selectedShapeSlug && !selectedSettingSlug && !selectedMetalSlug) {
          setSelectedShapeSlug("round");
          setSelectedSettingSlug("4-prong-basket");
          setSelectedMetalSlug("14k-white-gold")
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedShapeSlug, selectedSettingSlug, selectedMetalSlug, selectedSize, priceRange, selectedSizes]);


  const handleShapeChangeSlug = (slug) => {
    setSelectedShapeSlug(slug);
  };

  const handleSettingChangeSlug = (slug) => {
    setSelectedSettingSlug(slug);
  };

  const handleMetalChangeSlug = (slug) => {
    setSelectedMetalSlug(slug);
  };


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
              {shapes.map(shape => (
                <div className={`shapes-inner ${shape.slug === selectedShapeSlug ? 'selected' : ''}`} key={shape.id} onClick={() => handleShapeChangeSlug(shape.slug)}>
                  <img className="img-diamond" src={shape.image} alt={shape.title} />
                  <h6>{shape.title}</h6>
                </div>
              ))}
            </div>
          </div>

          <div className="row diamond-row">
            <div className="col-md-12 diamond-head">
              <h5>Select Your Settings</h5>
            </div>
            <div className="shapes settings justify-content-start">
              {settings.map(setting => (
                <div className={`shapes-inner ${setting.slug === selectedSettingSlug ? 'selected' : ''}`} key={setting.id} onClick={() => handleSettingChangeSlug(setting.slug)}>
                  <img className="img-diamond" src={setting.image[selectedMetalId]} alt={setting.title} />
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
                <div className={`shapes-inner ${metal.slug === selectedMetalSlug ? 'selected' : ""}`} key={metal.id} onClick={() => { handleMetalChangeSlug(metal.slug); setSelectedMetalId(metal.id) }} style={{ backgroundColor: metal.color }} >
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
            <div className="col-md-12 col-lg-3  filter-main">
              <Filter sizes={sizes} selectedSizes={selectedSizes} setSelectedSizes={setSelectedSizes} setPriceRange={setPriceRange} priceRange={priceRange} />
            </div>
            <div className="col-md-12 col-lg-9 diamond-card-col">
              <div className="row">
                {
                  beautifullProducts && <div className="col-md-4 new-product-items-button">
                    <button>Beautiful (VS2+)</button>
                  </div>
                }
                {
                  brilliantProducts && <div className="col-md-4 new-product-items-button">
                    <button>Brilliant (VS1+)</button>
                  </div>
                }
                {
                  masterpieceProducts && <div className="col-md-4 new-product-items-button">
                    <button>Masterpiece (VVS2+)</button>
                  </div>
                }
              </div>
              <div className="row">

                {
                  beautifullProducts && <div className="col-md-4 mb-4" >
                    {beautifullProducts && beautifullProducts?.map((product, i) => (
                      <div className="new-product-items mt-3" key={i}>
                        <a href="#">
                          <FaRegHeart />
                        </a>
                        <img
                          className="img-fluid"
                          src={product?.featured_image || "/images/products-1.png"}
                          alt="Product Image"
                        />
                        <hr />
                        <p>
                          {product?.title || "Product Name"}
                        </p>
                        <div className="rating-price d-flex">
                          <h4>
                            <span>£{product?.base_price}</span>

                            £{product?.sale_price}
                          </h4>
                          <Rating initialValue={product?.Rating} readonly />
                        </div>
                        <a href="single-products">
                          <button className="diamond-card-btn">BUY NOW</button>
                        </a>
                      </div>
                    ))}
                  </div>
                }


                {
                  brilliantProducts && <div className="col-md-4 mb-4" >
                    {brilliantProducts && brilliantProducts?.map((product, i) => (
                      <div className="new-product-items mt-3" key={i}>
                        <a href="#">
                          <FaRegHeart />
                        </a>
                        <img
                          className="img-fluid"
                          src={product?.featured_image || "/images/products-1.png"}
                          alt="Product Image"
                        />
                        <hr />
                        <p>
                          {product?.title || "Product Name"}
                        </p>
                        <div className="rating-price d-flex">
                          <h4>
                            <span>£{product?.base_price}</span>

                            £{product?.sale_price}
                          </h4>
                          <Rating initialValue={product?.Rating} readonly />
                        </div>
                        <a href="single-products">
                          <button className="diamond-card-btn">BUY NOW</button>
                        </a>
                      </div>
                    ))}
                  </div>
                }

                {
                  masterpieceProducts && <div className="col-md-4 mb-4" >
                    {masterpieceProducts && masterpieceProducts?.map((product, i) => (
                      <div className="new-product-items mt-3" key={i}>
                        <a href="#">
                          <FaRegHeart />
                        </a>
                        <img
                          className="img-fluid"
                          src={product?.featured_image || "/images/products-1.png"}
                          alt="Product Image"
                        />
                        <hr />
                        <p>
                          {product?.title}
                        </p>
                        <div className="rating-price d-flex">
                          <h4>
                            <span>£{product?.base_price}</span>

                            £{product?.sale_price}
                          </h4>
                          <Rating initialValue={product?.Rating} readonly />
                        </div>
                        <a href="single-products">
                          <button className="diamond-card-btn">BUY NOW</button>
                        </a>
                      </div>
                    ))}
                  </div>
                }
                {
                  !beautifullProducts && !brilliantProducts && !masterpieceProducts && <div className='d-flex justify-content-center fw-bold'>No Products to show</div>
                }
              </div>
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
