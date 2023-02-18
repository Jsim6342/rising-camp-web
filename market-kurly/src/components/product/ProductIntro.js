import React from 'react'

const ProductIntro = (props) => {
  return (
    <article id="intro">       
        <div class="picture">
            <img src="https://img-cf.kurly.com/shop/data/goodsview/20220801/gv40000394934_1.jpg" alt="product"/>
        </div>
        <div class="context">
            <h3>
                <small>{props.subTitle}</small>
                {props.introTitle}
            </h3>
            <p>{props.introduce}</p>
        </div>
    </article>
  )
}

export default ProductIntro