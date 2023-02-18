import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';


const BasketLeft = (props) => {

    // const [count, setCount] = useState(1);

    // let totalPrice = () => {
    //     let price = count * 10800;
    //     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }
    
    // const countPlus = () => {
    //     setCount(count + 1);
    // }
    
    // const countMinus = () => {
    //     if(count == 1) return;
    //     setCount(count - 1);
    // }

    

  return (
        <>
        
                <li>
                    <label>
                        <input type="checkbox" checked="true"/>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgc3Ryb2tlPSIjREREIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjY5LjAwMDAwMCwgLTEwOTAuMDAwMDAwKSB0cmFuc2xhdGUoMTAwLjAwMDAwMCwgOTM2LjAwMDAwMCkgdHJhbnNsYXRlKDU1My4wMDAwMDAsIDE0Mi4wMDAwMDApIHRyYW5zbGF0ZSgxNi4wMDAwMDAsIDEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik03IDEyLjY2N0wxMC4zODUgMTYgMTggOC41Ii8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="" class="product_select" onClick={props.changeCheckImg}/>
                    </label>
                    
                    <Link to="/product">
                        <img src={props.basket.image} alt=""/>
                    </Link>
                    <div class="product_name">
                        <p>{props.basket.title}</p>
                    </div>
                    <div class="count_button">
                        <button class="minus" onClick={props.countMinus}></button>
                        <div class="count">{props.counts}</div>
                        <button class="plus" onClick={props.countPlus}></button>
                    </div>
                    <div class="product_price">
                        <span>{props.totalPrice()+"원"}</span>
                    </div>
                    <button></button>
                    
                </li>
            
        </>
  )
}

export default BasketLeft