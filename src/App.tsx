import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SidebarCart from "./components/SidebarCart";
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
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("/Products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar o arquivo JSON.");
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Erro ao carregar os produtos:", error));
  }, []);

  // Adicionar produto ao carrinho
  const addProductToCart = (id: number) => {
    const productToAdd = products.find((product) => product.id === id);
    if (!productToAdd) return;

    if (selectedProducts.some((product) => product.id === id)) return;

    const newCart = [...selectedProducts, productToAdd];
    setSelectedProducts(newCart);
    setCartTotal(cartTotal + productToAdd.price);
  };

  // Remover produto do carrinho
  const removeProductFromCart = (id: number) => {
    const productToRemove = selectedProducts.find((product) => product.id === id);
    if (!productToRemove) return;

    const newCart = selectedProducts.filter((product) => product.id !== id);
    setSelectedProducts(newCart);
    setCartTotal(cartTotal - productToRemove.price);
  };

  return (
    <Router>
      <div className="App">
        <Navbar setShowSidebarCart={setShowSidebarCart} selectedProducts={selectedProducts} />
        <SidebarCart
          setShowSidebarCart={setShowSidebarCart}
          showSidebarCart={showSidebarCart}
          selectedProducts={selectedProducts}
          cartTotal={cartTotal}
          removeProductFromCart={removeProductFromCart}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  removeProductFromCart={removeProductFromCart}
                  selectedProducts={selectedProducts}
                  addProductToCart={addProductToCart}
                  products={products}
                  setShowSidebarCart={setShowSidebarCart}
                  showSidebarCart={showSidebarCart}
                  cartTotal={cartTotal}
                />
              }
            />
            <Route path="/produtos" element={<ProductsPage products={products} addProductToCart={addProductToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
