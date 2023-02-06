import React from 'react'
import ProductIntro from './ProductIntro'
import ProductPoint from './ProductPoint'
import ProductTip from './ProductTip'
import ProductNote from './ProductNote'

const ProductDetail = () => {
  return (
    <section class="product_detail">
        <ProductIntro />
        <ProductPoint />
        <ProductTip />
        <ProductNote />
    </section>
  )
}

export default ProductDetail