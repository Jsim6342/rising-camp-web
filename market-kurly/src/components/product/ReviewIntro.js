import React from 'react'

const ReviewIntro = () => {
  return (
    <div class="review_intro">
        <h3>상품 후기</h3>
        <ul>
            <li>사진후기 100원, 글후기 50원 적립금 혜택이 있어요.</li>
            <li>퍼플, 더퍼플은 2배 적립 (사진 200원, 글 100원) / 주간 베스트 후기로 선정 시 5,000원을 추가 적립</li>
            <li>후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
            <li>작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)</li>
        </ul>
        <div class="review_imgs">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
        </div>
    </div>
  )
}

export default ReviewIntro