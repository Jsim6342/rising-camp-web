import React from 'react'

const ProductTip = () => {
  return (
    <article class="tip">
        <h3>
            <span>Kurly’s Tip</span>
        </h3>
        <div class="tip_box">
            <p class="words">
                <strong>중량 안내</strong>
                <b>・</b>
                1묶음(530mL X 20개입)을 보내드려요. 
            </p>
            <p class="words">
                <strong>유의사항</strong>
                <b>・</b>
                가열 또는 냉동 등 온도 변화시 흰색 결정이 생길 수 있으나 이는 미네랄 성분이므로 안심하고 드세요.
                <br/>
                <b>・</b>
                특정질환, 특이체질, 알레르기 체질의 경우 간혹 개인에 따라 과민반응을 나타낼 수 있으므로 확인 후 섭취하세요. 
                <br/>
                <b>・</b>
                본 제품은 질병의 예방 및 치료를 위한 의약품이 아닌 건강기능식품입니다. 
            </p>
        </div>
    </article>
  )
}

export default ProductTip