import React from "react";
import ProductsList from "../ProductsList";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

// Define as propriedades esperadas pela página
interface ProductsPageProps {
  products: Product[];
  addProductToCart: (id: number) => void;
}

export default function ProductsPage({ products, addProductToCart }: ProductsPageProps) {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Nossos Produtos!</h3>
        <div className="underline"></div>
        <div className="main-content">
          <ProductsList products={products} addProductToCart={addProductToCart} />
        </div>
      </div>
    </div>
  );
}
