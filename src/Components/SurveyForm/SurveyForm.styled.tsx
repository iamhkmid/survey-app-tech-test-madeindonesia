import { motion } from "framer-motion";
import { css, styled } from "styled-components";

export const SurveyFormStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  > div.bar-level-wrapper {
    display: flex;
    gap: 5px;
  }
  > div.modal {
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 100%;
    border-radius: 15px;
    padding: 30px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    @media screen and (min-width: 630px){
      padding: 40px;
      width: 550px;
    }
    > div.content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 100%;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          text-align: center;
          font-size: 30px;
          font-weight: 800;
          margin: 0;
          color: #89b0ee;
          @media screen and (min-width: 630px){
            font-size: 35px;
          }
        }
      }
      > div.form {
        display: flex;
        margin-top: 10px;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        justify-content: space-between;
        > div.question-wrapper{
          display: flex;
          flex-direction: column;
          gap: 30px;
          > p.question {
            font-size: 17px;
            font-weight: 700;
            margin: 0;
            color: #295499;
            @media screen and (min-width: 630px){
              font-size: 20px;
            }
          }
          .answers-wrapper {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .RadioGroup-radioWrapper{
              display: flex;
              flex-direction: column;
              gap: 15px;
            }
          }
        }
        > div.button {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 20px;
          .Button-root {
            width: 100%;
          }
        }
      }
        flex-direction: column;
    }
 }
`

type TBarLevel = {
  $active: boolean
}

export const BarLevel = styled.div<TBarLevel>`
  height: 5px;
  border-radius: 5px;
  width: 100%;
  background-color: #89b0ee;
  ${({ $active }) => $active && css`
    background-color: #125cd3;
  `}
  transition: 0.3s background-color ease-in-out;
`

type TCustomCountdown = {
  $isRunningOut: boolean
}

export const CustomCountdown = styled.div<TCustomCountdown>`
  display: flex;
  .completed{
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    color: #295499;
    @media screen and (min-width: 630px){
      font-size: 16px;
    }
  }
  .running{
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    color: #295499;
    ${({ $isRunningOut }) => $isRunningOut && css`
      color: #ff3838;
    `}
    @media screen and (min-width: 630px){
      font-size: 16px;
    }
  }
  transition: color 0.3s ease-in-out;
`