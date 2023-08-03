import { motion } from "framer-motion";
import { styled } from "styled-components";

export const SurveyCompletedStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  width: 600px;
  border-radius: 15px;
  padding: 40px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  > div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 800;
      margin: 0;
      color: #295499;
    }
    .sub-title {
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      margin: 0;
      color: #4875bd;
    }
    >div.button-wrapper {
      display: flex;
      gap: 20px;
      > div.button {
        margin-top: 20px;
      }
    }
  }
`