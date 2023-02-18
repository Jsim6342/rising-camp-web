import React from 'react'

const ProductTip = (props) => {
  return (
    <article class="tip">
        <h3>
            <span>Kurly’s Tip</span>
        </h3>
        <div class="tip_box">
            <p class="words">
                <strong>중량 안내</strong>
                <b>・</b>
                {props.unit}({props.capacity})을 보내드려요. 
            </p>
            <p class="words">
                <strong>유의사항</strong>
                {
                    props.tips.map((tip, index) => (
                    <React.Fragment key={index}>
                        <b>・</b>
                        {tip}
                        <br />
                    </React.Fragment>
                    ))
                } 
            </p>
        </div>
    </article>
  )
}

export default ProductTip