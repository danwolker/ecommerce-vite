import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="overlay">
        <div className="page-inner-content">
          <div className="content">
            <div className="text-side">
              <h2> Nossas Promoções </h2>
              <p>
                Sessão exclusiva para anúncios de produtos de alto nível ou que estão em promoção relâmpago.
              </p>
              <Link to="/produtos" className="see-more-btn">
                <span> Veja Mais  </span>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
