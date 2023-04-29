import React, { Fragment } from "react";
import { ContainerMain, ContainerContent } from "./styles/Layout";
import Calculator from "./components/Calculator";
import CalcProvider from "./context/calculatorContext";
const App = () => {
  return (
    <>
      <CalcProvider>
        <ContainerMain>
          <ContainerContent>
            <Calculator />
          </ContainerContent>
        </ContainerMain>
      </CalcProvider>
    </>
  );
};

export default App;
