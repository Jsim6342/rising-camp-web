import React from 'react'
import { useState } from "react";

const ProductSummary = (props) => {

const [count, setCount] = useState(1);


let totalPrice = () => {
    let price = count * parseInt((props.price).replace(',',''));
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const countPlus = () => {
    setCount(count + 1);
}

const countMinus = () => {
    if(count === 1) return;
    setCount(count - 1);
}

  return (
    <section class="product_summary">
                <p class="delivery">샛별배송</p>
                <div class="title">
                    <h1>{props.title}</h1>
                    <button> </button>
                </div>
                <h2>{props.subTitle}</h2>
                <div class="price">
                    <span>{props.price}</span><span>원</span>
                </div>
                <p class="login-ment">로그인 후, 적립 혜택이 제공됩니다.</p>
                <div class="info">
                    <dl>
                        <dt>배송</dt>
                        <dd>
                            <p>
                                샛별배송 <br/>
                                23시 전 주문 시 내일 아침 7시 전 도착 <br/>
                                (대구·부산·울산 샛별배송 운영시간 별도 확인
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>판매자</dt>
                        <dd>
                            <p>{props.seller}</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>포장타입</dt>
                        <dd>
                            <p> 
                                {props.packing} <br/>
                                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>판매단위</dt>
                        <dd>
                            <p>
                                {props.unit}
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>용량/중량</dt>
                        <dd>
                            <p>
                                {props.capacity}
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>원산지</dt>
                        <dd>
                            <p>
                                {props.originArea}
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>안내사항</dt>
                        <dd>
                            <p>
                                {props.guidance}
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>상품선택</dt>
                        <dd>
                            <div class="product_select">
                                <p>{props.title}</p>

                                <div class="count_price">
                                    <div class="count_button">
                                        <button class="minus" onClick={countMinus}></button>
                                        <div class="count">{count}</div>
                                        <button class="plus" onClick={countPlus}></button>
                                    </div>
                                    <span>{totalPrice()}</span>
                                </div>
                                
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="total_price">
                    <div>
                        <span>총 상품금액:</span>
                        <span>{totalPrice()}</span>
                        <span>원</span>
                    </div>
                    <div>
                        <span>적립</span>
                        <span>로그인 후, 적립 혜택 제공</span>
                    </div>
                </div>
                <div class="payment">
                    <button></button>
                    <button></button>
                    <button>장바구니 담기</button>
                </div>
            </section>
  )
}

export default ProductSummary