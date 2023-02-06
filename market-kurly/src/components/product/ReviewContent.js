import React from 'react'
import ReviewNoti from './ReviewNoti'
import ReviewDetail from './ReviewDetail'

const ReviewContent = () => {
  return (
    <div class="review_content">
        <div class="review_header">
            <span>총 332개</span>
            <div class="order">
                <button>추천순</button>
                <button>최근등록순</button>
            </div>
        </div>
        <div class="review_noti">
            <ReviewNoti />
            <ReviewNoti />
        </div>
            <ReviewDetail />
            <ReviewDetail />
            <ReviewDetail />
            <ReviewDetail />
            <ReviewDetail />

    </div>
  )
}

export default ReviewContent