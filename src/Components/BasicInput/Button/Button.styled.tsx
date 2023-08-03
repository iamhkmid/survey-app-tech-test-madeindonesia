import { styled } from "styled-components"

export const ButtonStyled = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 25px;
  border-radius: 20px;
  border: 0;
  outline: none;
  &.primary {
    background-color: #3b6bb9;
    color: #fff;
    &:hover {
      box-shadow: 0 0 0 3px #c0d9ff;
      background-color: #1a3a6d;
    }
  }
  &.secondary {
    background-color: transparent;
    color: #3b6bb9;
    border: 1px solid #3b6bb9;
    &:hover {
      box-shadow: 0 0 0 3px #e3eeff;
      background-color: #c0d9ff;
    }
  }
  &:disabled {
    background-color: #b3c1d8;
    pointer-events: none;
  }
  transition: 0.3s background-color ease-in-out, 0.3s color ease-in-out, 0.3s box-shadow ease-in-out;
`