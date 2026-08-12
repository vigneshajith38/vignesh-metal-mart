import React from "react";

const categories = [
  {
    number: "01",
    icon: "🥘",
    title: "Cookware",
    description: "Steel, aluminium, non-stick and cast iron cookware.",
  },
  {
    number: "02",
    icon: "🍳",
    title: "Cookers & Stoves",
    description: "Pressure cookers, rice cookers and cooking stoves.",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Electric Appliances",
    description: "Practical electric appliances for modern kitchens.",
  },
  {
    number: "04",
    icon: "🔪",
    title: "Kitchen Essentials",
    description: "Everyday tools and essentials for your kitchen.",
  },
  {
    number: "05",
    icon: "🥣",
    title: "Serving & Storage",
    description: "Useful containers, storage and serving products.",
  },
  {
    number: "06",
    icon: "🍽️",
    title: "Crockery & Glassware",
    description: "Crockery, glassware, flasks and serving essentials.",
  },
  {
    number: "07",
    icon: "🪔",
    title: "Pooja Products",
    description: "Traditional pooja vessels and related essentials.",
  },
];

function Categories({ onCatalogueClick }) {
  return (
    <section className="categories-section" id="categories">
      <div className="section-heading categories-heading">
        <span>OUR COLLECTION</span>

        <h2>Everything for Your Kitchen</h2>

        <p>
          Explore our range of cookware, appliances and everyday kitchen
          essentials.
        </p>
      </div>

      <div className="homepage-category-grid">
        {categories.map((category) => (
          <button
            key={category.title}
            className="homepage-category-card"
            onClick={() => onCatalogueClick(category.title)}
          >
            <div className="category-card-top">
              <span className="category-number">
                {category.number}
              </span>

              <div className="homepage-category-icon">
                {category.icon}
              </div>
            </div>

            <div className="category-card-content">
              <h3>{category.title}</h3>

              <p>{category.description}</p>
            </div>

            <span className="category-arrow">↗</span>
          </button>
        ))}
      </div>

      <div className="categories-cta">
        <p>Looking for something specific?</p>

        <button onClick={() => onCatalogueClick("All")}>
          View Full Catalogue
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default Categories;