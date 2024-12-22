import React from "react";
import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Product({ id, image, name, rate, price }){
   return (
    <div className="product">
      <img src={image} alt={name}
      />
      <p className="name">{name}</p>
      <p className="rate">{"⭐".repeat(rate)}</p>
      <p className="price">
        <span>R$</span> {price}
      </p>
      <div className="buttons">
        <Link to={`/products/${id}/checkout`} className="btn-icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <button className="btn icon add-icon-cart-btn">
          <span>Adicionar ao carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}