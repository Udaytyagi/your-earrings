import '../../Styles/testimonial.css'
// import { Rating } from 'react-simple-star-rating'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {


  
  // const [rating, setRating] = useState(0)
    
  // const handleRating = (rate) => {
  //   setRating(rate)

  // }



  var settings = {
  
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
    pauseOnHover: true,

  
  };


  return (
    <>
      <section className="testimonial">
        <div className="container">

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

                            <div className='testimonial-items-customer'>
                              
                                <div className="testimonial-maincard  d-flex align-items-center">
                                    <div className="testimonial-item-one">
                                        <img className='img-fluid' src="/images/testi-1.png" alt="" />
                                    </div>

                                    <div className="testimonial-item-two">
                                      {/* <Rating onClick={handleRating} initialValue={4} /> */}

                                      <h5>Micheal Clark <sub>(Customer)</sub></h5>
                                    </div>
                                </div>

                                <div className="testimonial-review">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, modi. Aut alias quaerat sequi cupiditate similique, nam velit qui in culpa quae hic ea cum? Deserunt distinctio quam perspiciatis et!</p>
                                </div>
                              
                            </div>

                            <div className='testimonial-items-customer'>
                              
                                <div className="testimonial-maincard  d-flex align-items-center">
                                    <div className="testimonial-item-one">
                                        <img className='img-fluid' src="/images/testi-1.png" alt="" />
                                    </div>

                                    <div className="testimonial-item-two">
                                      {/* <Rating onClick={handleRating} initialValue={4} /> */}

                                      <h5>Micheal Clark <sub>(Customer)</sub></h5>
                                    </div>
                                </div>

                                <div className="testimonial-review">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, modi. Aut alias quaerat sequi cupiditate similique, nam velit qui in culpa quae hic ea cum? Deserunt distinctio quam perspiciatis et!</p>
                                </div>
                              
                            </div>

                            <div className='testimonial-items-customer'>
                              
                                <div className="testimonial-maincard  d-flex align-items-center">
                                    <div className="testimonial-item-one">
                                        <img className='img-fluid' src="/images/testi-1.png" alt="" />
                                    </div>

                                    <div className="testimonial-item-two">
                                      {/* <Rating onClick={handleRating} initialValue={4} /> */}

                                      <h5>Micheal Clark <sub>(Customer)</sub></h5>
                                    </div>
                                </div>

                                <div className="testimonial-review">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, modi. Aut alias quaerat sequi cupiditate similique, nam velit qui in culpa quae hic ea cum? Deserunt distinctio quam perspiciatis et!</p>
                                </div>
                              
                            </div>


                            <div className='testimonial-items-customer'>
                              
                                <div className="testimonial-maincard  d-flex align-items-center">
                                    <div className="testimonial-item-one">
                                        <img className='img-fluid' src="/images/testi-1.png" alt="" />
                                    </div>

                                    <div className="testimonial-item-two">
                                      {/* <Rating onClick={handleRating} initialValue={4} /> */}

                                      <h5>Micheal Clark <sub>(Customer)</sub></h5>
                                    </div>
                                </div>

                                <div className="testimonial-review">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, modi. Aut alias quaerat sequi cupiditate similique, nam velit qui in culpa quae hic ea cum? Deserunt distinctio quam perspiciatis et!</p>
                                </div>
                              
                            </div>



                            
                            
                          </Slider>
                    </div>
                </div>
              </div>
            </div>


        </div>
      </section>
    </>
  )
}

export default Testimonial
