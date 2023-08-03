import { motion } from "framer-motion";
import { styled } from "styled-components";

export const ReviewStyled = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 500px;
  width: 500px;
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
    gap: 20px;
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: 800;
      margin: 0;
      color: #295499;
    }
    .answers-wrapper {
      margin-top: 20px;
      max-height: 300px;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 10px;
      }
      
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      
      &::-webkit-scrollbar-thumb {
        background: #95b5e9;
        border-radius: 5px;
      }
      
      &::-webkit-scrollbar-thumb:hover {
        background: #295499;
      }
      .item-wrapper {
        display: flex;
        padding: 15px 5px;
        padding-right: 10px;
        border-bottom: 1px solid #d4dae4;
        .question-number {
          font-size: 13px;
          font-weight: 800;
          margin: 0;
          color: #295499;
          min-width: 25px;
        }
        .question {
          display: flex;
          flex-direction: column;
          gap: 5px;
          >p:nth-child(1) {
            font-size: 13px;
            font-weight: 500;
            margin: 0;
            color: #295499;
          }
          .answer {
            display: flex;
            align-items: center;
            gap: 5px;
            > svg {
              width: 10px;
              height: 10px;
              path {
                fill: #295499;
              }
            }
            p {
              font-size: 13px;
              font-weight: 800;
              margin: 0;
              color: #295499;
            }
          }
          .not-answered {
            display: flex;
            align-items: center;
            gap: 5px;
            > svg {
              width: 18px;
              height: 18px;
              path {
                stroke: #fd3e3e;
                stroke-width: 60px;
              }
            }
            p {
              font-size: 13px;
              font-weight: 800;
              margin: 0;
              color: #fd3e3e;
            }
          }
        }
      }
    }
    >div.button-wrapper {
      display: flex;
      gap: 20px;
    }
  }
`