import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/LoginModal.css"
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal } from "../features/slices/user/userSlice";
import { loginApi } from "../apis/authApis/authApis";
import { useNavigate } from 'react-router-dom'

function LoginModal({ openLoginModal, setOpenLoginModal }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login_validationErrors, setlogin_ValidationErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)


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
            const data = {
                email: email,
                password: password
            }
            await loginApi(data, setLoading, dispatch, navigate, setOpenLoginModal)
        }
    };
    return (
        <>
            <Modal show={openLoginModal} onHide={() => setOpenLoginModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="login_heading_title fw-bold">
                        Login to continue
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="email">
                            <Form.Label className="signin-label">Email</Form.Label>
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
                                <Link to="/register">Sign Up</Link>
                            </span>
                        </p>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;
