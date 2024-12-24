import React from "react";
import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarProduct from "./SidebarProduct";
import { Link } from "react-router-dom";

// Define as propriedades esperadas pelo componente
interface SidebarCartProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebarCart: boolean;
}

export default function SidebarCart({
  setShowSidebarCart,
  showSidebarCart,
}: SidebarCartProps) {
  return (
    <aside className={`sidebar-cart ${showSidebarCart ? "show" : ""}`}>
      <div className="top">
        <h3>Seu carrinho</h3>
        <button onClick={() => setShowSidebarCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="sidebar-product-list">
        <SidebarProduct />
        <SidebarProduct />
        <SidebarProduct />
      </div>

      <div className="total-container">
        <b>Total: R$ </b> 1000
      </div>

      <Link to="/cart/checkout" className="btn-icon">
        <span>Ver agora</span>
        <FontAwesomeIcon icon={faMoneyBill} />
      </Link>

      <i> Seu carrinho está vazio.</i>
    </aside>
  );
}
