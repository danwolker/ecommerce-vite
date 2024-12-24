import React from "react";
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import TestimonialsList from "../TestimonialsList";

// Define as propriedades esperadas
interface HomePageProps {
  products: {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }[];
}

export default function HomePage({ products }: HomePageProps) {
  return (
    <>
      <Header />
      <SidebarCart />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Seleção de Produtos!</h3>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList products={products} />
        </div>
      </div>
      <ExclusiveSection />
      <TestimonialsList />
    </>
  );
}
