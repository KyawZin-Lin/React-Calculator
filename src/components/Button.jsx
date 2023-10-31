import React from "react";
import "./Button.css";
const Button = ({ updateInputData }) => {
  const handleButtonClick = (newData) => {
    console.log("u are here", newData);
    updateInputData(newData);
  };
  return (
    <div className="btn-container">
      <div className="btn-group">
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>C</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>(</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>)</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>Del</button>
      </div>
      <div className="btn-group">
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>7</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>8</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>9</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>+</button>
      </div>
      <div className="btn-group">
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>6</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>5</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>4</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>-</button>
      </div>
      <div className="btn-group">
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>3</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>2</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>1</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>x</button>
      </div>
      <div className="btn-group">
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>.</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>00</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>0</button>
        <button className="btn" onClick={(e)=>handleButtonClick(e.target.innerText)}>/</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-long"  onClick={(e)=>handleButtonClick(e.target.innerText)}>%</button>

        <button className="btn btn-long"  onClick={(e)=>handleButtonClick(e.target.innerText)}>=</button>
      </div>
    </div>
  );
};

export default Button;
