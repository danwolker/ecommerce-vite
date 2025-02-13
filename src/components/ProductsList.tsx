import React from "react";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductsListProps {
  products: Product[];
  addProductToCart: (id: number) => void;
}

const ProductsList: React.FC<ProductsListProps> = ({ products, addProductToCart }) => {
  // Garante que não haja IDs duplicados
  const uniqueProducts = Array.from(new Set(products.map((p) => p.id))).map((id) =>
    products.find((p) => p.id === id)
  );

  return (
    <div className="product-carousel-container">
      <Swiper
       modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={products.length >= 2} // Desativa loop se houver poucos produtos
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {uniqueProducts.map((product) => (
          <SwiperSlide key={product?.id.toString()}>
            <Product {...product!} addProductToCart={addProductToCart} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsList;
