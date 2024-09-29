import { Modal, Form } from "react-bootstrap";

const ImageModal = ({ openImageModal, setOpenImageModal,image }) => {
  return (
    <Modal
      show={openImageModal}
      onHide={() => setOpenImageModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="login_heading_title fw-bold">Image</Modal.Title>
      </Modal.Header>
      <Modal.Body><img src={image||"Something went wrong"} height={"100%"} width={"100%"}></img></Modal.Body>
    </Modal>
  );
};

export default ImageModal;
