import "./Navbar.css";

function NavBar() {
  const LogoURL = "../../src/assets/Website_photos/Website_photos/all.png";
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container">
          {/* Brand/logo */}
          <a className="navbar-brand" href="/">
            <img src={LogoURL} className="img-fluid"></img>
          </a>
          {/* Toggler/collapsible Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/about-us">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product-category">
                  Product Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Clientele
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Become A Partner
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Bootstrap JS */}
    </>
  );
}

export default NavBar;
