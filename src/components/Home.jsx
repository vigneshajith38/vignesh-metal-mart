import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "../Home.css";

function Home({ onCatalogueClick }) {
  return (
    <div className="homepage" id="top">
      <Navbar onCatalogueClick={onCatalogueClick} />

      <main>
        <Hero onCatalogueClick={onCatalogueClick} />

        <Categories onCatalogueClick={onCatalogueClick} />

        <WhyChooseUs />

        <About />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;