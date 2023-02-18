import React from 'react'

const ReviewDetail = (props) => {
  return (
    <div class="review_detail">
                <div class="user_info">
                    <span>{props.review.userClass}</span>
                    <span>{props.review.userName}</span>
                </div>
                <div class="user_review">
                    <h3>{props.review.productName}</h3>
                    <p>{props.review.content}</p>
                    <div class="user_review_img">
                        <a href="#">
                            <img src={props.review.image} alt="review_img"/>
                        </a>
                    </div>
                    <div class="user_review_footer">
                        <span>{props.review.date}</span>
                        <button>
                            <span></span>
                            <span>도움돼요</span>
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default ReviewDetail