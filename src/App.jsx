import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [inputData, setInputData] = useState(0);
  const [outputData, setOutputData] = useState(0);
  const updateInputData = (newData) => {
    setOutputData(0);
    if (newData == "C") {
      setInputData(0);
      setOutputData(0);
    } else if (newData == "Del") {
     if(inputData !=0){
      inputData.length == 1
      ? setInputData(0)
      : setInputData(inputData.slice(0, inputData.length - 1));

     }
      setOutputData(0);
    } else if (newData == "=") {
      console.log(typeof inputData, inputData);
      setOutputData(eval(inputData));
      setInputData(0);
    } else {
      if (inputData == 0) {
        setInputData(newData);
      } else {
        setInputData(inputData + newData);
      }
    }
  };

  return (
    <div className="main-container">
      <div className="calculatorFrame">
        <Output data={outputData} />
        <Input data={inputData} />
        <Button updateInputData={updateInputData} />
      </div>
    </div>
  );
}

export default App;
