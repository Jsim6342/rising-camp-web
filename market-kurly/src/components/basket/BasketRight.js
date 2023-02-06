import React from 'react'

const BasketRight = () => {
  return (
    <div class="right">
            <div class="basket_right_top">
                <h3>배송지</h3>
                <div>
                    <p>
                        <em>배송지를 등록</em>하고
                        <br/>
                        구매 가능한 상품을 확인하세요!  
                    </p>
                    <button>
                        <span>
                            <img src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg" alt=""/>
                            주소 검색
                        </span>
                    </button>
                </div>
            </div>
            <div class="basket_right_middle">
                
                <div>
                    <span>상품금액</span>
                    <span><span>0</span>원</span>
                </div>
                <div>
                    <span>상품할인금액</span>
                    <span><span>0</span>원</span>
                </div>
                <div>
                    <span>배송비</span>
                    <span><span>0</span>원</span>
                </div>
                <div>
                    <span>결제예정금액</span>
                    <span><span>0</span>원</span>
                </div>
            </div>
            <div class="basket_right_bottom">
                <button>
                    <span>상품을 선택해주세요</span>
                </button>
                <ul>
                    <li>[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
                    <li>[마이컬리 {'>'} 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
                </ul>
            </div>
    </div>
  )
}

export default BasketRight