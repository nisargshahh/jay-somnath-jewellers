import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="message-container">
            <div className="message-contents">
              <p>
                As we reflect on our journey since 1991, Jay Somnath Jewellers
                stands as a testament to the timeless beauty of craftsmanship,
                the power of innovation, and the enduring allure of fine
                jewelry.
              </p>
            </div>
          </div>

          <div className="legal-container">
            <div className="legal-contents">
              <ul>
                <li>
                  <a href="/terms-and-conditions" rel="noopener noreferrer">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy-and-security" rel="noopener noreferrer">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/accessibility" rel="noopener noreferrer">
                    Accessibility
                  </a>
                </li>
                <li>
                  <a href="/help-center" rel="noopener noreferrer">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact-us" rel="noopener noreferrer">
                    Contact us
                  </a>
                </li>
              </ul>
              <p>
                Copyright {new Date().getFullYear()}
                <a href="/"> Jay Somnath Jewellers</a>{" "}
                <span className="abn">+91 01 123 456 789</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
