import{useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'

import '../../Styles/newproducts.css'

const NewProducts = () => {


    const [rating, setRating] = useState(0)
    
    const handleRating = (rate) => {
      setRating(rate)
  
    }

    
    
  return (
    <>
      <section className="new-product">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="new-heading text-center">
                        <h2>New Products</h2>
                       
                    </div>
                </div>
            </div>

            <div className="row gy-4">
                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                            <div className="rating-price d-flex">
                            <Rating onClick={handleRating} initialValue={4} />
                                <h4>£300</h4>
                            </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-price d-flex">
                        <Rating onClick={handleRating} initialValue={4} />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

              

                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-price d-flex">
                        <Rating onClick={handleRating} initialValue={4} />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-price d-flex">
                        <Rating onClick={handleRating} initialValue={4} />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="row mt-4 mt-md-0 gy-4">
                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-price d-flex">
                        <Rating onClick={handleRating} initialValue={4} />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-price d-flex">
                        <Rating onClick={handleRating} initialValue={4} />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-price d-flex">
                        <Rating onClick={handleRating} initialValue={4} />
                            <h4>£300</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="new-product-items">
                        <a href="#"><FaRegHeart /></a>
                        <img className='img-fluid' src="/images/products-1.png" alt="" />
                        <hr />
                        <h3>Diamond Earrings</h3>
                        <div className="rating-price d-flex">
                        <Rating onClick={handleRating} initialValue={4} />
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

export default NewProducts
