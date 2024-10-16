import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Styles/Compare.css";
import Topbar from '../sections/common/Topbar';
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";
import { fetchCompareProduct } from '../features/slices/compare/compareSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from "react-icons/fa";

const Compare = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [variationIds, setVariationIds] = useState([]);
    const compareProducts = useSelector((state) => state.compare.data);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const productsParam = queryParams.get('products');

        if (productsParam) {
            const productArray = productsParam.split(',').map(product => product.split('-').pop());
            setVariationIds(productArray);
            const data = { variation_ids: productArray };
            dispatch(fetchCompareProduct(data));
        }
    }, [location, dispatch]);

    const handleDelete = (variationId) => {
        const compareIds = JSON.parse(localStorage.getItem("compareItems")) || [];
        const updatedCompareIds = compareIds.filter(item => item.variationId != variationId);
        localStorage.setItem("compareItems", JSON.stringify(updatedCompareIds));

        const updatedVariationIds = variationIds.filter(id => id !== variationId);
        setVariationIds(updatedVariationIds);

        const products = updatedCompareIds.map(item => `${item.productSlug}-${item.variationId}`).join(",");
        navigate(`/compare?products=${products}`);
    };

    return (
        <>
            <Topbar />
            <Navbarmid />
            <NavbarBottom />
            <div className='container py-5 compare'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Product Comparison</h2>
                        <div className="zui-wrapper">
                            <div className="instruction">
                                <em><i className="fas fa-arrows-alt-h"></i> Swipe for more products</em>
                            </div>
                            <div id="container" className="zui-scroller">
                                <table className="zui-table">
                                    <thead>
                                        <tr>
                                            <th className="zui-sticky-col">&nbsp;</th>
                                            {compareProducts && compareProducts.slice(1).map((_, index) => {
                                                const productId = variationIds[index];
                                                return (
                                                    <th key={index} className="table-col">
                                                        <img className="product-img img-fluid" src="/images/compare4.png" alt={`Product ${index + 1}`} />
                                                        <h5>{`Product ${index + 1}`}</h5>
                                                        <button onClick={() => handleDelete(productId)} className="delete-btn">
                                                            <FaTrash />
                                                        </button>
                                                    </th>
                                                );
                                            })}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {compareProducts && compareProducts[0].Key.map((key, index) => (
                                            <tr key={index}>
                                                <td className="zui-sticky-col">{key}</td>
                                                {compareProducts.slice(1).map((product, productIndex) => {
                                                    const productData = product[`product_${productIndex + 1}`];
                                                    return (
                                                        <td key={productIndex}>
                                                            {productData && productData[key] ? productData[key] : 'N/A'}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Compare;
