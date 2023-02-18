import React from 'react'
import '../css/product.css'
import Header from '../components/commons/Header'
import Footer from '../components/commons/Footer'
import ProductSummary from '../components/product/ProductSummary'
import ProductLnb from '../components/product/ProductLnb'
import ProductDetail from '../components/product/ProductDetail'
import Review from '../components/product/Review'
import { useEffect } from 'react'
import data from '../data.json'

const Product = () => {

  useEffect(() => {
    
  }, [])


  return (
    <div id="main">

        <Header />

        <main class="product_wrap">
            <div class="product_img">
                <img src={data.product.image} alt="product"/>
            </div>
            <ProductSummary title={data.product.title} subTitle={data.product.subTitle} price={data.product.price} seller={data.product.seller} packing={data.product.packing} unit={data.product.unit} capacity={data.product.capacity} originArea={data.product.originArea} guidance={data.product.guidance}/>
        </main>

        <ProductLnb />

        <ProductDetail subTitle={data.product.subTitle} unit={data.product.unit} capacity={data.product.capacity} introTitle={data.product.introTitle} introduce={data.product.introduce} pointImg={data.product.pointImg} tips={data.product.tips} notes={data.product.notes} noteImg={data.product.noteImg}/>

        <Review />

        <Footer />

    </div>
  )
}

export default Product