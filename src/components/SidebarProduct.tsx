import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

interface SidebarProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  removeProductFromCart: (id: number) => void;
}

export default function SidebarProduct({ id, name, image, price, removeProductFromCart }: SidebarProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [priceSum, setPriceSum] = useState(price);

  return (
    <div className="sidebar-product">
      <div className="left-side">
        <button className="remove-product-btn" onClick={() => removeProductFromCart(id)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="details">
          <h4>{name}</h4>
          <p>R$ {price}</p>
          <input
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              setQuantity(newQuantity);
              setPriceSum(newQuantity * price);
            }}
          />
          {priceSum > price && (
            <p className="price-sum">
              <b>Soma: </b> R$ {priceSum.toFixed(2)}
            </p>
          )}
        </div>
      </div>
      <div className="right-side">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}
