import React from 'react'
import "./Button.css"
const Button = () => {
  return (
   <div className="btn-container">
    <div className="btn-group">
      <button className="btn">C</button>
      <button className="btn">(</button>
      <button className="btn">)</button>
      <button className="btn">Del</button>
    </div>
    <div className="btn-group">
      <button className="btn">7</button>
      <button className="btn">8</button>
      <button className="btn">9</button>
      <button className="btn">+</button>
    </div>
    <div className="btn-group">
      <button className="btn">6</button>
      <button className="btn">5</button>
      <button className="btn">4</button>
      <button className="btn">-</button>
    </div>
    <div className="btn-group">
      <button className="btn">3</button>
      <button className="btn">2</button>
      <button className="btn">1</button>
      <button className="btn">x</button>
    </div>
    <div className="btn-group">
      <button className="btn">.</button>
      <button className="btn">00</button>
      <button className="btn">0</button>
      <button className="btn">/</button>
    </div>
    <div className="btn-group">
      <button className="btn btn-long">%</button>

      <button className="btn btn-long">=</button>
    </div>
   </div>
  )
}

export default Button
