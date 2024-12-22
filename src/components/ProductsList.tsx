import React from "react";
import Product from "./Product";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // Caminho ou URL da imagem
  rating: number; // Corrigido para refletir o JSON
}

interface ProductsListProps {
  products: Product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}
