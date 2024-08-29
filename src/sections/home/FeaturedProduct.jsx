import React from 'react'
import '../../Styles/featuredproduct.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FeaturedProduct = ({ products }) => {

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
      <section className="featured-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="featured-heading text-center">
                <h2>{products?.Collection_name || "Collection Name"}</h2>

              </div>
            </div>
          </div>

          <div className="row">
            {
              products && products?.Product_details && products?.Product_details?.length > 3 ? <div className="slider-container">
                <Slider {...settings}>
                  {
                    products && products?.Product_details && products?.Product_details?.length > 0 && products.Product_details.map((product, i) => (
                      <div className="featuredpdt-items text-center" key={i}>
                        <div className='featuredpdt-round'>
                          <img className='img-fluid' src={product.image || "/images/products-1.png"} alt="" />
                        </div>

                        <h3>{product.Name || 'Product Name'}</h3>
                      </div>
                    ))
                  }
                </Slider>   </div> : <>
                {
                  products && products?.Product_details && products?.Product_details?.length > 0 && products.Product_details.map((product, i) => (
                    <div className="col-lg-3 col-md-6 featuredpdt-items text-center d-flex flex-column align-items-center" key={i}>
                      <div className='featuredpdt-round'>
                        <img className='img-fluid' src={product.image || "/images/products-1.png"} alt="" />
                      </div>
                      <h3>{product.Name || 'Product Name'}</h3>
                    </div>
                  ))
                }
              </>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProduct