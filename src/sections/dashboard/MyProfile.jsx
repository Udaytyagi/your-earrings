import { useState } from "react";
import "../../Styles/dashboard.css";
import { IoClose } from "react-icons/io5";
import "../../Styles/profile.css";
import { useSelector } from "react-redux";

function MyProfile() {
    const user = useSelector(state => state?.user?.data?.user_record);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <div className="account__wrapper">
                <div className="account__content">
                    <div className="adreress-right dashboard">
                        <main className="container">
                            <div className="row gx-5 m-0">

                                <aside className="col-md-12 col-xl-12 profile-slider-left">
                                    <div className="profile-slider-left-top-div">
                                        <img
                                            src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                                            alt="profile"
                                        />
                                        <h4>{user && user?.name}</h4>
                                        <p>{user && user.email}</p>
                                        <button>Edit image</button>
                                        <input
                                            type="file"
                                            accept="image/png"
                                            style={{ display: "none" }}
                                        />
                                    </div>
                                    <h5>Edit Profile</h5>
                                    <div className="profile-right-side">
                                        <form>
                                            <div className="input-div-profile">
                                                <label htmlFor="Email">Email Address</label>
                                                <input
                                                    disabled=""
                                                    type="text"
                                                    placeholder="Email Address"
                                                    id="Email"
                                                    defaultValue="user@example.com"
                                                />
                                            </div>
                                            <div className="input-div-profile">
                                                <label htmlFor="phone">Mobile Number</label>
                                                <input type="text" placeholder="Mobile Number" id="phone" />
                                            </div>
                                            <div className="input-div-profile">
                                                <label htmlFor="username">Username</label>
                                                <input type="text" placeholder="Username" id="username" />
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button
                                                    className="btn update text-white d-flex justify-content-center align-items-center  save-detalis"
                                                    type="submit"
                                                >
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </aside>
                                {/* <div className="col-md-12 col-xl-6 pt-md-5">
                                    <div className="adreress-right">
                                        <div className="d-flex justify-content-between align-iteam-center adreress-right-heading">
                                            <h6>Select Delivery Address</h6>
                                        </div>
                                        <div className="row pb-md-0 pb-2">
                                            <div className="col-12">
                                                <div className="add-right-check-box">
                                                    <div className="right-address-border">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input formcheckinput-right"
                                                                type="radio"
                                                                name="DelvieryAddress"
                                                                id="DelvieryAddress1"
                                                            />
                                                            <div className="ms-3 address-right-iteam">
                                                                <div>
                                                                    <span>Vishal Bhardwaj</span>
                                                                    <span> (Home)</span>
                                                                </div>
                                                                <div>
                                                                    <span>+91</span>
                                                                    <span>8888888888</span>
                                                                </div>
                                                                <div>
                                                                    <span>Ballabgarh </span>
                                                                    <span>Faridabad </span>
                                                                    <span>Haryana </span>
                                                                </div>
                                                                <div>
                                                                    <span>Pin Code: </span>
                                                                    <span>121004</span>
                                                                </div>
                                                                <div className="mt-3">
                                                                    <button className="btn btn-dark right-button-address">
                                                                        Edit
                                                                    </button>
                                                                    <button className="btn btn-dark ms-3 right-button-address">
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile
