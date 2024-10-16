import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Rating } from 'react-simple-star-rating'
import '../../Styles/newproducts.css'
import { useNavigate } from "react-router-dom";


const NewProducts = ({ products, handleUpdateWishlist }) => {
    const navigate = useNavigate()
    return (
        <>
            <section className="new-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="new-heading text-center">
                                <h2>{products?.Collection_name || "Collection Name"}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-4">
                        {
                            products && products?.Product_details && products?.Product_details?.length > 0 && products?.Product_details?.map((product, i) => (
                                <div className="col-md-6 col-lg-3" key={i}>
                                    <div className="new-product-items" style={{ cursor: "pointer" }}>
                                        {
                                            product?.Wishlist === true ? <div className="wishlist-icon-fill d-flex justify-content-end" onClick={() => handleUpdateWishlist(product?.Variation_id)}><FaHeart /></div> : <div className="wishlist-icon d-flex justify-content-end" onClick={() => handleUpdateWishlist(product?.Variation_id)}><FaRegHeart /></div>
                                        }
                                        <div onClick={() => navigate(`/${product.Slug}?vId=${product.Variation_id}`)}>
                                            <img className='img-fluid' src={product.image || "/images/products-1.png"} alt="" />
                                            <hr />
                                            <h3>{product.Name || 'Product Name'}</h3>
                                            <div className="rating-price d-flex">
                                                <Rating ratingValue={product.Rating || 5} readonly />
                                                <h4>${product.Sale_price || '$0'}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>


                </div>
            </section>
        </>
    )
}

export default NewProducts
