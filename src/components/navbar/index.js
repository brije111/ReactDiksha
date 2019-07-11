import React from "react";
//import PropTypes from "prop-types";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

const NavBarComponent = props => {
  
  return (
    <div>
      <Navbar bg="warning" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          
        </Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link style={{color:'black'}} href="#home">PRODUCTS</Nav.Link>
         
        </Nav>
        <Nav>
        <Link
            style={{ color: "black", textDecoration: "none" }}
            to="/cart"
          >
      <div >
        <span style={{color:'Black'}} className="m-2">Cart</span>
        {Object.keys(props.cart).length===0?<div></div>:<Badge variant="warning">{Object.keys(props.cart).length}</Badge>}
        </div>
        </Link>
    </Nav>
      </Navbar>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    cart: state.crt.cart
  };
};

export default connect(mapStateToProps)(NavBarComponent);
