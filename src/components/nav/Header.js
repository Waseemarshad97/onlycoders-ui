import styles from "@/styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { GiAlienBug } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

function Header({ setLoginModal, loginModal }) {
  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary d-md-flex justify-content-around ${styles.nav_prop}`}
    >
      <Container className="m-0">
        <GiAlienBug className={`${styles.header_icon} me-2`} />
        <Navbar.Brand className={`${styles.font_header}`} href="#home">
          SAMPLE PAGE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={`text-white ${styles.nav_link}`} href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              title={<span className={`${styles.nav_link_d}`}>Features</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Custom web page
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={<span className={`${styles.nav_link_d}`}>More</span>}
              id="basic-nav-dropdown"
            >
              <navbar-toggler className="d-none"></navbar-toggler>
              <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="w-100 d-lg-flex justify-content-center">
            <div
              className={`d-flex form-control mr-sm-2 w-50 ${styles.search_input}`}
            >
              <input
                className={`form-control mr-sm-2 ${styles.sub_search_input}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <FiSearch className={`${styles.search_icon}`} />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
      <div className="d-md-flex justify-content-center">
        <button
          onClick={() => {
            setLoginModal(!loginModal);
          }}
          className={`btn mt-2 m-lg-0 bg-info text-white ${styles.login_btn}`}
        >
          Login
        </button>
      </div>
    </Navbar>
  );
}

export default Header;
