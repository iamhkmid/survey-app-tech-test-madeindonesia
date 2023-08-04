import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  background: rgb(113,190,255);
  align-items: center;
  justify-content: center;
  background: linear-gradient(328deg, rgba(113,190,255,1) 0%, rgba(255,150,150,1) 100%);
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 30px 10px;
`

export const Mark = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: fixed;
  bottom: 10px;
  left: 10px;
  > div {
    padding: 4px 5px;
    background-color: #2954998d;
    box-sizing: border-box;
    > p {
      font-size: 10px;
      font-weight: 500;
      margin: 0;
      color: #ffffff;
      @media screen and (min-width: 630px){
        font-size: 12px;
      }
    }
  }
`