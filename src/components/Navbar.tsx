import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

// Define as propriedades esperadas pelo componente
interface NavbarProps {
  setShowSidebarCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setShowSidebarCart }: NavbarProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
      <div className="inner-content">
        <h1 className="logo">
          Love <span>Store</span>
        </h1>
        <nav className={show ? "show" : ""}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/quem-somos">Quem somos?</Link>
            </li>
            <li>
              <Link to="/contatos">Contatos</Link>
            </li>
          </ul>
        </nav>
        <div className="navs-icon-container">
          <div className="search-input-container">
            <input type="search" placeholder="Procurar" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <button
            className="shopping-cart"
            onClick={() => setShowSidebarCart(true)}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="product-count">6</div>
          </button>
          <button className="menu-button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  );
}
