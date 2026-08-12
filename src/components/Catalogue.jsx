import React, { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
const categoryMapping = {
  "Cookware": [
    "HOUSEHOLD STEEL COOKWARES",
    "HOUSEHOLD ALUMINIUM COOKWARES",
    "NON STICK COOKWARES",
    "CASTE IRON PRODUCTS",
  ],

  "Cookers & Stoves": [
    "COOKERS",
    "RICE COOKER",
    "STOVE",
    "ELECTRIC STOVE",
  ],

  "Electric Appliances": [
    "ELECTRIC KITHCHEN",
    "ELECTRIC EQUIPMENT",
  ],

  "Kitchen Essentials": [
    "KITCHEN RACK",
    "WATER BOTTLE",
  ],

  "Serving & Storage": [
    "CASROLES",
    "FLASKS",
  ],

  "Crockery & Glassware": [
    "CROCKERIES",
    "GLASS WARES",
  ],

  "Pooja Products": [
    "POOJA VESSELS",
  ],
};

function Catalogue({ onBackHome, selectedCategory: initialCategory }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Use the category received from App.jsx
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || "All"
  );

 const categories = [
  "All",
  "Cookware",
  "Cookers & Stoves",
  "Electric Appliances",
  "Kitchen Essentials",
  "Serving & Storage",
  "Crockery & Glassware",
  "Pooja Products",
];

  const filteredProducts = useMemo(() => {
  const search = searchTerm.toLowerCase().trim();

  return products.filter((product) => {
    let categoryMatch = true;

    if (selectedCategory !== "All") {
      const mappedCategories = categoryMapping[selectedCategory] || [];

      categoryMatch = mappedCategories.includes(product.category);
    }

    const searchMatch =
      !search ||
      product.name.toLowerCase().includes(search) ||
      product.code.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });
}, [searchTerm, selectedCategory]);

  return (
    <div className="catalogue-page">

      {/* HEADER */}
      <header className="catalogue-header">
        <div className="catalogue-header-inner">

          <button
            className="catalogue-back-button"
            onClick={onBackHome}
          >
            ← Home
          </button>

          <div className="catalogue-brand">
            <h1>Vignesh Metal Mart</h1>
            <span>Product Catalogue</span>
          </div>

          <div className="catalogue-count">
            <strong>{products.length}</strong>
            <span>Items</span>
          </div>

        </div>
      </header>

      {/* INTRO */}
      <section className="catalogue-intro">

        <span>OUR COLLECTION</span>

        <h2>Kitchenware &amp; More</h2>

        <p>
          Explore our carefully selected collection of cookware,
          appliances, kitchen essentials and household products.
        </p>

      </section>

      {/* SEARCH */}
      <section className="catalogue-controls">

        <div className="catalogue-search">

          <span className="catalogue-search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search products or product codes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {searchTerm && (
            <button
              className="catalogue-clear"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}

        </div>

      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="catalogue-category-bar">

  <div className="catalogue-category-inner">

    <div className="category-heading">
      <span>SHOP BY</span>
      <strong>Category</strong>
    </div>

    <div className="catalogue-filter-scroll">

      {categories.map((category) => (
        <button
          key={category}
          className={`catalogue-filter ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>

  </div>

</section>

      {/* PRODUCT AREA */}
      <main className="catalogue-products-section">

        <div className="catalogue-results-header">

          <div>

            <span className="results-label">
              PRODUCTS
            </span>

            <h2>
              {selectedCategory === "All"
                ? "All Products"
                : selectedCategory}
            </h2>

          </div>

          <p>
            Showing <strong>{filteredProducts.length}</strong>{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </p>

        </div>

        {/* PRODUCTS */}
        {filteredProducts.length > 0 ? (

          <div className="catalogue-product-grid">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>

        ) : (

          <div className="catalogue-empty">

            <div>⌕</div>

            <h3>No products found</h3>

            <p>
              We couldn't find a product matching your search.
            </p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Search
            </button>

          </div>

        )}

      </main>

    </div>
  );
}

export default Catalogue;