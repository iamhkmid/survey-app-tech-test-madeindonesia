import styled from "styled-components";

type TRadioGroupStyled = {
  $error: boolean
  $disabled: boolean
}

export const RadioGroupStyled = styled.div<TRadioGroupStyled>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .RadioGroup-radioWrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
