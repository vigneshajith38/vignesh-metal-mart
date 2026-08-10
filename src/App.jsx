import { useState } from "react";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div>

      {/* NAVBAR */}

      <nav>
        <h2>Vignesh Metal Mart</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* HERO */}

      <section id="home">

        <h1>
          Quality Utensils for Every Home
        </h1>

        <p>
          Explore our collection of cookware,
          kitchen utensils, dinnerware and
          household essentials.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("products")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Catalogue
        </button>

      </section>


      {/* CATEGORIES */}

      <section id="categories">

        <h2>
          Shop by Category
        </h2>

        <div>
          <div>🍳 Cookware</div>
          <div>🍽️ Dinnerware</div>
          <div>🥄 Cutlery</div>
          <div>🥣 Storage</div>
          <div>🥛 Drinkware</div>
        </div>

      </section>


      {/* PRODUCTS */}

      <section id="products">

        <h2>
          Our Products
        </h2>


        {/* SEARCH */}

        <div className="search-box">

          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        {/* FILTER BUTTONS */}

        <div className="filters">

          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Cookware")}>
            Cookware
          </button>

          <button onClick={() => setCategory("Dinnerware")}>
            Dinnerware
          </button>

          <button onClick={() => setCategory("Cutlery")}>
            Cutlery
          </button>

          <button onClick={() => setCategory("Storage")}>
            Storage
          </button>

          <button onClick={() => setCategory("Drinkware")}>
            Drinkware
          </button>

        </div>


        {/* PRODUCT GRID */}

        <div className="product-grid">

          {filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              {/* IMAGE */}

              <div className="product-image">

                {product.image.startsWith("/") ? (

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                ) : (

                  <span>
                    {product.image}
                  </span>

                )}

              </div>


              {/* PRODUCT DETAILS */}

              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p>
                  ₹{product.price}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact">

        <h2>
          Visit Vignesh Metal Mart
        </h2>

        <p>
          📍 Your Shop Address
        </p>

        <p>
          📞 Your Phone Number
        </p>

        <p>
          💬 Contact us on WhatsApp
        </p>

      </section>


      {/* FOOTER */}

      <footer>

        <p>
          © 2026 Vignesh Metal Mart.
          All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;