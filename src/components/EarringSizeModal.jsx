import React, { useState } from 'react';
import { Modal } from "react-bootstrap";
import "../Styles/EarringSizeModal.css"

const EarringSizeModal = ({ openEarringSizeModal, setEarringSizeModal, image }) => {
    const [selectedCarat, setSelectedCarat] = useState(0.25);

    const caratWeights = [
        { value: 0.25, label: "1/4" },
        { value: 0.33, label: "1/3" },
        { value: 0.375, label: "3/8" },
        { value: 0.5, label: "1/2" },
        { value: 0.625, label: "5/8" },
        { value: 0.75, label: "3/4" },
        { value: 1, label: "1" },
        { value: 1.25, label: "1 1/4" },
        { value: 1.5, label: "1 1/2" },
        { value: 1.75, label: "1 3/4" },
        { value: 2, label: "2" },
        { value: 2.5, label: "2 1/2" },
        { value: 3, label: "3" }
    ];

    return (
        <Modal
            show={openEarringSizeModal}
            onHide={() => setEarringSizeModal(false)}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="login_heading_title fw-bold">
                    View Earring on Ear
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="earring-view-container">
                    <img
                        src="/public/images/banner.jpg"
                        alt="Earring on ear view"
                        className="earring-ear-image"
                        height={"100%"} width={"100%"}
                    />
                    <p className="carat-weight-info">
                        Total Carat Weight for pair: {(selectedCarat * 2).toFixed(2)} <br />
                        Individual carat weight for each earring: {selectedCarat.toFixed(2)}
                    </p>
                    <div className="carat-selection">
                        {caratWeights.map((carat) => (
                            <div key={carat.value} className="carat-radio">
                                <input
                                    type="radio"
                                    id={`carat-${carat.value}`}
                                    name="carat"
                                    value={carat.value}
                                    checked={selectedCarat === carat.value}
                                    onChange={() => setSelectedCarat(carat.value)}
                                />
                                <label htmlFor={`carat-${carat.value}`}>{carat.label}</label>
                            </div>
                        ))}
                    </div>
                    <p className="carat-info-text">
                        Click on the total carat weights shown above to compare earring sizes.
                        Each earring is about half of the pair's total carat weight.
                    </p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default EarringSizeModal;
