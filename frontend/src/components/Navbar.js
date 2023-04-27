import './homepageAndNavbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const { isLoggedIn, user } = props;
  const role  = localStorage.getItem("role")
 
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://53525363.000webhostapp.com/Images/CIRCUIT__1_-removebg-preview.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to='/cart' className="nav-link">Cart</Link>
          <Link to='/checkout' className="nav-link">Checkout</Link>  
          {role === 'true' && (
            
            <>
            
              <Link to='/admin' className='nav-link'>Admin</Link>
              <Link to='/addproduct' className='nav-link'>Add Products</Link>
              <Link to='/adminusers' className='nav-link'>Add Users</Link>
            </>
          )}
          
          {isLoggedIn ? (
            <Link to="/logout" className="nav-link">Logout</Link>
          ) : (
            <Link to="/login" className="nav-link" activeClassName="active-link">Login</Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;