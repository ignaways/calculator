import "../styles/styles.css";
import React, { useEffect, useRef, useContext } from "react";
import { Row, Col } from "antd";
import { StyledButton, StyledInput } from "../styles/Layout";
import type { InputRef } from "antd";
import { CalcContext } from "../context/calculatorContext";
import { CalcContextType } from "../@types/calculator";
import { COLLECTION } from "../helpers/constant";
import { resultHandler, deleteHandler } from "../helpers/helpers";

const Calculator = () => {
  const { input, setInput } = useContext(CalcContext) as CalcContextType;
  const { num1, num2, operator1, operator2, result } = input;

  const inputRef = useRef<InputRef>(null);

  const inputHandler = (e: any): void => {
    inputRef.current!.focus({
      cursor: "end",
    });
    let result;
    let reset = {
      num1: 0,
      num2: null,
      operator1: null,
      operator2: null,
      type: null,
      result: null,
    };
    let del;
    if (typeof e === "number") {
      if (input?.operator1) {
        num2 ? (
          setInput({ ...input, num2: Number("" + num2 + e) })
          ) : (
          setInput({ ...input, num2: Number(e) })
        )
      } else {
        setInput({ ...input, num1: Number("" + num1 + e) });
      }
    } else {
      if (e === "=") {
        result = resultHandler(input);
        setInput({ ...input, result, operator2: "=" });
      }
      else if (e === "←") {
        if (input?.operator1){
          del = deleteHandler(`${input.num2}`)
          setInput({ ...input, num2: del });
        }
        else { 
          del = deleteHandler(`${input.num1}`)
          setInput({ ...input, num1: del });
        }
      }
      else if(["+/-", "."].includes(operator1??"")){
        if(!operator1){
          if(e === "+/-") setInput({ ...input, num1: Number(`${-e}`) });
          else setInput({ ...input, num1: Number(`${e}`) })
        }
      }
      else if (e === "C") {
        setInput(reset);
      } else {
        setInput({ ...input, operator1: e });
        result = resultHandler(input);
      }
    }
  };

  useEffect(() => {
    if (["x²", "²√x"].includes(operator1??"")) {
      let result = resultHandler(input);
      return setInput({ ...input, result });
    }
  }, [operator1]);

  useEffect(() => {
    console.log("input", input);
  }, [input]);

  useEffect(() => {
    inputRef.current!.focus({
      cursor: "end",
    });
  }, []);

  const buttonCalc = COLLECTION.map((e, i) => {
    return (
      <Col span={6} key={i}>
        <StyledButton value={e} onClick={() => inputHandler(e)}>
          {e}
        </StyledButton>
      </Col>
    );
  });
  return (
    <>
      <Row justify={"end"}>
        <div style={operator1 ? { margin: ".5em" } : { margin: "1.18em" }}>
          {operator1
            ? result
              ? num2
                ? `${num1} ${operator1} ${num2} ${operator2}`
                : `${num1} ${operator1} ${num2}`
              : `${num1} ${operator1}`
            : ""}
        </div>
        <StyledInput
          ref={inputRef}
          value={result ?? num2 ?? num1}
        />
      </Row>
      <Row gutter={[4, 4]}>{buttonCalc}</Row>
    </>
  );
};

export default Calculator;
