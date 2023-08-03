import { motion } from "framer-motion";
import { styled } from "styled-components";

export const InitialFormStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  width: 100%;
  border-radius: 15px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  @media screen and (min-width: 630px){
    padding: 40px;
    width: 500px;
  }
  > div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .title {
      text-align: center;
      font-size: 22px;
      font-weight: 800;
      margin: 0;
      color: #295499;
      @media screen and (min-width: 630px){
        font-size: 25px;
      }
    }
    .sub-title {
      text-align: center;
      font-size: 13px;
      font-weight: 500;
      margin: 0;
      color: #4875bd;
      @media screen and (min-width: 630px){
        font-size: 15px;
      }
    }
    > div.button {
      margin-top: 20px;
    }
  }
`