import React from 'react'
import ProductNormal from './ProductNormal'
import data from '../../data.json'

const ProductList = () => {
  return (
    <section className="product">
            <h2>이 상품 어때요?</h2>
            <article>
                <ul className="items">
                  {
                    data.products.map((product) => (
                      <ProductNormal key={product.id} title={product.title} price={product.price} reviewCount={product.reviewCount} image={product.image}/> 
                    ))
                  }
                </ul>
            </article>
    </section>
  )
}

export default ProductList