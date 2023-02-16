import React from 'react'
import { useState } from 'react'

const BargainLeft = () => {

  const [timer, setTimer] = useState("00:00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(24 - date.getHours()).padStart(2, "0");
    const minutes = String(60 - date.getMinutes()).padStart(2, "0");
    const seconds = String(60 - date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`)
  }

  const startTimer = () => {
    setInterval(currentTimer, 1000)
  }

  startTimer()

  return (
    <div className="bargain-left">
        <h2>일일특가</h2>
        <h3>24시간 한정 특가</h3>
        <div className="time">
            <span>{timer}</span>
            {/* <span>{minute}</span>
            <span>{second}</span> */}
        </div>
        <p>망설이면 늦어요!</p>
    </div>
  )
}

export default BargainLeft