import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import logo from '../images/react.svg';
const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-left justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        
        <Link
          to="/aboutThisPrj"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
        <img
          alt="" 
          src={logo}
          width="30"
          height="30"
          className="d-flex align-items-center"
        />
          Dillon Hussey's Code Sharing Site
        </Link>
        <Link to="/about" className="d-flex align-items-center text-dark text-decoration-none">
                LinkedIn
              </Link>
        <Nav>
           <div className="col-md-3 text-end"> 
            <Link to="/aboutMe">
              <button type="button" className="btn btn-outline-primary me-2">
                About Me
              </button>
            </Link>
          </div>
          
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
