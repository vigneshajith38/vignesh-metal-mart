import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-image-placeholder">
        <div>
          <span>🏪</span>

          <p>Store photograph</p>

          <small>Image can be added later</small>
        </div>
      </div>

      <div className="about-content">
        <span className="about-label">ABOUT US</span>

        <h2>
          Your Local Destination
          <br />
          for Kitchen Essentials
        </h2>

        <p>
          Vignesh Metal Mart offers a wide range of kitchenware, cookware,
          appliances and household products designed to meet everyday needs.
        </p>

        <p>
          From traditional cookware to modern kitchen appliances, our
          collection brings together practical products for homes and
          kitchens.
        </p>

        <div className="about-highlight">
          <span>✦</span>

          <div>
            <strong>Serving customers with quality and value</strong>

            <p>Visit us at Kaniyapuram, Pallippuram, Kerala.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;