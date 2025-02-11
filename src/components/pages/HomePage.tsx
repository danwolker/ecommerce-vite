import React from "react";
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import TestimonialsList from "../TestimonialsList";
import SubHeader from "../SubHeader";
import SubPharmacy from "../SubPharmacy";
import PetFood from "../PetFood"; // Importando o novo componente
import PubliSocialMedia from "../PubliSocialMedia";

// Define a interface do produto com base no JSON
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

// Define as propriedades esperadas pela página
interface HomePageProps {
  products: Product[];
  showSidebarCart: boolean;
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomePage({
  products,
  showSidebarCart,
  setShowSidebarCart,
}: HomePageProps) {
  return (
    <>
      <Header />
      <SubHeader />
      <SidebarCart
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
      />
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
      <SidebarCart
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
      />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Nossa Farmacia</h3>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList products={products} />
        </div>
      </div>
      <SubPharmacy />
      <SidebarCart
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
      />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Rações em Destaque</h3>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList products={products} />
        </div>
      </div>
      <PetFood />
      <TestimonialsList />
      <PubliSocialMedia />
    </>
  );
}
