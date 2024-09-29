import { useState, useEffect, createRef } from "react";
import "../../Styles/dashboard.css";
import { IoClose } from "react-icons/io5";
import "../../Styles/profile.css";
import { useSelector } from "react-redux";
import { updateUserProfile, updateUserProfilePic } from "../../features/slices/user/userSlice";
import { ErrorToaster } from "../../components/Toaster";
import { useDispatch } from "react-redux";

function MyProfile() {
    const user = useSelector(state => state?.user?.data?.user_record);
    const dispatch = useDispatch()
    const fileInputRef = createRef();
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name);
            setContact(user.contact || "");
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const data = {
            name: name,
            contact: contact
        };
        if (contact && contact.length !== 10) {
            ErrorToaster("Contact number must be of 10 digits")
        }
        dispatch(updateUserProfile(data));
    };

    const handleUploadButtonClick = () => {
        fileInputRef.current.click();
    };

    async function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            try {
                const base64String = await getBase64(file);
                const data = {
                    image: base64String,
                };
                dispatch(updateUserProfilePic(data));
            } catch (error) {
                console.error("Error during image upload:", error);
            }
        }
    }

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
        });
    }

    return (
        <div className="account__wrapper">
            <div className="account__content">
                <div className="adreress-right dashboard">
                    <main className="container p-0">
                        <div className="row gx-5 m-0">
                            <aside className="col-md-12 col-xl-12 profile-slider-left">
                                <div className="profile-slider-left-top-div">
                                    <img
                                        src={
                                            user?.image
                                                ? user.image
                                                : "https://img.freepik.com/free-icon/user_318-159711.jpg"
                                        }
                                        alt="profile"
                                    />
                                    <h4>{user?.name}</h4>
                                    <p>{user?.email}</p>
                                    <button onClick={handleUploadButtonClick}>Edit image</button>
                                    <input
                                        type="file"
                                        accept="image/png"
                                        onChange={handleImageUpload}
                                        style={{ display: "none" }}
                                        ref={fileInputRef}
                                    />
                                </div>
                                <h5>Edit Profile</h5>
                                <div className="profile-right-side">
                                    <form onSubmit={handleUpdateProfile}>
                                        <div className="input-div-profile">
                                            <label htmlFor="Email">Email Address</label>
                                            <input
                                                disabled
                                                type="text"
                                                placeholder="Email Address"
                                                id="Email"
                                                value={user?.email}
                                            />
                                        </div>
                                        <div className="input-div-profile">
                                            <label htmlFor="phone">Mobile Number</label>
                                            <input
                                                type="text"
                                                placeholder="Mobile Number"
                                                id="phone"
                                                value={contact}
                                                onChange={(e) => setContact(e.target.value)}
                                            />
                                        </div>
                                        <div className="input-div-profile">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                id="username"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn update text-white d-flex justify-content-center align-items-center save-detalis"
                                                type="submit"
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </aside>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;
