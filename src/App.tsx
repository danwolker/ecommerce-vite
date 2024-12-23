import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ExclusiveSection from "./components/ExclusiveSection";
import TestimonialsList from "./components/TestimonialsList";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <div className="page-inner-content">
            <div className="section-title">
              <h3>Seleção de Produtos!</h3>
              <div className="underline"></div>
              <div className="main-content">
                <ProductsList products={products} />
              </div>
            </div>
          </div>
        </main>
        <ExclusiveSection />
        <TestimonialsList />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
