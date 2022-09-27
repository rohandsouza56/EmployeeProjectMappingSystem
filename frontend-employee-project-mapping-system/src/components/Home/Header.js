import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { IoIosContact, IoIosHome } from "react-icons/io";
import { MdContactPage } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BiNews } from "react-icons/bi";

import { FaUserCircle } from "react-icons/fa";
// import NavbarLogo from '../../images/navbar-logo.png'
import NavLogo from "../Images/NavLogo.png";

import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
// import { Container, Nav, Navbar, NavDropdown } from
// import { UserContext } from '../../App';

const Header = () => {
  const navigate = useNavigate();
  const role = "ADMIN";

  const logoutUser = () => {
    localStorage.removeItem("jwtToken");

    navigate("/login");
  };

  const RenderMenu = () => {
    if (role === "ADMIN") {
      return (
        <>
          <NavDropdown.Item href="/admindashboard">Dashboard</NavDropdown.Item>
          <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
        </>
      );
    } else if (role === "EMPLOYEE") {
      return (
        <>
          <NavDropdown.Item href="/admin_dashboard">Dashboard</NavDropdown.Item>
          <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
        </>
      );
    } else if (role === "MANAGER") {
      return (
        <>
          <NavDropdown.Item href="/college_dashboard">
            Dashboard
          </NavDropdown.Item>
          <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
        </>
      );
    } else {
      return (
        <>
          <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
        </>
      );
    }
  };

  return (
    <Navbar
      expand="sm"
      className="Navclass sticky-top site-navbar"
      // style={{ zIndex: "999" }}
    >
      <div className="container-fluid ps-4">
        <Navbar.Brand href="#home">
          <NavLink to="/login">
            <img
              className="navbar-logo mt-2"
              src={NavLogo}
              alt="ucs_logo"
              width={160}
              height={50}
            />
          </NavLink>
        </Navbar.Brand>
        {/* <NavLink to="/login">
          <img
            className="navbar-logo mt-2"
            src={NavLogo}
            alt="ucs_logo"
            width={160}
            height={50}
          />
        </NavLink> */}

        {/* <NavLink to="/login" id="title">
          Employee Project Mapping System
        </NavLink> */}

        {/* <NavLink to= "/login"><h4><strong>Employee Project Mapping System</strong></h4> </NavLink> */}
        <Navbar.Toggle
          className="navbar-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="navbar-link" to="/">
              <IoIosHome className="navbar-right-logo" /> Home
            </NavLink>
            <NavLink className="navbar-link" to="/team">
              <RiTeamFill className="navbar-right-logo" /> Team
            </NavLink>
            <NavLink className="navbar-link" to="/about">
              <BiNews className="navbar-right-logo" /> About
            </NavLink>
            <NavLink className="navbar-link" to="/contact">
              <MdContactPage className="navbar-right-logo" /> Contact Us
            </NavLink>
            <NavDropdown title={<FaUserCircle />} className="navbar-profile">
              <div>
                <RenderMenu />
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
