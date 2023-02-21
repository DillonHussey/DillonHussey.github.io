import { Link } from "react-router-dom";
import logo from '../images/coding.svg';
import {Navbar, Nav} from "react-bootstrap";

//className="d-flex flex-wrap align-items-left justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-danger"
const Menu = () => {
  return (
    <Navbar sticky="top" className="nav-fill w-100 navbar-dark bg-primary">
        <Navbar.Brand href="/about">
          <img
            alt="" 
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
            Dillon Hussey's Portfolio
          </Navbar.Brand> 

        <Nav.Link className="d-flex align-items-center text-light"
          href="/Projects">Projects</Nav.Link>
        <Nav.Link target='_blank' href="https://www.linkedin.com/in/dillon-hussey-b85781224/"
        className="d-flex align-items-center text-light">
          LinkedIn
        </Nav.Link>
        
        <Nav.Item>
          <Link to="/aboutMe">
          <button type="button" className="btn btn-outline-tertiary me-2 text-tertiary">
            About Me
          </button>
        </Link>
        </Nav.Item>
      
    </Navbar>
  );
};

export default Menu;
