import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import './style.css'
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
          </Nav>
          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-arrow-down"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
        >
        <div className="card_details d-flex justify-context-center align-item-center" style={{width:'17rem',padding:6, position:"relative" }}>
            <i className="fas fa-close smallclose" style={{position: "absolute" , top:2,right:20,fontSize:23,cursor:"pointer"}}
             onClick={handleClose}
            ></i>
          <p style={{fontSize:22}}>Your Cart Is Empty</p>
          <img src="../src/assets/cart.gif" className="emptycart_img" style={{width:"3rem" , padding:3}} alt="not-found" />
        </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
