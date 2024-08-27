import { FaRegHeart } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'



import '../../Styles/popularproducts.css'

const Popularproducts = () => {



  return (
    <>
      <section className="popular-product">
        <div className="container">
            <div className="row">
                <div className="col-md-12"> 
                    <div className="popular-heading text-center">
                        <h2>Popular Products</h2>
                        <p>Our popular products are so beautiful to see that the shoppers 
                        are easily attracted to them.</p>
                       
                    </div>
                </div>
            </div>

            <div className="row gy-4">
                <div className="col-md-6 col-lg-3">
                    <div className="popularproducts-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-pricepopopular d-flex">
                           <Rating />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="popularproducts-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-pricepopopular d-flex">
                           <Rating />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="popularproducts-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-pricepopopular d-flex">
                           <Rating />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="popularproducts-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-pricepopopular d-flex">
                           <Rating />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                
            </div>

        </div>
      </section>
    </>
  )
}

export default Popularproducts
