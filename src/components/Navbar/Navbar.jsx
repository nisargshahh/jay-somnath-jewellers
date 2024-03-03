import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container } from "react-bootstrap";

function NavBar() {
  const LogoURL = "../../src/assets/Website_photos/Website_photos/all.png";
  return (
    <>
      <div className="whole-navbar-container">
        <Navbar bg="black" expand="md" variant="dark">
          <Container className="whole-navbar">
            <a href="/">
              <img
                src={LogoURL}
                className="d-inline-block align-top"
                alt="Brand logo"
                id="main-nav-logo"
              />
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <ul className="navbar-nav ml-auto" id="nav-list-nice">
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
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
