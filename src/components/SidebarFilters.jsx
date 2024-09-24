import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../Styles/SidebarFilters.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const SidebarFilters = ({ showFilters, setShowFilters, sizes, selectedSizes, setSelectedSizes, setPriceRange, priceRange, minPrice, maxPrice, setMinPrice, setMaxPrice }) => {

    const [isAnimating, setIsAnimating] = useState(false);
    const minPrices = [0, 600, 1000, 1500, 2000, 2600, 4000, 5000];
    const maxPrices = [600, 1000, 1500, 2000, 2600, 4000, "5000+"];

    useEffect(() => {
        if (showFilters) {
            setIsAnimating(true);
        } else {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [showFilters]);

    const handleSizeChange = (slug) => {
        setSelectedSizes((prevSizes) =>
            prevSizes.includes(slug) ? prevSizes.filter((s) => s !== slug) : [...prevSizes, slug]
        );
    };


    return (
        <>
            <Offcanvas
                show={showFilters}
                onHide={() => setShowFilters(false)}
                backdrop={true}
                scroll={true}
                className={`offcanvas ${isAnimating ? (showFilters ? 'offcanvas-enter' : 'offcanvas-exit') : ''}`}
                style={{
                    backgroundColor: "white",
                    boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.06)"
                }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ fontWeight: "bold", color: "black", fontSize: "24x" }}>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <div style={{ borderBottom: "0.5px solid #807575" }} className="mx-3"></div>
                <Offcanvas.Body style={{ padding: "0px" }}>
                    <div className="filter-section px-3">
                        <div className="form-group" style={{
                            borderBottom: "0.5px solid #807575",
                            padding: "20px 0px"
                        }}>
                            <h5 className="filter-title">Price</h5>
                            <div className="d-flex align-items-center justify-content-between">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        className="border border-dark px-2"
                                        variant=""
                                        id="dropdown-basic"
                                    >
                                        ₹ {minPrice}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {minPrices.map(option => (
                                            <Dropdown.Item
                                                key={option}
                                                onClick={() => setMinPrice(option)}
                                            >
                                                ₹ {option}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                                <span className="mx-2">To</span>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        className="border border-dark px-2"
                                        variant=""
                                        id="dropdown-basic"
                                    >
                                        ₹ {maxPrice}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {maxPrices.map(option => (
                                            <Dropdown.Item
                                                key={option}
                                                onClick={() => setMaxPrice(option)}
                                            >
                                                ₹ {option}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>


                        {
                            sizes && <div className="form-group" style={{
                                borderBottom: "0.5px solid #807575",
                                padding: "20px 0px"
                            }}>
                                <h5 className="filter-title">Size</h5>
                                <div className="filter-options">
                                    {sizes?.map((size) => (
                                        <div key={size.id} className="form-check">
                                            <input
                                                type="checkbox"
                                                value={size.slug}
                                                onChange={() => handleSizeChange(size.slug)}
                                                checked={selectedSizes.includes(size.slug)}
                                                className="form-check-input"
                                            />
                                            <label className="form-check-label">{size.title}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SidebarFilters
