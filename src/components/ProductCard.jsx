import React from "react";

function ProductCard({ product }) {
  // Vignesh Metal Mart WhatsApp number
  // Country code for India = 91
  const whatsappNumber = "919526335057";

  const whatsappMessage = `Hello, I'm interested in ${product.name} (Code: ${product.code}). Could you please provide more details?`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

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

        {/* WHATSAPP BUTTON */}
        <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-enquiry-button"
>
  <span className="whatsapp-icon">◉</span>
  <span>Enquire via WhatsApp</span>
  <span className="whatsapp-arrow">→</span>
</a>

      </div>

    </article>
  );
}

export default ProductCard;