import React, { useState } from "react";
import "../../src/styles/LoginModal.css";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { fetchUser } from "../redux/slice/fetchUserSlice";
import { fetchWishListApi } from "Apis/MainApis";
import { fetchHomeProducts } from "../redux/slice/fetchHomeProductsSlice";
import { useDispatch } from "react-redux";
import { baseURl } from "Utils/BaseURL";
import axios from "axios";
import { fetchWishlist } from "../redux/slice/fetchWishlistSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function LoginModal({ showModal, setShowModal }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login_validationErrors, setlogin_ValidationErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const login_resetForm = () => {
        setEmail("");
        setPassword("");
        setlogin_ValidationErrors({});
    };

    const login_validateform = () => {
        const login_errors = {};
        if (!email) {
            login_errors.email = "Email is required";
        }
        if (!password) {
            login_errors.password = "Password is required";
        }
        setlogin_ValidationErrors(login_errors);
        return Object.keys(login_errors).length === 0;
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (login_validationErrors.email) {
            setlogin_ValidationErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (login_validationErrors.password) {
            setlogin_ValidationErrors((prevErrors) => ({
                ...prevErrors,
                password: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (login_validateform()) {
            const userData = {
                email: email,
                password: password,
            };
            try {
                const response = await axios.post(`${baseURl}login`, userData);
                if (response.data.status === "success") {
                    localStorage.setItem("Meteor_Key", response.data.data.token);
                    dispatch(fetchUser());
                    dispatch(fetchWishlist());
                    dispatch(fetchHomeProducts());
                    setShowModal(false);
                    login_resetForm();
                    toast.success(response?.data?.message);
                }
            } catch (error) {
                toast.error(error?.response?.data?.message);
            }
        } else {
            console.log("Form is invalid!");
        }
    };
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="login_heading_title fw-bold">
                        Login to continue
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label className="signin-label"> Email</Form.Label>
                            <Form.Control
                                style={{
                                    border: login_validationErrors.email ? "1px solid red" : "",
                                    color: login_validationErrors.email ? "red" : "",
                                }}
                                placeholder="Enter your email"
                                className="signin-formcontrol"
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                                autoComplete="username"
                            />
                            {login_validationErrors.email && (
                                <div className="login_error">
                                    {login_validationErrors.email}
                                </div>
                            )}
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="signin-label">Password</Form.Label>
                            <div className="password-input">
                                <Form.Control
                                    style={{
                                        border: login_validationErrors.password
                                            ? "1px solid red"
                                            : "",
                                        color: login_validationErrors.password ? "red" : "",
                                    }}
                                    placeholder="Enter your password"
                                    className="signin-formcontrol"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    autoComplete="current-password"
                                />
                                <div
                                    className="password-toggle"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            {login_validationErrors.password && (
                                <div className="login_error">
                                    {login_validationErrors.password}
                                </div>
                            )}
                        </Form.Group>
                        <div className="d-flex align-items-center">
                            <button
                                className="signin-button px-5"
                                variant="primary"
                                type="submit"
                            >
                                LogIn
                            </button>
                        </div>
                        <p className="my-md-2">
                            Don’t have an account?{" "}
                            <span>
                                <Link to="/signup">Sign Up</Link>
                            </span>
                        </p>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;
