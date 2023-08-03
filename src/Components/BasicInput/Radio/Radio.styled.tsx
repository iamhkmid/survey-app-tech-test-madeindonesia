import styled, { css } from "styled-components";

type TRadioStyled = {
  $disabled?: boolean;
}

export const RadioStyled = styled.label<TRadioStyled>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  
  .Radio-radio {
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    padding: 4px;
    box-sizing: border-box;
    border: 1px solid #295499;
    @media screen and (min-width: 630px){
      width: 24px;
      height: 24px;
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: transparent;
      transition: 0.3s all ease;
    }
    transition: 0.3s all ease;
  }
  .Radio-input {
    display: none;
    &:checked {
      ~ .Radio-radio {
        border: 1px solid #295499;
        &::before {
          background:  #295499;
        }
      }
    }
  }
  .Radio-label {
    color: #295499;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    @media screen and (min-width: 630px){
      font-size: 16px;
    }
    transition: .3s all ease;
  }
  ${({ $disabled }) => $disabled && css`
    cursor: not-allowed;
    .Radio-input {
      :checked {
        ~ .Radio-radio {
          border: 1px solid #adb9cf;
          ::before {
            background:  #c9d2e0;
          }
        }
      }
    }
    .Radio-label {
      color: #295499;
    }
  `}
`;
