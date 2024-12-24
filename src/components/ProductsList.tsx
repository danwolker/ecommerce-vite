import React from "react";
import Product from "./Product";


export interface Product {
  id: number;
  name: string;
  image: string; // Usar a propriedade original do JSON
  rating: number;
  price: number;
}


interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="product-list">
      {products.map((products) => (
        <Product key={products.id} {...products} />
      ))}
    </div>
  );
}
