import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
  selectedProducts: any[];
}

export default function Navbar({ setShowSidebarCart, selectedProducts }: NavbarProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="logo">
          <img src="/images/logoprincipal.png" alt="Love Store" className="logo-image" />
        </h1>
        <nav className={`${show ? "show" : ""}`}>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/produtos">Para seu Cão</Link></li>
            <li><Link to="/produtos">Para seu Gato</Link></li>
            <li><Link to="/produtos">Para Todos Pets</Link></li>
            <li><Link to="/produtos">Fármacia</Link></li>
            <li><Link to="/produtos">Promoções</Link></li>
          </ul>
        </nav>
        <div className="navs-icon-container">
          <div className="search-input-container">
            <input type="search" placeholder="Procurar" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <button className="shopping-cart" onClick={() => setShowSidebarCart(true)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="product-count">{selectedProducts.length}</div>
          </button>
          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
