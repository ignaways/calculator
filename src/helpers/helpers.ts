import React from "react";
import { Input } from "../@types/calculator";

export const resultHandler = ({ num1, num2, operator1 }: Input) => {
  let result;
  switch (operator1) {
    case "+":
      result = num1 + (num2 ?? num1);
      break;
    case "-":
      result = num1 - (num2 ?? num1);
      break;
    case "x":
      result = num1 * (num2 ?? num1);
      break;
    case "÷":
      result = num1 / (num2 ?? num1);
      break;
    case "xⁿ":
      result = Math.pow(num1, (num2 ?? num1))
      break;
    case "x²":
      result = Math.pow(num1, 2);
      break;
    case "²√x":
      result = Math.sqrt(num1)
      break;
    // case "+":
    //   result = num1 + num2;
    //   break;
    default:
      break;
  }

  return Number(result);
};

export const deleteHandler = (str : string) => {
  let arr = str.split("")
  arr.pop()
  return Number(arr.join(""))
}
