import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'
import "../../public/img/icon_top.svg"
import "../../public/img/icon_talk.svg"
const TopBtn = () => {
  const scrollTo = useSmoothScroll()
  return (
    <div className="fixed-btns">
      <button
        onClick={(e) => {
          e.preventDefault()
          scrollTo('Hero')
        }}
        className='top-btn'>
        <img src="/img/icon_top.svg" alt="Top으로 이동" />
      </button>
      <div className="talk-wrap">
        <a href="#" className="talk-btn">
          <svg className="talk-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 63">
            <path d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z" />
            <path d="M28 62.5V1.5L56 28.5C56 50.1 37.3333 60.1667 28 62.5Z" />
          </svg>
          <span className="talk-text">TCB</span>
        </a>
        <p className="talk-label">1:1 Talk</p>
      </div>
    </div>
  )
}

export default TopBtn