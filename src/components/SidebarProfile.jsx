import React, { useState, useEffect } from "react";
import "../Styles/SidebarFilters.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RxBorderSplit } from "react-icons/rx";
import { FaRegAddressCard } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const SidebarProfile = ({ show, setShow }) => {

    const navigation = useNavigate()
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (show) {
            setIsAnimating(true);
        } else {
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [show]);


    return (
        <>
            <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                backdrop={true}
                scroll={true}
                className={`offcanvas ${isAnimating ? (show ? 'offcanvas-enter' : 'offcanvas-exit') : ''}`}
                style={{
                    backgroundColor: "white",
                    boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.06)"
                }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><img
                        onClick={() => navigation("/")}
                        src="/images/logo.png"
                        alt="logo-img"
                        style={{ height: "40px" }}
                    /></Offcanvas.Title>
                </Offcanvas.Header>
                <div style={{ borderBottom: "0.5px solid #807575" }} className="mx-3"></div>
                <Offcanvas.Body style={{ padding: "0px" }}>

                    <div className="px-3 sidebar-navbar">
                        <ul className="sidebar-navbar-nav flex-column">
                            <li className="sidebar-nav-item" onClick={() => { navigation("/dashboard/profile"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><CgProfile
                                    style={{
                                        marginRight: "7px",
                                        cursor: "pointer",
                                    }}
                                />My Profile</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/dashboard/orders"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><RxBorderSplit
                                    style={{
                                        marginRight: "7px",
                                        cursor: "pointer",
                                    }}
                                />My Orders</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/dashboard/addresses"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><FaRegAddressCard
                                    style={{
                                        marginRight: "7px",
                                        cursor: "pointer",
                                    }}
                                />My Addresses</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/wishlist"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><FaRegHeart
                                    style={{
                                        marginRight: "7px",
                                        cursor: "pointer",
                                    }}
                                />My Wishlist</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/cart"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><MdOutlineShoppingCart
                                    style={{
                                        marginRight: "7px",
                                        cursor: "pointer",
                                    }}
                                />My Cart</p>
                            </li>
                        </ul>
                    </div>


                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SidebarProfile
