import React from "react";

function ProductCard({ product }) {
  return (
    <article className="catalogue-product-card">

      {/* TOP */}
      <div className="product-card-top">
        <span className="product-category">
          {product.category}
        </span>

        <span className="product-number">
          #{String(product.id).padStart(3, "0")}
        </span>
      </div>

      {/* PRODUCT VISUAL */}
      <div className="product-placeholder">
        <div className="product-placeholder-icon">
          ✦
        </div>

        <span>VIGNESH METAL MART</span>
      </div>

      {/* CONTENT */}
      <div className="product-card-content">

        <h3>{product.name}</h3>

        <div className="product-card-divider"></div>

        <div className="product-code">
          <span>PRODUCT CODE</span>

          <strong>{product.code}</strong>
        </div>

      </div>

    </article>
  );
}

export default ProductCard;