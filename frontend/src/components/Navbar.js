import './homepageAndNavbar.css';
import { Link } from 'react-router-dom';
function Navbar({handleLogout, loggedInUser}) {
  return (
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
        <Link to='/cart'className="nav-link">Cart</Link>
        <Link to='/checkout'className="nav-link">Checkout</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to='/admin' className='nav-link'>Admin</Link>
        <Link to='/addproduct' className='nav-link'>Add Products</Link>
        <button onClick={handleLogout} style={{display: loggedInUser ? 'block': 'none'}}>signout</button>
      </div>
    </nav>
  );
}

export default Navbar;