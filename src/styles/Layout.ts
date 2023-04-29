import styled from "styled-components";
import { Button, Input } from "antd";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

export const ContainerContent = styled.div`
  width: 20em;
  background-color: #edf3f7;
  padding: 0.25em;
  border-radius: 5px;
  filter: drop-shadow(0 0 0.1rem black);
`;
export const StyledButton = styled(Button)`
  background-color: white;
  width: 100%;
`;
export const StyledInput = styled(Input)`
  font-size: 1.5rem;
  padding: .5em;
  font-weight: 400;
  margin: .2em 0;
  text-align: end;

`;
