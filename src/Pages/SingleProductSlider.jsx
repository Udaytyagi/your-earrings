import Slider from "react-slick";
import '../Styles/singleproductslider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "react-simple-star-rating";
import { TbCurrencyPound } from "react-icons/tb";

const SingleProductSlider = () => {
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="featured-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="featured-heading text-center">
                <h2>POPULAR PRODUCTS</h2>
                <p className="slider-para">Our popular products are so beautiful to see that the shoppers 
                are easily attracted to them.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="">
                  <div className="new-product-items slide">
                    <img
                      className="img-fluid"
                      src="/images/products-1.png"
                      alt="Product Image"
                    />
                    <hr />
                    <p>Lorem Ipsum is simply</p>
                    <div className="rating-price d-flex">
                      <Rating initialValue={4} />
                      <h4>
                        <TbCurrencyPound />
                        100
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="new-product-items slide">
                    <img
                      className="img-fluid"
                      src="/images/products-1.png"
                      alt="Product Image"
                    />
                    <hr />
                    <p>Lorem Ipsum is simply</p>
                    <div className="rating-price d-flex">
                      <Rating initialValue={4} />
                      <h4>
                        <TbCurrencyPound />
                        100
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="new-product-items slide">
                    <img
                      className="img-fluid"
                      src="/images/products-1.png"
                      alt="Product Image"
                    />
                    <hr />
                    <p>Lorem Ipsum is simply</p>
                    <div className="rating-price d-flex">
                      <Rating initialValue={4} />
                      <h4>
                        <TbCurrencyPound />
                        100
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="new-product-items slide">
                    <img
                      className="img-fluid"
                      src="/images/products-1.png"
                      alt="Product Image"
                    />
                    <hr />
                    <p>Lorem Ipsum is simply</p>
                    <div className="rating-price d-flex">
                      <Rating initialValue={4} />
                      <h4>
                        <TbCurrencyPound />
                        100
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="new-product-items slide">
                    <img
                      className="img-fluid"
                      src="/images/products-1.png"
                      alt="Product Image"
                    />
                    <hr />
                    <p>Lorem Ipsum is simply</p>
                    <div className="rating-price d-flex">
                      <Rating initialValue={4} />
                      <h4>
                        <TbCurrencyPound />
                        100
                      </h4>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductSlider;
