import '../../Styles/testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ products }) => {
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
      <section className="testimonial">
        <div className="container" style={{ padding: "0px 47px" }}>

          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-heading text-center">
                <h2>Some Words from Our Customers</h2>
                <p className='slider-para'>We Satisfied More Than 700 customers</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-items">
                <div className="slider-container">

                  <Slider {...settings}>
                    {
                      products && products?.map((product, i) => (
                        <div className='testimonial-items-customer' key={i}>
                          <div className="testimonial-maincard  d-flex align-items-center">
                            <div className="testimonial-item-one">
                              <img className='img-fluid' src={product?.image || "/images/testi-1.png"} alt="" />
                            </div>

                            <div className="testimonial-item-two">
                              {/* <Rating onClick={handleRating} initialValue={4} /> */}
                              <h5>{product?.name} <sub>({product?.designation})</sub></h5>
                            </div>
                          </div>

                          <div className="testimonial-review">
                            <p dangerouslySetInnerHTML={{ __html: product?.messgae }}></p>
                          </div>

                        </div>
                      ))
                    }

                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}

export default Testimonial
