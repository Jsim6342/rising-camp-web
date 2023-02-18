import React from 'react'
import ProductIntro from './ProductIntro'
import ProductPoint from './ProductPoint'
import ProductTip from './ProductTip'
import ProductNote from './ProductNote'

const ProductDetail = (props) => {
  return (
    <section class="product_detail">
        <ProductIntro subTitle={props.subTitle} introTitle={props.introTitle} introduce={props.introduce}/>
        <ProductPoint pointImg={props.pointImg}/>
        <ProductTip unit={props.unit} capacity={props.capacity} tips={props.tips}/>
        <ProductNote notes={props.notes} noteImg={props.noteImg}/>
    </section>
  )
}

export default ProductDetail