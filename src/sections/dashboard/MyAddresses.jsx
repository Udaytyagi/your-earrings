import "../../Styles/account.css";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import EditAddressModal from "../../components/EditAddressModal";
import AddAddressModal from "../../components/AddAddressModal";
import {
  fetchAddress,
  deleteAddress,
} from "../../features/slices/addresses/addressSlice";
import { useSelector, useDispatch } from "react-redux";
import { ErrorToaster } from "../../components/Toaster";

function MyAddresses() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const address = useSelector((state) => state?.address?.data?.user_record);
  const dispatch = useDispatch();
  const [selectedAddressId, setSelectedAddressId] = useState("");

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openEditPopup = () => {
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
  };

  useEffect(() => {
    dispatch(fetchAddress());
  }, []);

  const handleEditAddress = () => {
    if (!selectedAddressId) {
      ErrorToaster("Please select address you want to edit");
      return;
    }
    openEditPopup();
  };

  const handleDeleteAddress = () => {
    if (!selectedAddressId) {
      ErrorToaster("Please select address you want to delete");
      return;
    }
    dispatch(
      deleteAddress({
        selectedAddressId: selectedAddressId,
        setSelectedAddressId: setSelectedAddressId,
      })
    );
  };

  return (
    <>
      <EditAddressModal
        isEditPopupOpen={isEditPopupOpen}
        closeEditPopup={closeEditPopup}
        selectedAddressId={selectedAddressId}
      />
      <AddAddressModal isPopupOpen={isPopupOpen} closePopup={closePopup} />
      <div className="account__wrapper">
        <div className="account__content">
          <div className="adreress-right dashboard">
            <div className="p-4 p-md-0">
              <h2 className="account__content--title h3 mb-20">Addresses</h2>
              <button
                className="new__address--btn primary__btn mb-3"
                type="button"
                onClick={openPopup}
              >
                Add a new address
              </button>
              <div className="row pb-md-0 pb-2">
                <div className="col-md-12 col-lg-12">
                  <div className="add-right-check-box">
                    {address && address.length > 0 ? (
                      <>
                        {address?.map((ship, i) => (
                          <div className="right-address-border" key={i}>
                            <div className="form-check">
                              <input
                                className="form-check-input formcheckinput-right"
                                type="radio"
                                name="DelvieryAddress"
                                id="DelvieryAddress1"
                                onClick={() => setSelectedAddressId(ship.id)}
                              />
                              <div className="ms-3 address-right-iteam">
                                <div>
                                  <span>{ship.name} </span>
                                  <span>
                                    {ship.address_type === "1"
                                      ? "(Home)"
                                      : ship.address_type === "2"
                                      ? "(Office)"
                                      : "(Other)"}
                                  </span>
                                </div>
                                <div>
                                  <span>+91</span>
                                  <span>{ship.mobile}</span>
                                </div>
                                <div>
                                  <span>{ship.street} </span>
                                  <span>{ship.landmark} </span>
                                  <span>{ship.city} </span>
                                  <span>{ship.state}</span>
                                </div>
                                <div>
                                  <span>Pin Code: </span>
                                  <span>{ship.pin_code}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <img
                          src="/images/wishlist_empty.png"
                          alt="wishlist-empty"
                        ></img>
                        <h6>No address found</h6>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {address && address.length > 0 && (
                <div className="account__details--footer d-flex mt-3">
                  <button
                    className="account__details--footer__btn"
                    type="button"
                    onClick={() => handleEditAddress()}
                  >
                    Edit
                  </button>
                  <button
                    className="account__details--footer__btn"
                    type="button"
                    onClick={() => handleDeleteAddress()}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyAddresses;
