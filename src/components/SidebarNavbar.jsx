import React, { useState, useEffect } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../Styles/SidebarNavbar.css"
import { useNavigate } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function SidebarNavbar({ show, setShow }) {
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
                            <li className="sidebar-nav-item" onClick={() => { navigation("/"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><IoHomeOutline
                                    style={{
                                        marginRight: "5px",
                                        cursor: "pointer",
                                    }}
                                />HOME</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/diamond"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><IoHomeOutline
                                    style={{
                                        marginRight: "5px",
                                        cursor: "pointer",
                                    }}
                                />Diamond Earrings</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><IoHomeOutline
                                    style={{
                                        marginRight: "5px",
                                        cursor: "pointer",
                                    }}
                                />About Us</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><IoHomeOutline
                                    style={{
                                        marginRight: "5px",
                                        cursor: "pointer",
                                    }}
                                />Contact Us</p>
                            </li>
                            <li className="sidebar-nav-item" onClick={() => { navigation("/"); setShow(false) }}>
                                <p className="sidebar-nav-link d-flex align-items-center"><IoHomeOutline
                                    style={{
                                        marginRight: "5px",
                                        cursor: "pointer",
                                    }}
                                />Blogs</p>
                            </li>
                        </ul>
                    </div>


                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


export default SidebarNavbar
