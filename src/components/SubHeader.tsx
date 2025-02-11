import React from "react";
import "../index.css"; // Arquivo CSS separado para estilização

export default function SubHeader() {
  return (
    <div className="subheader-container">
      <div className="subheader-grid">
        <img src="/images/credeli.jpg" alt="Credeli 1" />
        <img src="/images/credeli2.jpg" alt="Credeli 2" />
        <img src="/images/credeli2.jpg" alt="Credeli 3" />
        <img src="/images/Credeli_4.png" alt="Credeli 4" />
      </div>
    </div>
  );
}
