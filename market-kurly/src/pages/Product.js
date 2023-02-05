import React from 'react'
import '../css/product.css'

const Product = () => {
  return (
    <div id="main">

        <header>
            <div class="top">
                <ul>
                    <li><a href="#">회원가입</a></li>
                    <li><a href="#">로그인</a></li>
                    <li><a href="#">고객센터</a></li>
                </ul>
            </div>

            <div class="middle">
                <nav>
                    <ul class="logo">
                        <li><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA4MiA0MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGg4MnY0MkgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik02Mi41Ljk2NWMxLjAyNi0uNTU3IDIuNDY2LS43MTggMy4zNTYuMTA3Ljg5LjgyNS42NzYgMi4wNDggMCAzLjk3MyAwIDAtMS41MDUgNC4wNjYtMy4wNTUgOC4yNjJsLS4zOTggMS4wOGMtMS40MTQgMy44My0yLjc2MiA3LjQ4Ny0yLjkyNyA3Ljk2My0xLjQ5OCA0LjI0NSAxLjk2NyA0LjEyMiA0LjAyNC0uMTUyIDEuMTU5LTIuMzk0IDIuNjQ0LTYuMzU3IDIuNjQ0LTYuMzU3LjUyNC0xLjU2My42ODItMi41MDQuMzU5LTIuODI4LS4xMDctLjExMy4wNDUtLjI1Mi4xOC0uMzIzIDIuMjY5LTEuMTQ5IDQuNjMtLjA3MiAzLjMzNiAzLjMxbC0uMDU0LjEzOGMtLjM4Ny45NzgtMi42OCA2LjczMy0yLjY4IDYuNzMzLS42NzYgMS42Ni0uNTk1IDMuMjM2LjQxOCAzLjIzNi42ODYtLjAwNCAxLjQ2LS4zODUgMi4zMDQtMS4wODggMS44MTgtMS41MDQgMy4yMjItNC4zMTIgMy43MjctNS40NTQuMjMtLjUwOCAxLjA4Ny0yLjQyIDEuNzY2LTQuMzYxLjIzNi0uNjY1LjM2OS0xLjM2LjM5NS0yLjA2NWEuNDQzLjQ0MyAwIDAgMSAuMTk0LS40NTkgMy41NzggMy41NzggMCAwIDEgMS42Ny0uNDIgMS44MDUgMS44MDUgMCAwIDEgMS40NjUuNzA1Yy40NDMuNTk4LjU2NiAxLjU3OS4xMDMgMi44MDgtLjEyLjMyLTMuNzc1IDkuOTU4LTMuNzc1IDkuOTU4di4wMjZjMi4wNDEtMS4yMjMgMy44Ny0xLjMxMyA0Ljk1My0uODU0bC0uMDAzLS4wMTNjMS40OTUuNjQ3IDEuOTkgMi40NC45MzggMy41NTktLjEwMy4xMS0uMzYyLjA4NC0uMzYyLS4wOS0uMDk0LTEuMjUzLTIuNTE3LTMuNDk1LTYuMTA5LTEuMDc1bC0uMTQ1LjM4NS0xLjA2OCAyLjgwOGMtMi42MiA3LjAxOC01LjQwMyAxMi4xMzYtOS40MTUgMTEtMi42ODgtLjc2LTIuMzc3LTQuNjA3LjUxNS03Ljc5YTU0LjkgNTQuOSAwIDAgMSA2LjQ5LTUuODk4Yy4wNjgtLjE4OC4xMy0uMzUuMTg4LS41MTEuMjc4LS43OC40OTEtMS40MzQuNzkyLTIuMjY1bC4xNTktLjUxOGMtLjE3OC4yLS40OTguNTczLS43MTIuODEyLS43MTIuOC0yLjQ5NCAyLjc1Ny01LjMyOSAyLjIwN2wtLjIzNC0uMDUyYy0yLjA1LS41MDgtMi42MDgtMS45ODYtMi42NTUtMy4yNzctMi4xNDIgMi42NTYtNC4zNTEgMy40MjYtNS44MDcgMy4zOS0xLjk0OC0uMDQ4LTMuMzc4LTEuNTE0LTIuNDI3LTQuMjkgMS4wNTgtMy4xMDYgNS41LTE1LjMzMiA2Ljc5NS0xOSAuNDg1LTEuNTguNjY2LTIuNTguMTg0LTIuOTc0LS4xMjMtLjEwMy4wNTItLjI2NS4yLS4zNDZ6bTguMzY0IDI4Ljc3OGMtMS4xMDMuODgtNS41MjYgNC41My02Ljc1MiA3LjQ0MS0uNTA1IDEuMTk3LS4zNzYgMi4xNDkuNDg4IDIuMjMzIDEuOTYuMTk0IDQuMDEyLTMuODE4IDYuMjI4LTkuNTEyek0xNi4wMjggNS4zNTJjLS4wODcuMzMyLTEuMzE5IDMuODYtMi43MDEgNy43NDlsLS4yMDkuNTg2LS4yMS41ODktLjIxNS42MDRjNC42OTEtMS4xMjMgMTMuMDY0LTYuNTcgMTQuMDM1LTEwLjA4NS4xMi0uMTYxLjI5LS4yMi41NjYtLjAzNS40OTUuMzMuNjg2IDEuMTU1LjQ5NSAxLjkxOC0uNzY0IDMuMDM4LTYuNDE2IDcuMzQxLTExLjM3OSA5LjU1NC42MTIgMS42MzcgMi42ODIgNi4yNjcgNC4yMDYgOS4xMTEgMS42NjMgMy4xMTkgMy40MiA0LjU3NSA2LjE0NyA0LjczNyAxLjQ2LjA4NSAzLjAxNC0uNDQ3IDMuODkzLTEuMjJsLjE0OC0uMTQtLjAxMy4wM2MuMTk0LS4yMDQuNTExLjA3Ny4zNjYuMzIzYTYuNSA2LjUgMCAwIDEtNC45OTIgMi44NjdjLTYuMzQ1LjQyNy04Ljc3NC0zLjg3LTEzLjMwNC0xNC40OTQtLjM2Ni4xMjYtLjgwOS4yODgtMS4yNTUuNDUtLjA3NS4xODctMi4wNyA1LjY0Mi0yLjEzIDUuODIzLS45NDQgMi44Ny0xLjAwNSA0LjQ0Mi0uMzU4IDQuODk1LjE0NS4wOS4wNzQuMzMzLS4xNzguNDE0LTIuNTI3Ljc5Ni00Ljg1My0uNjk2LTMuNTU5LTQuNDQyIDEuMTYxLTMuMzE2IDUuNjktMTYuMTggNi45MTQtMTkuNjI2LjQyNy0xLjI5NC4xOTctMi4xMjUtLjQ5Mi0yLjMwNkM4LjUwNiAxLjc4Ljg3NyA4Ljc0OSAxLjk3MSAxNS4xODRjLjE5IDEuMTIuOTggMS43NDcgMS4zNzggMS42NjNhLjEzMy4xMzMgMCAwIDEgLjE1Ni4xNTkgMS41MDggMS41MDggMCAwIDEtMS44NDUgMS4wMzJDLjQ5IDE3Ljc4Mi4xMDcgMTYuNTI3LjA0MyAxNS44OC0uNjAxIDkuMjIgNi4xNDggMS4yMyAxMi4zODkuNThjMi4zNzgtLjI1IDQuNjEuOTYgMy42NCA0Ljc3MnptMjQuMDQgOS45MTMtLjA2LjIwNy0yLjgzIDguMTZjLS4zMDQuODUtLjEgMS43MzcuNTAxIDEuOTAyIDEuNzU3LjQ4MiA0LjAyOC0yLjE0NSA1LjEzMS00LjczM2E2Ny43OTQgNjcuNzk0IDAgMCAwIDEuNDc2LTMuODE1Yy41ODItMS42NDMgMS4xMDYtMy4xODMuNzgzLTMuOTA4LS4wNzUtLjE2OC4wNDUtLjI1Ni4yMjMtLjM1LjUwNS0uMjU1IDIuMjI2LS44MjUgMy4xNDEuMDY4LjY5NS42NzQuNjA5IDEuNzcxLS4wMyAzLjQzN2wtLjA5Ni4yNDIuMjItLjI3M2MyLjcwMy0zLjMgNC43OTItNC4yOTIgNi41NjMtMy41OTdsLjE0Ny4wNjJjMi4zODEgMS4wNzQgMS4xNDYgNS4yMTUtMi4xMTYgNS40OC0uMi4wMTctLjM1Ni0uMTI2LS4xNTgtLjQwNy4zOTUtLjYwNS4zNTYtMS45MDktLjc5Ni0yLjAyMi0xLjE1Mi0uMTEzLTIuODMgMS4yMDctNC4wMzggMi44NDQtMS4wODQgMS40NS0yLjIgMy45MTEtMy4zMjIgNy4yNzMtLjI3Mi44MTgtLjE0MyAxLjAxMi0uMTEgMS4wNjdhLjEuMSAwIDAgMSAwIC4wOTRjLS4xNDMuMjcyLS45NjUuNTk2LTEuNzYuNTk2LTEuNjI1LS4wMDctMi4yOTEtLjk0NS0xLjk2Ny0yLjQzNy0xLjg0OCAxLjc2NC0zLjcxMSAyLjYxNC01LjM1NSAyLjQ2NmEyLjUyNCAyLjUyNCAwIDAgMS0yLjIzNi0zLjEwM2MtMS40MjYgMS44MDktMy41NDIgMy4yNjgtNS42OTcgMy4wNjctMi4xNTUtLjItMy41LTEuNjY2LTIuODAyLTQuNzg4LjU5LTIuNTk4IDEuNTkyLTUuMjkgMi4yMDctNy4wMjcuNTE0LTEuNDU2LjYxOC0yLjQwNy4yOTQtMi43NS0uMTAzLS4xMTQuMDU1LS4yNS4xOTQtLjMyNCAxLjY5LS44ODYgNC4zOTQtLjMxNCAzLjYzIDIuMDktLjgwMiAyLjUyNy0yLjI1NSA2LjQ5LTIuNTUgNy40LS43MzcgMi4yODctLjI5IDMuNTIzLjc1NSAzLjU4IDEuMDQ1LjA2IDIuNDMtLjk2IDMuNDItMi41MDMgMS43Ni0yLjUyNCAyLjU4MS01LjY4NSAzLjM3Ny03Ljg4Mi4yMDQtLjU2LjUyNy0xLjg2Ni4xODUtMi4zNTItLjA5MS0uMTIzLjA2Ny0uMjU4LjI3NS0uMzcyIDEuNTM3LS44NDkgNC4yODUtLjY0IDMuNDAyIDIuNjA4eiIgZmlsbD0iIzVGMDA4MCIvPgogICAgPC9nPgo8L3N2Zz4K" alt="로고"/></li>
                        <li>마켓컬리</li>
                    </ul>

                    <div class="search">
                        <input type="text" placeholder="검색어를 입력해주세요"/>
                        <button></button>
                    </div>

                    <ul class="icon">
                        <li><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt=""/></a></li>
                        <li><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC45MjcgOC44OTNhNi40NiA2LjQ2IDAgMCAwLTkuMTM5IDBsLTEuODI5IDEuODI4LTEuODI3LTEuODI4YTYuNDYyIDYuNDYyIDAgMSAwLTkuMTQgOS4xMzhMOC44MiAxOS44Nmw4LjQzMiA4LjQzNGExIDEgMCAwIDAgMS40MTQgMGw4LjQzMy04LjQzNGgwbDEuODI4LTEuODI4YTYuNDYgNi40NiAwIDAgMCAwLTkuMTM4eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==" alt=""/></a></li>
                        <li><a href="#"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt=""/></a></li>
                    </ul>
                </nav>
            </div>

            <div class="bottom">
                <div class="category">
                    <span></span>
                    <span>카테고리</span>
                </div>

                <ul class="gnb">
                    <li>신상품</li>
                    <li>베스트</li>
                    <li>알뜰쇼핑</li>
                    <li>특가/혜택</li>
                </ul>

                <div class="delivery-info">
                    <span>샛별・택배</span> 배송안내
                </div>
            </div>
        </header>


        <main class="product_wrap">
            <div class="product_img">
                <img src="https://product-image.kurly.com/product/image/0a26fb8a-3bdb-4163-9d05-a9e1e80203bf.jpg" alt="product"/>
            </div>
            <section class="product_summary">
                <p class="delivery">샛별배송</p>
                <div class="title">
                    <h1>[닥터유] 면역수 (530mL X 20개)</h1>
                    <button> </button>
                </div>
                <h2>간편하게 챙기는 아연</h2>
                <div class="price">
                    <span>10,800</span><span>원</span>
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
                            <p>컬리</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>포장타입</dt>
                        <dd>
                            <p> 
                                상온 (종이포장) <br/>
                                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>포장타입</dt>
                        <dd>
                            <p>
                                상온 (종이포장) <br/>
                                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>판매단위</dt>
                        <dd>
                            <p>
                                1묶음
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>용량/중량</dt>
                        <dd>
                            <p>
                                530mL X 20개입
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>원산지</dt>
                        <dd>
                            <p>
                                제품설명/상세정보 참고
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>안내사항</dt>
                        <dd>
                            <p>
                                생수/탄산수의 1일 구매 최대 용량은 36리터 혹은 3개까지입니다. <br/>
                                용량 혹은 수량 초과 상품은 배송되지 않을 수 있으며, 배송 되지 않은 상품은 익일(주말/공휴일제외) 환불 해 드리겠습니다. <br/>
                                본 정책은 배송 매니저님의 안전과 건강을 위해 시행하게 됐습니다. 고객님의 양해를 부탁 드립니다.
                            </p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>상품선택</dt>
                        <dd>
                            <div class="product_select">
                                <p>[닥터유] 면역수 (530mL X 20개)</p>

                                <div class="count_price">
                                    <div class="count_button">
                                        <button class="minus"></button>
                                        <div class="count">1</div>
                                        <button class="plus"></button>
                                    </div>
                                    <span>10,800원</span>
                                </div>
                                
                            </div>
                        </dd>
                    </dl>
                </div>
                <div class="total_price">
                    <div>
                        <span>총 상품금액:</span>
                        <span>10,800</span>
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
        </main>

        <nav class="lnb">
            <ul>
                <li><a href="#">상품설명</a></li>
                <li><a href="#">상세정보</a></li>
                <li><a href="#">후기</a></li>
                <li><a href="#">문의</a></li>
            </ul>
        </nav>

        <section class="product_detail">
            <article class="intro">
                
                <div class="picture">
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20220801/gv40000394934_1.jpg" alt="product"/>
                </div>
                <div class="context">
                    <h3>
                        <small>간편하게 챙기는 아연</small>
                        [닥터유] 면역수
                    </h3>
                    <p>대한민국 대표 건강 브랜드 닥터유가 만든 면역수를 소개할게요. 닥터유 면역수는 물처럼 마시는 건강기능식품인데요. 정상적인 면역기능에 필요한 아연 성분을 5.0mg 함유하고 있답니다. 무색무취로 물 마시듯 간편하게 아연을 채울 수 있지요. 성장기 소중한 우리 아이부터, 정상적인 면역기능이 필요한 부모님까지 남녀노소 모두 챙겨보세요.</p>
                </div>
            </article>
            
            <article class="point">
                <h3>
                    <span>Kurly's Check Point</span>
                </h3>
                <img src="https://img-cf.kurly.com/shop/data/goodsview/20220517/gv20000316271_1.jpg" alt=""/>
            </article>

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

            <article class="note">
                <h3>
                    <span>Kurly’s Note</span>
                </h3>
                <div class="context">
                    <p class="words">
                        <strong>기능 정보</strong>
                        <b>・</b>
                        [아연] 정상적인 면역기능에 필요, 정상적인 세포분열에 필요
                    </p>
                </div>
                <img src="https://img-cf.kurly.com/shop/data/goodsview/20220729/gv40000394645_1.jpg" alt="product_function"/>
            </article>
        </section>

        <section class="review">
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

            <div class="review_content">
                <div class="review_header">
                    <span>총 332개</span>
                    <div class="order">
                        <button>추천순</button>
                        <button>최근등록순</button>
                    </div>
                </div>
                <div class="review_noti">
                    <div class="noti">
                        <span>공지</span>
                        <a href="#">금주의 베스트 후기 안내</a>
                    </div>
                    <div class="noti">
                        <span>공지</span>
                        <a href="#">상품 후기 적립금 정책 안내</a>
                    </div>
                </div>
                <div class="review_detail">
                    <div class="user_info">
                        <span>퍼플</span>
                        <span>권**</span>
                    </div>
                    <div class="user_review">
                        <h3>[닥터유] 면역수 (530mL X 20개)</h3>
                        <p>방학동안 먹어보려고요.
                            아이가 뚜껑 직접 열수 있어 연습 시키기도 좋네요 ㅎㅎ
                            
                            (아귀 힘 약한 예비 초5  여아 입니다.)</p>
                        <div class="user_review_footer">
                            <span>2023.01.30</span>
                            <button>
                                <span></span>
                                <span>도움돼요</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="review_detail">
                    <div class="user_info">
                        <span>퍼플</span>
                        <span>권**</span>
                    </div>
                    <div class="user_review">
                        <h3>[닥터유] 면역수 (530mL X 20개)</h3>
                        <p>방학동안 먹어보려고요.
                            아이가 뚜껑 직접 열수 있어 연습 시키기도 좋네요 ㅎㅎ
                            
                            (아귀 힘 약한 예비 초5  여아 입니다.)</p>
                        <div class="user_review_img">
                            <a href="#">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=640,height=640,quality=90/shop/data/review/20230128/c2f61862-cf62-4635-9233-5c4ba8cb5d9d.jpeg" alt="review_img"/>
                            </a>
                        </div>
                        <div class="user_review_footer">
                            <span>2023.01.30</span>
                            <button>
                                <span></span>
                                <span>도움돼요</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="review_detail">
                    <div class="user_info">
                        <span>퍼플</span>
                        <span>권**</span>
                    </div>
                    <div class="user_review">
                        <h3>[닥터유] 면역수 (530mL X 20개)</h3>
                        <p>방학동안 먹어보려고요.
                            아이가 뚜껑 직접 열수 있어 연습 시키기도 좋네요 ㅎㅎ
                            
                            (아귀 힘 약한 예비 초5  여아 입니다.)</p>
                        <div class="user_review_img">
                            <a href="#">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=640,height=640,quality=90/shop/data/review/20230128/c2f61862-cf62-4635-9233-5c4ba8cb5d9d.jpeg" alt="review_img"/>
                            </a>
                        </div>
                        <div class="user_review_footer">
                            <span>2023.01.30</span>
                            <button>
                                <span></span>
                                <span>도움돼요</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="review_detail">
                    <div class="user_info">
                        <span>퍼플</span>
                        <span>권**</span>
                    </div>
                    <div class="user_review">
                        <h3>[닥터유] 면역수 (530mL X 20개)</h3>
                        <p>방학동안 먹어보려고요.
                            아이가 뚜껑 직접 열수 있어 연습 시키기도 좋네요 ㅎㅎ
                            
                            (아귀 힘 약한 예비 초5  여아 입니다.)</p>
                        <div class="user_review_footer">
                            <span>2023.01.30</span>
                            <button>
                                <span></span>
                                <span>도움돼요</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="review_detail">
                    <div class="user_info">
                        <span>퍼플</span>
                        <span>권**</span>
                    </div>
                    <div class="user_review">
                        <h3>[닥터유] 면역수 (530mL X 20개)</h3>
                        <p>방학동안 먹어보려고요.
                            아이가 뚜껑 직접 열수 있어 연습 시키기도 좋네요 ㅎㅎ
                            
                            (아귀 힘 약한 예비 초5  여아 입니다.)</p>
                        <div class="user_review_img">
                            <a href="#">
                                <img src="https://img-cf.kurly.com/cdn-cgi/image/width=640,height=640,quality=90/shop/data/review/20230128/c2f61862-cf62-4635-9233-5c4ba8cb5d9d.jpeg" alt="review_img"/>
                            </a>
                        </div>
                        <div class="user_review_footer">
                            <span>2023.01.30</span>
                            <button>
                                <span></span>
                                <span>도움돼요</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                
            </div>

            <div class="paging">
                <button></button>
                <button></button>
            </div>

        </section>


        <footer>
            <div class="footer-left">
                <h2>고객행복센터</h2>
                <strong>
                    1644-1107
                    <span>월~토요일 오전 7시 - 오후 6시</span>
                </strong>
                <div class="contact-time">
                    
                    <div>
                        <button>카카오톡 문의</button>
                        <div>
                            월~토요일 | 오전 7시 ~ 오후 6시
                            <br/>
                            일/공휴일 | 오전 7시 ~ 오후 1시
                        </div>
                    </div>
                    <div>
                        <button>카카오톡 문의</button>
                        <div>
                            월~토요일 | 오전 7시 ~ 오후 6시
                            <br/>
                            일/공휴일 | 오전 7시 ~ 오후 1시
                        </div>
                    </div>
                    <div>
                        <button>카카오톡 문의</button>
                        <div>
                            월~토요일 | 오전 7시 ~ 오후 6시
                            <br/>
                            일/공휴일 | 오전 7시 ~ 오후 1시
                        </div>
                    </div>
                </div>
                <div class="contact-email">
                    비회원 문의 :
                    <a href="#">help@kurlycorp.com</a>
                    <br/>
                    비회원 대량주문 문의 :
                    <a href="#">kurlygift@kurlycorp.com</a>
                </div>

            </div>

            <div class="footer-right">
                <ul class="introduce">
                    <li><a href="#">컬리소개</a></li>
                    <li><a href="#">컬리소개영상</a></li>
                    <li><a href="#">인재채용</a> </li>
                    <li><a href="#">이용약관</a> </li>
                    <li><a href="#">개인정보처리방침</a> </li>
                    <li><a href="#">이용안내</a></li>
                </ul>

                <div>
                    법인명(상호): 주식회사 컬리 | 사업자등록번호: 261-81-23567 <a href="#">사업자정보 확인</a> <br/>
                    통신판매업: 제 2018-서울강남-01646 호 | 개인정보보호책임자: 이원준 <br/>
                    주소: 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 태표이사: 김슬아 <br/>
                    입점문의: <a href="#">입점문의하기</a> | 제휴문의: <a href="#">business@kurlycorp.com</a> <br/>
                    채용문의: <a href="#">recruit@kurlycorp.com</a> <br/>
                    팩스: 070 - 7500 - 6098
                </div>

                <ul class="sns">
                    <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt=""/></a></li>
                    <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt=""/></a></li>
                    <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt=""/></a></li>
                    <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt=""/></a></li>
                    <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt=""/></a></li>
                </ul>
            </div>
        </footer>

    </div>
  )
}

export default Product