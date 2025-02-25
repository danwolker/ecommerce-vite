import React from "react";
import { faCartShopping, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  addProductToCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ 
  id, 
  name, 
  image, 
  price, 
  addProductToCart,
 }) => 
    {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>

      <p className="price">
        <span>R$:</span>{price}
      </p>

      <div className="buttons">
        <Link to={`/products/${id}/checkout`} className="btn-icon">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </Link>
        <button onClick={() => addProductToCart (id)} className="btn-icon add-to-cart-btn">
          <span>Adicionar ao carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Product;

