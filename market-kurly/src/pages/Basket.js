import React from 'react'
import '../css/basket.css'
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import BasketLeft from '../components/basket/BasketLeft';
import BasketRight from '../components/basket/BasketRight';

const Basket = () => {
  return (
    <div id="main">

    <Header />

    <section>
        <div class="title">
            <h2>장바구니</h2>
        </div>
        <div class="basket">
            <BasketLeft />
            <BasketRight />
        </div>
    </section>
    
    <Footer />

    </div>
  )
}

export default Basket