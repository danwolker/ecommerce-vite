import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function SidebarProduct() {
  return (
    <div className="sidebar-product">
      <div className="left-side">
        <button className="remove-product-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        
        <div className="details">
        <h4>Dualsense ps5</h4>
        <p> R$: 2.000,00</p>
        <input type="number" min={1} max={100} />
        <p className="price-sum">
          <b>Soma :</b> R$: 1.000,00
        </p>
      </div>
        
      </div>
      <div className="right-side">
        <img src="public\products\product-6.png" alt="dualsense" />
      </div>
    </div>
  )
}
