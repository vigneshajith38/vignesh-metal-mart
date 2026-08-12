import React from "react";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-inner">

        {/* LEFT SIDE */}
        <div className="contact-content">

          <span className="contact-label">VISIT US</span>

          <h2>We’re Here to Help</h2>

          <p className="contact-description">
            Have a question about our products? Get in touch with
            Vignesh Metal Mart or visit our store.
          </p>

          <div className="contact-details">

            {/* ADDRESS */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <span>ADDRESS</span>

                <p>
                  HVQ3+P8F, Chirayinkeezhu
                  <br />
                  Kaniyapuram Rd,
                  <br />
                  Kaniyapuram, Pallippuram,
                  <br />
                  Kerala 695301
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="contact-item phone-item">
              <div className="contact-icon">☎</div>

              <div className="phone-content">
                <span>PHONE</span>

                <p className="phone-number">
                  <a href="tel:9526335057">
                    9526335057
                  </a>

                  <br />

                  <a href="tel:04712996976">
                    04712996976
                  </a>
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <span>LOCATION</span>

                <p>
                  Kaniyapuram, Pallippuram, Kerala
                </p>
              </div>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="contact-buttons">

            <a
              href="tel:9526335057"
              className="contact-primary-button"
            >
              Call Us
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Vignesh+Metal+Mart+Kaniyapuram+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-secondary-button"
            >
              Get Directions
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        <div className="contact-map">

          <iframe
            title="Vignesh Metal Mart Location"
            src="https://www.google.com/maps?q=Vignesh+Metal+Mart+Kaniyapuram+Kerala&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Vignesh+Metal+Mart+Kaniyapuram+Kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            Open in Google Maps →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;