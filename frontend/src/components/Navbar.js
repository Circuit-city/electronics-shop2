

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://53525363.000webhostapp.com/Images/CIRCUIT__1_-removebg-preview.png"
            alt="Logo"
            className="logo"
          />
        </div>
        <div className="navbar-right">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/cart" className="nav-link">
            Cart
          </a>
          <a href="/checkout" className="nav-link">
            Checkout
          </a>
          <a href="/login" className="nav-link">
            Login
          </a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;