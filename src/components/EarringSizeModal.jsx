import React, { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import "../Styles/EarringSizeModal.css"

const EarringSizeModal = ({ openEarringSizeModal, setEarringSizeModal, earringSize }) => {
    const [selectedCarat, setSelectedCarat] = useState(0);
    const [value, setValue] = useState(0)
    const [image, setImage] = useState("")

    useEffect(() => {
        if (earringSize && earringSize.length > 0) {
            setImage(earringSize[0].image)
            setSelectedCarat(earringSize[0].size)
            setValue(earringSize[0].value)
        }
    }, [earringSize])

    // const caratWeights = [
    //     { value: 0.25, label: "1/4" },
    //     { value: 0.33, label: "1/3" },
    //     { value: 0.375, label: "3/8" },
    //     { value: 0.5, label: "1/2" },
    //     { value: 0.625, label: "5/8" },
    //     { value: 0.75, label: "3/4" },
    //     { value: 1, label: "1" },
    //     { value: 1.25, label: "1 1/4" },
    //     { value: 1.5, label: "1 1/2" },
    //     { value: 1.75, label: "1 3/4" },
    //     { value: 2, label: "2" },
    //     { value: 2.5, label: "2 1/2" },
    //     { value: 3, label: "3" }
    // ];

    return (
        <Modal
            show={openEarringSizeModal}
            onHide={() => setEarringSizeModal(false)}
            centered
            dialogClassName="custom-modal" 
        >
            <Modal.Header closeButton>
                <Modal.Title className="login_heading_title fw-bold">
                    View Earring on Ear
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="earring-view-container">
                    <img
                        src={image}
                        alt="Earring on ear view"
                        className="earring-ear-image"
                        height={"100%"} width={"60%"}
                    />
                    <p className="carat-weight-info">
                        Total Carat Weight for pair: {value && (value).toFixed(2)} <br />
                        Individual carat weight for each earring: {value && (value / 2).toFixed(2)}
                    </p>
                    <div className="carat-selection">
                        {earringSize && earringSize.length > 0 && earringSize?.map((carat) => (
                            <div key={carat.size} className="carat-radio">
                                <input
                                    type="radio"
                                    id={`carat-${carat.size}`}
                                    name="carat"
                                    value={carat.size}
                                    checked={selectedCarat == carat.size}
                                    onChange={() => { setSelectedCarat(carat.size); setImage(carat.image); setValue(carat.value) }}
                                />
                                <label htmlFor={`carat-${carat.value}`}>{carat.size}</label>
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
