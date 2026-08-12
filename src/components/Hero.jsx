import React from "react";

function Hero({ onCatalogueClick }) {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-text">

          <span className="hero-label">
            QUALITY • TRUST • VALUE
          </span>

          <h2>
            Everything
            <br />
            Your <span>Kitchen</span>
            <br />
            Needs.
          </h2>

          <p>
            Discover quality cookware, kitchen essentials, appliances
            and everyday products for your home.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={onCatalogueClick}
            >
              Explore Catalogue
              <span>→</span>
            </button>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Us
            </a>

          </div>

        </div>

        <div className="hero-image-placeholder">

          <div className="hero-placeholder-content">

            <div className="hero-placeholder-icon">
              🍳
            </div>

            <h3>
              Vignesh Metal Mart
            </h3>

            <p>
              Quality kitchenware
              <br />
              for every home
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;