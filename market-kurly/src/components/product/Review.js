import React from 'react'
import ReviewIntro from './ReviewIntro'
import ReviewContent from './ReviewContent'
import data from '../../data.json'

const Review = () => {
  return (
    <section id="review">
        <ReviewIntro />

        <ReviewContent reviews={data.reviews}/>

        <div class="paging">
            <button></button>
            <button></button>
        </div>
    </section>
  )
}

export default Review