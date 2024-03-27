import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const RightPanel = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        console.log(data);
      }
      const [showModal, setShowModal] = useState(false);
   

    return (
        <>
        <button onClick={() => setShowModal(true)}>Click</button>
      <Modal
      show={showModal} // Show modal based on state
      onHide={() => setShowModal(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <Modal.Header className="border-0 fs-5 fw-bolder" closeButton>
          Login :-
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-center">
                  {/* <img src={logo} className="w-25" alt="logo" /> */}
                  <h4 className="mt-1 mb-3 pb-1">RUMENO</h4>
                </div>
                <form
                 onSubmit={handleSubmit(onSubmit)}
                 >
                  <p className="mb-3">hwllo</p>
                  <div className="form-outline  mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example11">
                      User Name
                    </label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Phone number or email address"
                      {...register("username", {
                        required: "Username is required",
                      })}
                    />
                    {errors.username && (
                      <div className="text-danger">
                        {errors.username.message}
                      </div>
                    )}
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label mx-2" htmlFor="form2Example22">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control border"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <div className="text-danger">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="text-center pt-1  pb-1">
                    <button
                      className="btn btn-primary text-white border-0 gradient-custom-2 mb-3 w-75"
                      type="submit"
                    >
                      Submit
                    </button>
                    
                  </div>
                  
                </form>

                {/* <LoginForm/> */}
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center  gradient-custom-2">
                <div className="text-white text-center px-2">
                  <h4 className="mb-4">hwllo</h4>
                  <p className="small mb-0">hwllo</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
       </>
        )}

export default RightPanel;