import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="pager-inner-content content">
                <div className="logo-footer">
                <h1 className="logo">
  <img src="/images/logoprincipal.png" alt="Love Store" 
        className="logo-image" />
    </h1>
                    <p>MENSAGEM DA EMPRESA REFERENTE À MARCA
                    </p>
                </div>
            </div>
            <div className="links">
                <h3>Links úteis</h3>
                <ul>
                    <li>
                        <Link to="/">Cupons de Desconto</Link>
                    </li>
                    <li>
                        <Link to="/">Depoimentos</Link>
                    </li>
                    <li>
                        <Link to="/">Política da Empresa</Link>
                    </li>
                    <li>
                        <Link to="/">Contate-nos</Link>
                    </li>
                </ul>
            </div>
            <div className="page-inner-content">
                <hr />

                <p className="copyright">
                    Copyright 2025 - Agropet das Gurias - Direitos Autorais
                </p>
            </div>
        </footer>
    );
}
