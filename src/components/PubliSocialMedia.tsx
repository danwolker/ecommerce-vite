import React from "react";
import "../index.css"; // Arquivo CSS separado para estilização
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Ícones de redes sociais

export default function PubliSocialMedia() {
  return (
    <div className="publi-container">
      <div className="social-text">
        <span>Nos siga nas redes:</span>
        <strong>
          <FontAwesomeIcon icon={faInstagram} className="inline-icon" /> Agropetdasgurias  
          <FontAwesomeIcon icon={faFacebook} className="inline-icon" /> agropetdasgurias
        </strong>
      </div>

      <div className="signup-box">
        <span>Cadastre-se e receba nossas promoções</span>
        <div className="signup-form">
          <input type="email" placeholder="Digite seu e-mail" className="email-input" />
          <button className="signup-button">Cadastre-se</button>
        </div>
      </div>
    </div>
  );
}
