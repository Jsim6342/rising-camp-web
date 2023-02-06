import React from 'react'
import ProductNormal from './ProductNormal'

const ProductList = () => {
  return (
    <section className="product">
            <h2>이 상품 어때요?</h2>
            <article>
                <ul className="items">
                    <ProductNormal />
                    <ProductNormal />
                    <ProductNormal />
                    <ProductNormal />
                </ul>
            </article>
    </section>
  )
}

export default ProductList