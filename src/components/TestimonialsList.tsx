import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Correção na importação do CSS do Swiper

export default function TestimonialsList() {
  // Lista de imagens corrigida e ampliada para evitar erro de loop
  const partners = [
    { src: "/images/logo_elanco.jpg", alt: "Elanco" },
    { src: "/images/logo_golden.jpg", alt: "Golden" },
    { src: "/images/logo_threedogs.jpg", alt: "ThreeDogs" },
    { src: "/images/logo_golden.jpg", alt: "Golden" },
    { src: "/images/logo_golden.jpg", alt: "Golden" },
    { src: "/images/logo_golden.jpg", alt: "Golden" },
  ];

  return (
    <div className="page-inner-content">
      <div className="testimonials-section">
        <h2 className="testimonials-title">Nossos Parceiros</h2>

        {/* Swiper Carrossel */}
        <Swiper
          slidesPerView={2} // Exibe 2 logos por vez
          slidesPerGroup={1} // Move 1 logo por vez
          spaceBetween={20} // Espaçamento entre os slides
          loop={true} // Mantém o loop ativo
          autoplay={{ delay: 4000, disableOnInteraction: false }} // Tempo de troca automática
          speed={1200} // Transição mais suave
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="testimonials-carousel"
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={partner.src} alt={partner.alt} className="partner-logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
