
import './homepageAndNavbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const role  = localStorage.getItem("role")
  const user = localStorage.getItem("user")
  const navigate = useNavigate();
    const handleLogout = async () => { 
      const storedUser = JSON.parse(localStorage.getItem('name'));
      const loggedInUser = storedUser ? storedUser : null;
      if (!loggedInUser && !user) {
        // If user is not logged in, redirect to login page
        navigate("/login");
        return;
      }
      const response = await fetch(`https://circuit-cityy-po9y.onrender.com/logout`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        // Clear user data from local storage 
        localStorage.clear();
        navigate("/login");
      } else {
        console.error(response);
      }
    }
  
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
          {role === "true" && (
            
            <>
            
              <Link to='/admin' className='nav-link'>Admin</Link>
              <Link to='/addproduct' className='nav-link'>Add Products</Link>
              <Link to='/adminusers' className='nav-link'>Add Users</Link>
            </>
          )} 
          {user && user ? (
            <Link to="/logout" className="nav-link" onClick={(e)=>handleLogout(e)}>Logout</Link>
          ) : (
            <Link to="/login" className="nav-link" activeClassName="active-link" >Login</Link>
          )}
        </div>
      </nav>     
    </>
  );
}

export default Navbar;