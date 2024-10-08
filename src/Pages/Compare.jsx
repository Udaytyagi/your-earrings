import React from 'react'
import "../Styles/Compare.css"
import Topbar from '../sections/common/Topbar'
import Navbarmid from "../sections/common/Navbarmid";
import NavbarBottom from "../sections/common/NavbarBottom";
import Footer from "../sections/common/Footer";

const Compare = () => {
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
                                            <th id="product-col" className="table-col">
                                                <img className="product-img img-fluid" src="/images/compare4.png" />
                                                <h5>
                                                    Natural Diamonds Round 4-Prong Martini
                                                </h5>
                                            </th>
                                            <th className="table-col">
                                                <img className="product-img img-fluid" src="/images/compare4.png" />
                                                <h5>
                                                    Natural Diamonds Round 4-Prong Martini
                                                </h5>
                                            </th>
                                            <th className="table-col">
                                                <img className="product-img img-fluid" src="/images/compare4.png" />
                                                <h5>
                                                    Natural Diamonds Round 4-Prong Martini
                                                </h5>
                                            </th>
                                            <th className="table-col">
                                                <img className="product-img img-fluid" src="/images/compare4.png" />
                                                <h5>
                                                    Natural Diamonds Round 4-Prong Martini
                                                </h5>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="zui-sticky-col">Shape</td>
                                            <td>Round</td>
                                            <td>Oval</td>
                                            <td>Pear</td>
                                            <td>Cushion</td>
                                        </tr>
                                        <tr>
                                            <td className="zui-sticky-col">Setting</td>
                                            <td>4-Prong Basket</td>
                                            <td>Halo</td>
                                            <td>Crown</td>
                                            <td>4-Prong Basket</td>
                                        </tr>
                                        <tr>
                                            <td className="zui-sticky-col">Metal</td>
                                            <td>18k Yellow Gold</td>
                                            <td>14k yellow gold</td>
                                            <td>18k Yellow Gold</td>
                                            <td>14k yellow gold</td>
                                        </tr>
                                        <tr>
                                            <td className="zui-sticky-col">Size</td>
                                            <td>0.25</td>
                                            <td>0.35</td>
                                            <td>0.25</td>
                                            <td>0.35</td>
                                        </tr>
                                        <tr>
                                            <td className="zui-sticky-col">Clarity</td>
                                            <td>Beautiful</td>
                                            <td>Brilliant</td>
                                            <td>Beautiful</td>
                                            <td>Masterpiece</td>
                                        </tr>
                                        <tr>
                                            <td className="zui-sticky-col">Color</td>
                                            <td>I-J</td>
                                            <td>H-I</td>
                                            <td>G-H</td>
                                            <td>I-J</td>
                                        </tr>
                                        <tr>
                                            <td className="zui-sticky-col">Base Price</td>
                                            <td>$399</td>
                                            <td>$399</td>
                                            <td>$399</td>
                                            <td>$399</td>
                                        </tr>
                                        <tr>
                                            <td className="zui-sticky-col">Sale Price</td>
                                            <td>$299</td>
                                            <td>$299</td>
                                            <td>$299</td>
                                            <td>$299</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Compare
