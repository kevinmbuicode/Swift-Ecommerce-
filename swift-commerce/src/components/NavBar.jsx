import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../ContextAPI";
import SignIn from "./SignIn";

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const { count } = CartState();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          SWIFT COMMERCE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="httpnavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="buttons ms-2">
            <Button
              variant="contained"
              color="error"
              className="ms-2"
              onClick={()=> setOpen(true)}
            >
              <i className="fa fa-sign-in me-1"></i> Login
            </Button>
            <Button variant="contained" color="error" className="ms-2">
              <i className="fa fa-user-plus me-1"></i> Register
            </Button>
            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Cart ({count})
            </Link>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SignIn/>
        </Box>
      </Modal>
    </nav>
  );
};

export default NavBar;
