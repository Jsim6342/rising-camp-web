import React from 'react'

const ProductNote = (props) => {
  return (
    <article id="note">
        <h3>
            <span>Kurly’s Note</span>
        </h3>
        <div class="context">
            <p class="words">
                <strong>기능 정보</strong>
                {
                  props.notes.map((note, index) => (
                    <React.Fragment key={index}>
                      <b>・</b>
                      {note}
                      <br />
                    </React.Fragment>
                  ))
                }
            </p>
        </div>
        <img src={props.noteImg} alt="product_function"/>
    </article>
  )
}

export default ProductNote