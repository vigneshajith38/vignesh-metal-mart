import React from "react";

function Navbar({ onCatalogueClick }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <h1>Vignesh Metal Mart</h1>
          <span>Quality Kitchenware & Household Products</span>
        </div>

        <nav className="navbar-links">
          <button className="nav-link active">Home</button>

          <button className="nav-link" onClick={onCatalogueClick}>
            Catalogue
          </button>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;