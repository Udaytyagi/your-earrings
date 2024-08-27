import Topbar from "../sections/common/Topbar";
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import Breadcrumb from "../sections/common/Breadcrumb";

import { FaRegHeart } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

import { FaAngleRight } from "react-icons/fa6";

import "../Styles/diamond.css";
import Filter from "./Filter";

import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";

function Diamond() {
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
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/round.png"
                  alt="round"
                />
                <h6>Round</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/oval.png"
                  alt="oval"
                />
                <h6>Oval</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/pear.png"
                  alt="pear"
                />
                <h6>Pear</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/emarald.png"
                  alt="emarald"
                />
                <h6>Emarald</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/princess.png"
                  alt="princess"
                />
                <h6>Princess</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/marquise.png"
                  alt="marquise"
                />
                <h6>Marquise</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/baguette.png"
                  alt="baguette"
                />
                <h6>Baguette</h6>
              </div>
            </div>
          </div>

          <div className="row diamond-row">
            <div className="col-md-12 diamond-head">
              <h5>Select Your Settings</h5>
            </div>
            <div className="shapes settings">
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/4-prong Basket.png"
                  alt="4-prong Basket"
                />
                <h6>4-prong Basket</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/4-Prong Martini.png"
                  alt="4-Prong Martini"
                />
                <h6>4-Prong Martini</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/3-Prong Martini.png"
                  alt="3-Prong Martini"
                />
                <h6>3-Prong Martini</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/Crown.png"
                  alt="Crown"
                />
                <h6>Crown</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/Bezel.png"
                  alt="Bezel"
                />
                <h6>Bezel</h6>
              </div>
              <div className="shapes-inner">
                <img
                  className="img-diamond"
                  src="/images/Halo.png"
                  alt="Halo"
                />
                <h6>Halo</h6>
              </div>
            </div>
          </div>

          <div className="row diamond-row">
            <div className="col-md-12 diamond-head">
              <h5>Select Your Metals</h5>
            </div>
            <div className="shapes select-btn">
              <div className="shapes-inner">
               <a href="#"><button className="White-Gold">14k White Gold</button></a>
              </div>
              <div className="shapes-inner">
               <a href="#"><button className="yellow-Gold">14k Yellow Gold</button></a>
              </div>
              <div className="shapes-inner">
               <a href="#"><button className="Rose-Gold">14k Rose Gold</button></a>
              </div>
              <div className="shapes-inner">
               <a href="#"><button className="White-Gold">18k White Gold</button></a>
              </div>
              <div className="shapes-inner">
               <a href="#"><button className="yellow-Gold">18k Yellow Gold</button></a>
              </div>
              <div className="shapes-inner">
               <a href="#"><button className="Rose-Gold">14k Rose Gold</button></a>
              </div>
              <div className="shapes-inner">
               <a href="#"><button className="platinum">Platinum</button></a>
              </div>
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
              <Filter />
            </div>
            <div className="col-md-12 col-lg-9 diamond-card-col">
              <div className="row">
                <div className="col-md-4 new-product-items-button">
                  <button>Beautiful (VS2+)</button>
                </div>
                <div className="col-md-4 new-product-items-button">
                  <button>Brilliant (VS1+)</button>
                </div>
                <div className="col-md-4 new-product-items-button">
                  <button>Masterpiece (VVS2+)</button>
                </div>
              </div>
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((product, i) => (
                  <div className="col-md-4 mb-4" key={i}>
                    <div className="new-product-items">
                      <a href="#">
                        <FaRegHeart />
                      </a>
                      <img
                        className="img-fluid"
                        src="/images/products-1.png"
                        alt="Product Image"
                      />
                      <hr />
                      <p>
                        Diamond Stud Earrings Round 0.25 ct. tw. (H-l, VS) 14k
                        White Gold 4-Prong Basket
                      </p>
                      <div className="rating-price d-flex">
                        <h4>
                          <span>£500</span>
                          
                          £300
                        </h4>
                        <Rating initialValue={4} />
                      </div>
                      <a href="single-products">
                        <button className="diamond-card-btn">BUY NOW</button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <nav>
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
          </nav>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Diamond;
