import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { updateAddress } from '../features/slices/addresses/addressSlice';

const EditAddressModal = ({ isEditPopupOpen, closeEditPopup, selectedAddressId }) => {
    const addresses = useSelector(state => state?.address?.data?.user_record) || [];

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        phone_country: 91,
        street: '',
        landmark: '',
        state: '',
        city: '',
        pin_code: '',
        address_type: 1,
    });

    const isMobileValid = formData.mobile.length === 10;
    const isPinCodeValid = formData.pin_code.length === 6;

    useEffect(() => {
        if (isEditPopupOpen && selectedAddressId) {
            const selectedAddress = addresses.find(address => address.id === selectedAddressId);
            if (selectedAddress) {
                setFormData(selectedAddress);
            }
        }
    }, [isEditPopupOpen, selectedAddressId, addresses]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAddressTypeChange = (e) => {
        setFormData(prevData => ({
            ...prevData,
            address_type: Number(e.target.value)
        }));
    };

    const handleAddAddress = (e) => {
        e.preventDefault();
        if (isMobileValid && isPinCodeValid) {
            dispatch(updateAddress({ selectedAddressId: selectedAddressId, data: formData, setLoading: setLoading, closeEditPopup }));
        }
    };

    return (
        <>
            {isEditPopupOpen ? (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-popup" onClick={closeEditPopup}>
                            <IoClose />
                        </button>
                        <section className="col-sm-12 profile-right" id="prfolie-right-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <h5>Edit Address <i className="fa-solid fa-plus-circle" /></h5>
                                    <form onSubmit={handleAddAddress}>
                                        <div className="input-div-profile">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="profile-mobile-field">
                                            <h6 htmlFor="mobile">Mobile Number</h6>
                                            <div className="row d-flex align-items-center">
                                                <div className="input-div-profile col-md-12">
                                                    <input
                                                        type="tel"
                                                        placeholder="8888888888"
                                                        id="mobile"
                                                        name="mobile"
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                        maxLength={10}
                                                        required
                                                    />
                                                    {!isMobileValid && <span className="error-text" style={{ fontSize: "12px", color: "red" }}>Mobile number must be 10 digits.</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-div-profile m-0 p-0">
                                            <label htmlFor="street">Street</label>
                                            <input
                                                type="text"
                                                placeholder="Street"
                                                name="street"
                                                id="street"
                                                value={formData.street}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="input-div-profile">
                                            <label htmlFor="landmark">Landmark</label>
                                            <input
                                                type="text"
                                                placeholder="Landmark"
                                                id="landmark"
                                                name="landmark"
                                                value={formData.landmark}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="d-flex m-0 p-0">
                                            <div className="input-div-profile w-50 m-0 p-0">
                                                <label htmlFor="state">State</label>
                                                <input
                                                    type="text"
                                                    placeholder="State"
                                                    id="state"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="input-div-profile w-50 mx-1 m-0 p-0">
                                                <label htmlFor="city">City</label>
                                                <input
                                                    type="text"
                                                    placeholder="City"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="input-div-profile">
                                            <label htmlFor="pin_code">Pin Code</label>
                                            <input
                                                type="number"
                                                placeholder="Pin Code"
                                                id="pin_code"
                                                name="pin_code"
                                                value={formData.pin_code}
                                                onChange={handleChange}
                                                maxLength={6}
                                                required
                                            />
                                            {!isPinCodeValid && <span className="error-text" style={{ fontSize: "12px", color: "red" }}>Pin code must be 6 digits.</span>}
                                        </div>
                                        <div className="profile-address-radio-buttons">
                                            <h6>Address Type</h6>
                                            <div className="d-flex">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="address_type"
                                                        value={1}
                                                        checked={formData.address_type == 1}
                                                        onChange={handleAddressTypeChange}
                                                    />
                                                    <label className="form-check-label">
                                                        Home
                                                    </label>
                                                </div>
                                                <div className="form-check mx-5">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="address_type"
                                                        value={2}
                                                        checked={formData.address_type == 2}
                                                        onChange={handleAddressTypeChange}
                                                    />
                                                    <label className="form-check-label">
                                                        Office
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="address_type"
                                                        value={3}
                                                        checked={formData.address_type == 3}
                                                        onChange={handleAddressTypeChange}
                                                    />
                                                    <label className="form-check-label">
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn text-white d-flex justify-content-center align-items-center w-100 save-detalis"
                                            disabled={loading}
                                        >
                                            {loading ? 'Editing...' : 'EDIT ADDRESS'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default EditAddressModal;
