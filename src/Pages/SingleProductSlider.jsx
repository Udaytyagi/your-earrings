import Slider from "react-slick";
import '../Styles/singleproductslider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rating } from "react-simple-star-rating";
import { TbCurrencyPound } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleProductSlider = ({ product }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (product && product.All_collection) {
      const popularCollection = product.All_collection.find(collection => collection.Collection_name === "Popular Products");
      if (popularCollection) {
        setPopularProducts(popularCollection.Product_details);
      }
      setLoading(false);
    }
  }, [product]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (loading) return <div>Loading...</div>;

  if (!popularProducts.length) return null;

  return (
    <section className="featured-product">
      <div className="container" style={{ padding: "0px 40px" }}>
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>POPULAR PRODUCTS</h2>
            <p className="slider-para">Our popular products are so beautiful to see that the shoppers are easily attracted to them.</p>
          </div>
        </div>

        <div className="row">
          <div className="slider-container">
            <Slider {...settings}>
              {popularProducts.map((product, i) => (
                <div key={i} onClick={() => navigate(`/${product.Slug}?vId=${product.Variation_id}`)}>
                  <div className="new-product-items slide">
                    <img
                      className="img-fluid"
                      src={product.image || "/images/products-1.png"}
                      alt={product.Name || "Product Image"}
                    />
                    <hr />
                    <p>{product.Name}</p>
                    <div className="rating-price d-flex">
                      <Rating initialValue={product.Rating || 0} />
                      <h4>
                        <TbCurrencyPound />
                        {product.Sale_price}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductSlider;
