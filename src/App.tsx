import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductsPage from "./components/pages/ProductsPage";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false)

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Falha ao carregar o arquivo JSON.");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Erro ao carregar os produtos:", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setShowSidebarCart={setShowSidebarCart} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage products={products}
              setShowSidebarCart={setShowSidebarCart}
              showSidebarCart={showSidebarCart}
            />
            }
            />
            <Route path="/produtos" element={<ProductsPage products={products} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
