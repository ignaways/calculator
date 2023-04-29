import React from "react";
import { Input, CalcContextType } from "../@types/calculator";

export const CalcContext = React.createContext<CalcContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

const CalcProvider: React.FC<Props> = ({ children }) => {
  const [input, setInput] = React.useState<Input>({
    num1: 0,
    num2: null,
    operator1: null,
    operator2: null,
    type: null,
    result: null
  });
  const value = React.useMemo(() => ({
      input,
      setInput,
    }),
    [input]
  );

  return (
    <CalcContext.Provider value={value}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider