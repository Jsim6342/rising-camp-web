import React from 'react'

const ProductPoint = (props) => {
  return (
    <article class="point">
        <h3>
            <span>Kurly's Check Point</span>
        </h3>
        <img src={props.pointImg} alt=""/>
    </article>
  )
}

export default ProductPoint