import { FaRegHeart } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'
import '../../Styles/popularproducts.css'

const Popularproducts = ({ products }) => {
    return (
        <>
            <section className="popular-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="popular-heading text-center">
                                <h2>{products?.Collection_name || "Collection Name"}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-4">
                        {products && products?.Product_details && products?.Product_details?.length > 0 && products.Product_details.map((product, i) => (
                            <div key={i} className="col-md-6 col-lg-3">
                                <div className="popularproducts-items">
                                    <a href="#"><FaRegHeart /></a>
                                    <img className='img-fluid' src={product.image || "/images/products-1.png"} alt={product.Name || 'Product Image'} />
                                    <hr />
                                    <h3>{product.Name || 'Product Name'}</h3>
                                    <div className="rating-pricepopopular d-flex">
                                        <Rating ratingValue={product.Rating || 5} readonly />
                                        <h4>${product.Sale_price || '$0'}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Popularproducts
