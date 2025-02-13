import React, { useState } from "react";
import Header from "../Header";
import PetFood from "../PetFood";
import TestimonialsList from "../TestimonialsList";
import PubliSocialMedia from "../PubliSocialMedia";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface DogsPageProps {
  products: Product[];
  addProductToCart: (id: number) => void;
}

export default function DogsPage({ products, addProductToCart }: DogsPageProps) {
  const [sortOption, setSortOption] = useState("a-z");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "a-z") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <>
      {/* Navbar já está sendo renderizada pelo App.tsx */}
      {/* Seção de produtos com filtros */}
      <div className="page-inner-content">
        <div className="products-layout">
          {/* Coluna lateral com filtros */}
          <aside className="filters-column">
            <div className="filters-title">Filtros</div>
            <div className="filters-options">
              <label>
                <input type="checkbox" />
                Ração
              </label>
              <label>
                <input type="checkbox" />
                Brinquedos
              </label>
              <label>
                <input type="checkbox" />
                Higiene
              </label>
              <label>
                <input type="checkbox" />
                Acessórios
              </label>
            </div>
          </aside>

          {/* Coluna de ordenação */}
          <div className="sorting-column">
            <label htmlFor="sort">Ordenar por: </label>
            <select id="sort" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="a-z">A-Z</option>
              <option value="price">Preço</option>
            </select>
          </div>

          {/* Coluna com a lista de produtos */}
          <div className="products-column">
            <ProductsList products={sortedProducts} addProductToCart={addProductToCart} />
          </div>
        </div>
      </div>
      <PetFood />
      <TestimonialsList />
      <PubliSocialMedia />
    </>
  );
}
