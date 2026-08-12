import React from "react";

function Footer() {
  return (
    <footer className="homepage-footer">
      <div className="footer-inner">
        <div>
          <h3>Vignesh Metal Mart</h3>

          <p>Quality Kitchenware & Household Products</p>
        </div>

        <div className="footer-links">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Vignesh Metal Mart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;