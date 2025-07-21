import React, { useState } from "react";

export default function Calculator() {
  const [calcState, setCalcState] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  const btnValues = [
    "7",
    "8",
    "9",
    "DEL",
    "AC",
    "4",
    "5",
    "6",
    "X",
    "/",
    "1",
    "2",
    "3",
    "+",
    "-",
    "0",
    ".",
    "%",
    "=",
  ];
  const checkBtnValue = (value) => {
    switch (value) {
      case "AC":
        return resetClickHandler;
      case "%":
        return percentClickHandler;
      case "=":
        return equalsClickHandler;
      case "/":
      case "X":
      case "+":
      case "-":
        return signClickHandler;
      case "DEL":
        return deleteClickHandler;
      default:
        return numClickHandler;
    }
  };
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    const currentNumStr = String(calcState.num);

    // Limit input length to prevent overflow
    if (currentNumStr.length < 16) {
      let newNum;
      // Handle leading zero: If current is "0" and new input is "0", keep "0".
      // Or if current is "0" and new input is a digit (not "."), replace "0" with the new digit.
      if (currentNumStr === "0" && value === "0") {
        newNum = "0";
      } else if (currentNumStr === "0" && value !== ".") {
        newNum = value;
      }
      // Handle decimal point:
      // If the value is "." and currentNumStr already contains ".", don't add another.
      else if (value === "." && currentNumStr.includes(".")) {
        newNum = currentNumStr; // No change
      }
      // Otherwise, just append the new value to the current number string.
      else {
        newNum = currentNumStr + value;
      }

      // Update the state
      setCalcState((prevState) => ({
        ...prevState,
        num: newNum,
        // If no operator is set, clear the result. Otherwise, keep the existing result.
        res: !prevState.sign ? 0 : prevState.res,
      }));
    }
  };
  const resetClickHandler = () => {
    setCalcState({
      sign: "",
      num: 0,
      res: 0,
    });
  };
  const percentClickHandler = () => {
    // Convert num and res to numbers, defaulting to 0 if they are empty
    const currentNum = calcState.num ? Number(calcState.num) : 0;
    const currentRes = calcState.res ? Number(calcState.res) : 0;

    let newNum;
    let newRes = currentRes;
    if (calcState.sign) {
      // If an operator is set, calculate the percentage of the result
      newNum = (currentRes * currentNum) / 100;
    } else {
      // If no operator is set, calculate the percentage of the current number
      newNum = currentNum / 100;
    }
    // Update the state with the new number and result
    setCalcState((prev) => ({
      ...prev,
      num: newNum,
      res: newRes,
    }));
  };
  const equalsClickHandler = () => {
    if (calcState.sign && calcState.num) {
      // convert num and res to numbers
      const firstOperand = Number(calcState.res);
      const secondOperand = Number(calcState.num);
      const operator = calcState.sign;
      let result;
      switch (operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "X":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
        default:
      }
      setCalcState((prev) => ({
        ...prev,
        res: result,
        num: 0,
        sign: "",
      }));
    }
  };
  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    let newRes = calcState.res;
    if (!calcState.res && calcState.num) {
      newRes = calcState.num;
    }
    setCalcState((prev) => ({
      ...prev,
      res: newRes,
      num: 0,
      sign: value,
    }));
  };
  const deleteClickHandler = () => {
    const currentNumStr = String(calcState.num);
    // If num is not empty, remove the last character
    if (currentNumStr) {
      const newNumStr = currentNumStr.slice(0, -1);
      // If the new number string is empty, reset to 0
      const newNum = newNumStr === "" ? 0 : newNumStr;
      setCalcState((prev) => ({
        ...prev,
        num: newNum,
      }));
    }
  };
  return (
    <div className="calculator">
      <div className="my-3 w-full text-2xl dark:text-white dark:bg-whiteFade text-right py-4 pr-2 rounded-xl">
        {" "}
        {calcState.num ? calcState.num : calcState.res}
      </div>
      <div className="calculator-wrapper w-full grid grid-cols-5 gap-x-1 gap-y-3">
        {btnValues.map((value, i) => {
          return (
            <CalcBtn key={i} btnValues={value} onClick={checkBtnValue(value)} />
          );
        })}
      </div>
    </div>
  );
}

const CalcBtn = ({ btnValues, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        btnValues === "=" ? "col-span-2" : ""
      } flex items-center justify-center p-4 rounded-md dark:text-lightGrey dark:bg-whiteFade text-sm`}
    >
      {btnValues}
    </button>
  );
};
