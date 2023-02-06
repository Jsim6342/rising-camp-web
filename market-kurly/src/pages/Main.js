import React from 'react'
import '../css/main.css';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import ProductList from '../components/main/ProductList';
import ProductBargain from '../components/main/ProductBargain';


const Main = () => {
  return (
    <div id="main">

        <Header />
    
        <figure className="banner">
            <img src="https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/1408d066-28e5-4649-9031-8aec5a1a9e01.jpg" alt="banner"/>
        </figure>

        <ProductList />

        <div className="advertise">
            <img src="https://product-image.kurly.com/banner/random-band/pc/img/89badb8c-2a30-4992-bfc9-d17cf202e138.jpg" alt="advertise"/>
        </div>

        <ProductBargain />

        <Footer />
    </div>
  );
}

export default Main;