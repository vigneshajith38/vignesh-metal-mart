import React from "react";

const reasons = [
  {
    icon: "✓",
    title: "Quality Products",
    description:
      "A carefully selected range of products for everyday kitchen needs.",
  },
  {
    icon: "◈",
    title: "Wide Selection",
    description:
      "Explore cookware, appliances, kitchen essentials and more in one place.",
  },
  {
    icon: "♡",
    title: "Trusted Service",
    description:
      "We value our customers and aim to provide a dependable shopping experience.",
  },
  {
    icon: "⌖",
    title: "Convenient Location",
    description:
      "Conveniently located in Kaniyapuram, Pallippuram, Kerala.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="section-heading">
        <span>WHY VIGNESH METAL MART</span>

        <h2>Quality You Can Count On</h2>

        <p>
          Everything you need for your kitchen, brought together with quality
          and convenience in mind.
        </p>
      </div>

      <div className="why-grid">
        {reasons.map((reason) => (
          <div className="why-card" key={reason.title}>
            <div className="why-icon">{reason.icon}</div>

            <h3>{reason.title}</h3>

            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;