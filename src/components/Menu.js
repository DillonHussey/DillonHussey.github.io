import { Link } from "react-router-dom";
import logo from '../images/coding.svg';
import {Container} from "react-bootstrap";
const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-left justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        
        <Link
          to="/about"
          className="d-flex align-items-center text-dark p-2 text-decoration-none"
          >
          <img
            alt="" 
            src={logo}
            width="30"
            height="30"
            className="d-flex align-items-center"
          />
            Dillon Hussey's Portfolio
        </Link>

        <Link className="d-flex align-items-center text-dark text-decoration-none"
          to="/Projects"
        >
          Projects
        </Link>
        <a target="_blank" href="https://www.linkedin.com/in/dillon-hussey-b85781224/" 
        
        rel="noreferrer"
        className="d-flex align-items-center text-dark text-decoration-none">
          LinkedIn
        </a>
        
        <Link to="/aboutMe">
          <button type="button" className="btn btn-outline-primary me-2">
            About Me
          </button>
        </Link>
      </header>
    </Container>
  );
};

export default Menu;
