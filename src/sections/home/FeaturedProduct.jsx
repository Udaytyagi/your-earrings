import React from 'react'
import '../../Styles/featuredproduct.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FeaturedProduct = () => {

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
                <h2>Featured Products</h2>

              </div>
            </div>
          </div>

          <div className="row">


            <div className="slider-container">
              <Slider {...settings}>

                <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-1.png" alt="" />
                  <h4>Earrings</h4>
                </div>
                
               <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-2.png" alt="" />
                  <h4>Earrings</h4>
                </div>

               <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-3.png" alt="" />
                  <h4>Earrings</h4>
                </div>

               <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-4.png" alt="" />
                  <h4>Earrings</h4>
                </div>

               <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-5.png" alt="" />
                  <h4>Earrings</h4>
                </div>

               <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-6.png" alt="" />
                  <h4>Earrings</h4>
                </div>

               <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-2.png" alt="" />
                  <h4>Earrings</h4>
                </div>

               <div className="featuredpdt-items text-center">
                  <img className='img-fluid' src="/images/featured-3.png" alt="" />
                  <h4>Earrings</h4>
                </div>

              </Slider>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProduct
