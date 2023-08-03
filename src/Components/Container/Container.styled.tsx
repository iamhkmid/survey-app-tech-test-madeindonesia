import { styled } from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  background: rgb(113,190,255);
  align-items: center;
  justify-content: center;
  background: linear-gradient(328deg, rgba(113,190,255,1) 0%, rgba(255,150,150,1) 100%);
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  box-sizing: border-box;
  padding: 10px;
`

export const Owner = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-size: 10px;
  font-weight: 500;
  margin: 0;
  padding: 2px 5px;
  background-color: #2954998d;
  color: #ffffff;
  @media screen and (min-width: 630px){
    font-size: 11px;
  }
`