import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Catalogue from "./Catalogue";
import "./App.css";

function Home() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">

          <Link to="/" className="brand">
            <div className="brand-icon">V</div>
            <div>
              <h2>Vignesh Metal Mart</h2>
              <span>Quality Kitchenware</span>
            </div>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/catalogue">Products</Link>
            <a href="#categories">Categories</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>

          <Link to="/catalogue" className="nav-button">
            View Catalogue
          </Link>

        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            QUALITY • TRUST • VALUE
          </span>

          <h1>
            Everything You Need
            <br />
            <span>For Your Kitchen</span>
          </h1>

          <p>
            Discover our wide collection of quality kitchenware,
            cookware, appliances and household essentials —
            carefully selected for every home.
          </p>

          <div className="hero-buttons">

            <Link to="/catalogue" className="primary-button">
              Explore Products →
            </Link>

            <a href="#contact" className="secondary-button">
              Contact Us
            </a>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle"></div>

          <div className="hero-card hero-card-one">
            <span>🍳</span>
            <div>
              <strong>Cookware</strong>
              <small>Quality Collection</small>
            </div>
          </div>

          <div className="hero-card hero-card-two">
            <span>⚡</span>
            <div>
              <strong>Appliances</strong>
              <small>Kitchen Essentials</small>
            </div>
          </div>

          <div className="hero-main-icon">
            🍲
          </div>

        </div>

      </section>


      {/* TRUST FEATURES */}
      <section className="features">

        <div className="feature">
          <div className="feature-icon">✓</div>
          <div>
            <h3>Quality Products</h3>
            <p>Reliable products selected for everyday use.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">▦</div>
          <div>
            <h3>Wide Collection</h3>
            <p>Explore hundreds of kitchenware products.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">₹</div>
          <div>
            <h3>Great Value</h3>
            <p>Quality products at competitive prices.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">★</div>
          <div>
            <h3>Trusted Service</h3>
            <p>Serving customers with care and commitment.</p>
          </div>
        </div>

      </section>


      {/* CATEGORIES */}
      <section className="categories-section" id="categories">

        <div className="section-heading">
          <span>EXPLORE OUR RANGE</span>
          <h2>Shop By Category</h2>
          <p>
            From everyday cookware to modern kitchen appliances,
            find everything you need in one place.
          </p>
        </div>

        <div className="home-category-grid">

          <Link to="/catalogue" className="home-category-card">
            <div className="home-category-icon">🍳</div>
            <h3>Cookware</h3>
            <p>Steel, Aluminium, Non-Stick & Cast Iron</p>
            <span>Explore →</span>
          </Link>

          <Link to="/catalogue" className="home-category-card">
            <div className="home-category-icon">🔥</div>
            <h3>Cookers & Stoves</h3>
            <p>Pressure Cookers, Rice Cookers & Stoves</p>
            <span>Explore →</span>
          </Link>

          <Link to="/catalogue" className="home-category-card">
            <div className="home-category-icon">⚡</div>
            <h3>Electric Appliances</h3>
            <p>Kitchen & Electrical Appliances</p>
            <span>Explore →</span>
          </Link>

          <Link to="/catalogue" className="home-category-card">
            <div className="home-category-icon">🥄</div>
            <h3>Kitchen Accessories</h3>
            <p>Accessories, Racks & Kitchen Tools</p>
            <span>Explore →</span>
          </Link>

          <Link to="/catalogue" className="home-category-card">
            <div className="home-category-icon">🍱</div>
            <h3>Storage & Serving</h3>
            <p>Casaroles, Flasks & Water Bottles</p>
            <span>Explore →</span>
          </Link>

          <Link to="/catalogue" className="home-category-card">
            <div className="home-category-icon">🥛</div>
            <h3>Glassware & Crockery</h3>
            <p>Glassware, Dinner Sets & Cups</p>
            <span>Explore →</span>
          </Link>

        </div>

      </section>


      {/* ABOUT */}
      <section className="about-section" id="about">

        <div className="about-visual">
          <div className="about-box">
            <span>VMM</span>
            <strong>Since</strong>
            <b>Quality First</b>
          </div>
        </div>

        <div className="about-content">

          <span className="section-label">
            ABOUT VIGNESH METAL MART
          </span>

          <h2>
            Your Trusted Destination
            <br />
            For Kitchenware
          </h2>

          <p>
            At Vignesh Metal Mart, we bring together a wide range
            of kitchenware and household products under one roof.
          </p>

          <p>
            From traditional steel and aluminium cookware to modern
            non-stick products, appliances, storage solutions and
            dining essentials, our collection is designed to meet
            the everyday needs of Indian households.
          </p>

          <Link to="/catalogue" className="about-button">
            Browse Our Products →
          </Link>

        </div>

      </section>


      {/* CTA */}
      <section className="cta-section">

        <div>
          <span>LOOKING FOR SOMETHING?</span>

          <h2>
            Explore Our Complete Product Catalogue
          </h2>

          <p>
            Browse our complete collection and discover the right
            products for your kitchen.
          </p>
        </div>

        <Link to="/catalogue" className="cta-button">
          View Catalogue →
        </Link>

      </section>


      {/* CONTACT */}
      <section className="contact-section" id="contact">

        <div className="section-heading">
          <span>GET IN TOUCH</span>
          <h2>Contact Us</h2>
          <p>
            Have a question about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <div>📍</div>
            <h3>Visit Us</h3>
            <p>
              Vignesh Metal Mart
              <br />
              Your trusted kitchenware destination
            </p>
          </div>

          <div className="contact-card">
            <div>📞</div>
            <h3>Call Us</h3>
            <p>
              Contact us for product enquiries
              <br />
              and availability.
            </p>
          </div>

          <div className="contact-card">
            <div>✉️</div>
            <h3>Email Us</h3>
            <p>
              Get in touch for
              <br />
              enquiries and business details.
            </p>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-content">

          <div>
            <h2>Vignesh Metal Mart</h2>
            <p>
              Quality Kitchenware & Household Products
            </p>
          </div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/catalogue">Products</Link>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Vignesh Metal Mart.
          All rights reserved.
        </div>

      </footer>

    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/catalogue"
          element={<Catalogue />}
        />

      </Routes>
    </BrowserRouter>
  );
}


export default App;