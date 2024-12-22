import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import React from "react";

export default function ExclusiveSection () {
    return <div className="exclusive-section">
            <div className="page-inner-content">
             <div className="content">
              <div className="left-side">
                <h2> Sessão Exclusiva </h2>
                <p>
                    sessão exclusiva a anuncio de produtos de alto nivel
                    ou que estão em promoção relampago.
                </p>
                <Link to="/products" className="see-more-btn">
                <span> Ver agora ! </span>
                <FontAwesomeIcon icon={faChevronCircleRight} />
                </Link>
                </div>
                <div className="right-side">
                    <img src="public/images/exclusive.png" alt="Smart Band 4" />
                </div>
            </div>
        </div>
    </div>
}