import Slider from "react-slick";
import '../Styles/singleproductslider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "react-simple-star-rating";
import { TbCurrencyPound } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const SingleProductSlider = ({ product }) => {
  const navigate=useNavigate();
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
      {
        product && product.All_collection && <section className="featured-product">
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
                  {
                    product?.All_collection[1]?.Product_details?.map((product, i) => (
                      <div className="" key={i} onClick={() => navigate(`/${product.Slug}?vId=${product.Variation_id}`)}>
                        <div className="new-product-items slide">
                          <img
                            className="img-fluid"
                            src={product?.image || "/images/products-1.png"}
                            alt="Product Image"
                          />
                          <hr />
                          <p>{product?.Name}</p>
                          <div className="rating-price d-flex">
                            <Rating initialValue={product?.Rating || 0} />
                            <h4>
                              <TbCurrencyPound />
                              {product?.Sale_price}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </Slider>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default SingleProductSlider;
