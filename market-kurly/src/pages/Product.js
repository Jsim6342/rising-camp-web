import React from 'react'
import '../css/product.css'
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import ProductSummary from '../components/product/ProductSummary';
import ProductLnb from '../components/product/ProductLnb';
import ProductDetail from '../components/product/ProductDetail';
import Review from '../components/product/Review';
import { useEffect } from 'react';

const Product = () => {

  useEffect(() => {
    
  }, [])


  return (
    <div id="main">

        <Header />

        <main class="product_wrap">
            <div class="product_img">
                <img src="https://product-image.kurly.com/product/image/0a26fb8a-3bdb-4163-9d05-a9e1e80203bf.jpg" alt="product"/>
            </div>
            <ProductSummary />
        </main>

        <ProductLnb />

        <ProductDetail />

        <Review />

        <Footer />

    </div>
  )
}

export default Product