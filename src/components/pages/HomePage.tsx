import React from "react";
import Header from "../Header";
import SidebarCart from "../SidebarCart";
import ProductsList from "../ProductsList";
import ExclusiveSection from "../ExclusiveSection";
import TestimonialsList from "../TestimonialsList";
import SubHeader from "../SubHeader";
import SubPharmacy from "../SubPharmacy";
import PetFood from "../PetFood";
import PubliSocialMedia from "../PubliSocialMedia";

// Define a interface do produto
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Define as propriedades esperadas pela página
interface HomePageProps {
  products: Product[];
  showSidebarCart: boolean;
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  addProductToCart: (id: number) => void;
  selectedProducts: Product[];
  cartTotal: number;
  removeProductFromCart: (id: number) => void;
}

export default function HomePage({
  products,
  showSidebarCart,
  setShowSidebarCart,
  addProductToCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
  
}: HomePageProps) {

  return (
    <>
      <Header />
      <SubHeader />
      <SidebarCart
        removeProductFromCart={removeProductFromCart}
        cartTotal={cartTotal}
        selectedProducts={selectedProducts}
        setShowSidebarCart={setShowSidebarCart}
        showSidebarCart={showSidebarCart}
      />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Seleção de Produtos!</h3>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList addProductToCart={addProductToCart} products={products} />
        </div>
      </div>
      <ExclusiveSection />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Seleção de Produtos!</h3>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList addProductToCart={addProductToCart} products={products} />
        </div>
      </div>
      <SubPharmacy />
      <PetFood />
      <div className="page-inner-content">
        <div className="section-title">
          <h3>Seleção de Produtos!</h3>
          <div className="underline"></div>
        </div>
        <div className="main-content">
          <ProductsList addProductToCart={addProductToCart} products={products} />
        </div>
      </div>
      <TestimonialsList />
      <PubliSocialMedia />
    </>
  );
}
