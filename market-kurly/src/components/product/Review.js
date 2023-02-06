import React from 'react'
import ReviewIntro from './ReviewIntro'
import ReviewContent from './ReviewContent'

const Review = () => {
  return (
    <section class="review">
        <ReviewIntro />

        <ReviewContent />

        <div class="paging">
            <button></button>
            <button></button>
        </div>
    </section>
  )
}

export default Review