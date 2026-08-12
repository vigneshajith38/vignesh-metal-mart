import React, { useState } from "react";

import Home from "./components/Home";
import Catalogue from "./components/Catalogue";

import "./App.css";

function App() {
  const [showCatalogue, setShowCatalogue] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const openCatalogue = (category = "All") => {
    setSelectedCategory(category);
    setShowCatalogue(true);
  };

  if (showCatalogue) {
    return (
      <Catalogue
        selectedCategory={selectedCategory}
        onBackHome={() => setShowCatalogue(false)}
      />
    );
  }

  return <Home onCatalogueClick={openCatalogue} />;
}

export default App;