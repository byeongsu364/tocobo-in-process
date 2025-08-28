import React from 'react'
import "../styles/sections/Hello.scss"

const Hello = () => {
  return (
    <section id="Hello" className="Hello">
      <div className="inner">
        {/* 왼쪽 이미지 */}
        <div className="img-wrap">
          <img src="/img/product_1.png" alt="대표 제품" />
        </div>

        {/* 오른쪽 텍스트 */}
        <div className="t-wrap">
          <p className="txt-2">Hello 💗 We are TOCOBO!</p>
          <h2 className="tit">
            Follow <br /> Your Intuition
          </h2>
          <p className="txt-1">
            토코보는 본질을 중시하며 직관을 바탕으로 한 제품을 선보입니다. <br />
            당신의 직감이 YES를 외친다면 고민 없이 토코보를 선택하세요. <br />
            넥스트 더마 코스메틱, 토코보
          </p>
          <a href="#" className="btn">MEET TOCOBO</a>
        </div>
      </div>
    </section>
  )
}

export default Hello
