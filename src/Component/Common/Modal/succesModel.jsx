import React from "react";
import { Modal } from "react-bootstrap";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";
// React Icon

const SuccesModel = ({ showModal, setShowModal }) => {
  return (
    <>
      <Modal
        show={showModal} // Show modal based on state
        // onHide={() => setShowModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered    
        size="md"
      >
     
        <Modal.Body className="position-relative">
            <div className="position-absoulte top-0 start-50 alert-icon d-flex justify-content-center">
              <IoMdCheckmarkCircle class="alert-heading fs-1" />
            </div>
            <h3 className="fw-bold  text-center">Success</h3>
            <p className="text-center">
              Check your email for a booking confirmation.We’ll see you soon You
              can always track your orders in the “Orders” section under profile{" "}
            </p>
            <NavLink to='/' className='text-decoration-none' >
            <div className="d-flex justify-content-center">
              <button className="btn alert-button">HOME</button>
            </div>
            </NavLink>
           
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SuccesModel;
