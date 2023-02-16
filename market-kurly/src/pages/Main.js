import React from 'react'
import '../css/main.css';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import ProductList from '../components/main/ProductList';
import ProductBargain from '../components/main/ProductBargain';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination } from "swiper";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

// SwiperCore.use([Navigation, Pagination])

const Main = () => {
  return (
    <div id="main">

        <Header />
    
        <figure className="banner">
            <img src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/1408d066-28e5-4649-9031-8aec5a1a9e01.jpg" alt="banner"/>
        </figure>

        <ProductList />


        {/* <div className="advertise">
          <Swiper
            className="advertise"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img src="https://product-image.kurly.com/banner/random-band/pc/img/89badb8c-2a30-4992-bfc9-d17cf202e138.jpg" alt="advertise"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://product-image.kurly.com/banner/random-band/pc/img/89badb8c-2a30-4992-bfc9-d17cf202e138.jpg" alt="advertise"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://product-image.kurly.com/banner/random-band/pc/img/89badb8c-2a30-4992-bfc9-d17cf202e138.jpg" alt="advertise"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://product-image.kurly.com/banner/random-band/pc/img/89badb8c-2a30-4992-bfc9-d17cf202e138.jpg" alt="advertise"/>
            </SwiperSlide>
          </Swiper>
        </div> */}
        <div className="advertise">
            <img src="https://product-image.kurly.com/banner/random-band/pc/img/89badb8c-2a30-4992-bfc9-d17cf202e138.jpg" alt="advertise"/>
        </div>

        <ProductBargain />

        <Footer />
    </div>
  );
}

export default Main;