import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Food from "./components/Food";
import Category from "./components/Category";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <Food />
      <Category />
    </div>
  );
}

export default App;
