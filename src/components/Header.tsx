import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; // React não é necessário explicitamente aqui

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="Left-side">
          <h2>Área designada a anúncios e promoções</h2>
          <p>Explicação do produto do anúncio.</p>
          <Link to="/produtos" className="see-more-btn">
            <span>Ver agora!</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="Right-side">
          <img src="/images/header-image.png" alt="Produtos" />
        </div>
      </div>
    </header>
  );
}
