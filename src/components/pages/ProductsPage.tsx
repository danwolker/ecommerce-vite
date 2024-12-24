import React from "react";
import ProductsList from "../ProductsList";

// Define as propriedades esperadas
interface ProductsPageProps {
  products: {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }[];
}

export default function ProductsPage({ products }: ProductsPageProps) {
  return (
    <div className="page-inner-content">
      <div className="section-title">
        <h3>Nossos Produtos!</h3>
        <div className="underline"></div>
        <div className="main-content">
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
}
