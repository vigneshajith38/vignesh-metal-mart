import React from "react";

function Contact() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Vignesh+Metal+Mart+Kaniyapuram+Kerala";

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">

        {/* ================= LEFT SIDE ================= */}
        <div className="contact-content">

          <span className="contact-label">VISIT OUR STORE</span>

          <h2>We're Here to Help!</h2>

          <div className="contact-heading-line">
            <span></span>
            <i></i>
          </div>

          <p className="contact-description">
            Have questions about our products? Get in touch
            with Vignesh Metal Mart or visit our store.
          </p>

          {/* ADDRESS */}
          <div className="contact-info-item">
            <div className="contact-icon">
              📍
            </div>

            <div className="contact-info-text">
              <span className="contact-info-label">ADDRESS</span>

              <p>
                HVQ3+P8F, Chirayinkeezhu
                <br />
                Kaniyapuram Rd, Kaniyapuram,
                <br />
                Pallippuram, Kerala 695301
                <br />
                India
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="contact-info-item">
            <div className="contact-icon">
              ☎
            </div>

            <div className="contact-info-text">
              <span className="contact-info-label">PHONE</span>

              <p>
                <a href="tel:9526335057">9526335057</a>
                <br />
                <a href="tel:04712996976">04712996976</a>
              </p>
            </div>
          </div>

          {/* STORE HOURS */}
          <div className="contact-info-item">
            <div className="contact-icon">
              ◷
            </div>

            <div className="contact-info-text">
              <span className="contact-info-label">STORE HOURS</span>

              <p>
                Monday – Saturday
                <br />
                9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* VISIT BUTTON */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="visit-store-button"
          >
            <span>▣</span>
            VISIT OUR STORE
            <strong>→</strong>
          </a>

          {/* Decorative leaves */}
          <div className="contact-decoration contact-leaf-one"></div>
          <div className="contact-decoration contact-leaf-two"></div>
          <div className="contact-decoration contact-leaf-three"></div>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="contact-map-wrapper">

          <div className="map-heading">

            <div className="map-heading-top">
              <span></span>
              <p>FIND US</p>
              <span></span>
            </div>

            <h3>Our Location</h3>

          </div>

          <div className="contact-map-card">

            <div className="contact-map">

              <iframe
                title="Vignesh Metal Mart Location"
                src="https://www.google.com/maps?q=Vignesh%20Metal%20Mart%2C%20Kaniyapuram%2C%20Kerala&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-maps-button"
            >
              Open in Google Maps →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;