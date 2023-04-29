
export interface Input {
  num1: number;
  num2: number | null | undefined;
  operator1: string | null;
  operator2: string | null;
  type: string | null;
  result: number | null;
}

export type CalcContextType = {
    input: Input;
    setInput: (input: Input) => void;
}