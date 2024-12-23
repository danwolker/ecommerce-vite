import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="pager-inner-content content">
                <div className="download-option">
                    <p>Baixe nosso APP</p>
                    <p>Baixa para Android e iOS</p>
                    <div>
                        <img src="/public/images/play-store.png" alt="Play Store download" />
                        <img src="/public/images/app-store.png" alt="App Store download" />
                    </div>
                </div>

                <div className="logo-footer">
                    <h1 className="logo">
                        Love <span>Store</span>
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
                    Copyright 2025 - Daniel Wolker - Direitos Autorais
                </p>
            </div>
        </footer>
    );
}
