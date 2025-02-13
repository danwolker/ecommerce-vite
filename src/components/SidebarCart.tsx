import React from "react";
import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface SidebarCartProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebarCart: boolean;
  selectedProducts: Product[];
  cartTotal: number;
  removeProductFromCart: (id: number) => void;
}

export default function SidebarCart({
  setShowSidebarCart,
  showSidebarCart,
  selectedProducts,
  cartTotal,
  removeProductFromCart,
}: SidebarCartProps) {
  return (
    <aside className={`sidebar-cart ${showSidebarCart ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
      <div className="top">
        <h3>Seu carrinho</h3>
        <button onClick={() => setShowSidebarCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="sidebar-product-list">
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <SidebarProduct key={product.id} {...product} removeProductFromCart={removeProductFromCart} />
          ))
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </div>

      <div className="total-container">
  <b>Total: R$ </b> {cartTotal !== undefined ? cartTotal.toFixed(2) : "0.00"}
</div>

      <Link to="/cart/checkout" className="btn-icon">
        <span>Ver agora</span>
        <FontAwesomeIcon icon={faMoneyBill} />
      </Link>
    </aside>
  );
}
