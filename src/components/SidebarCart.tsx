import React from 'react'
import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarProduct from "./SidebarProduct"
import { Link } from "react-router-dom"

export default function SidebarCart() {
  return (
    <aside className="sidebar-cart">
        <div className="top">
            <h3>Seu carrinho</h3>
            <button>
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

        <i> Seu carrinho está vázio.</i>
    </aside>
  )
}
