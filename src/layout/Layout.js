// components
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import '../index.css'
const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column min-vh-100 bg-light'>
      <Menu/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
