import React from 'react'

const Footer = () => {
  return (
        <footer>
        <div className="footer-left">
            <h2>고객행복센터</h2>
            <strong>
                1644-1107
                <span>월~토요일 오전 7시 - 오후 6시</span>
            </strong>
            <div className="contact-time">
                
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
            <div className="contact-email">
                비회원 문의 :
                <a href="#">help@kurlycorp.com</a>
                <br/>
                비회원 대량주문 문의 :
                <a href="#">kurlygift@kurlycorp.com</a>
            </div>

        </div>

        <div className="footer-right">
            <ul className="introduce">
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

            <ul className="sns">
                <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt=""/></a></li>
                <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt=""/></a></li>
                <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt=""/></a></li>
                <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt=""/></a></li>
                <li><a href="#"><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt=""/></a></li>
            </ul>
        </div>
        </footer>
  )
}

export default Footer