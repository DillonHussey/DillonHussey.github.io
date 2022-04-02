import { Link } from "react-router-dom";
import logo from '../images/react.svg';
import {Container} from "react-bootstrap";
// flex-column flex-md-row align-items-center p-2 px-md-1 mb-3 bg-white border-bottom box-shadow
//d-flex align-items-center col-md-3 mb-md-0 mr-auto 
//ml-md-3
const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-left justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        
        <Link
          to="/aboutThisPrj"
          className="d-flex align-items-center text-dark p-2 text-decoration-none"
          >
          <img
            alt="" 
            src={logo}
            width="30"
            height="30"
            className="d-flex align-items-center"
          />
            Dillon Hussey's Code Sharing
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
