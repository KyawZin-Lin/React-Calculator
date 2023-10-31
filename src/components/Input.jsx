import React from "react";
import "./Input.css";
const Input = ({ data }) => {
  return (
    <div className="input-text" value={data}>
      {data}
    </div>
  );
};

export default Input;
