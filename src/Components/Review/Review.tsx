import React from "react"
import Button from "../BasicInput/Button"
import { ReviewStyled } from "./Review.styled"
import { SurveyContext } from "../../Contexts"
import { TSurveyContext } from "../../Contexts/SurveyProvider.types"
import { motion } from "framer-motion"
import { ReactComponent as XIcon } from "./assets/close-outline.svg"
import { ReactComponent as EllipseIcon } from "./assets/ellipse.svg"
import moment from "moment"

const Review = () => {
  const { survey, questions, dispatch } = React.useContext(SurveyContext) as TSurveyContext

  const findQuestion = React.useCallback((questionId: string, answerId: string) => {
    const question = questions.find((item) => item.id === questionId)
    const answer = question?.options.find((item) => item.id === answerId)
    return { question: question?.question, answer: answer?.answer }
  }, [])

  return (
    <ReviewStyled layoutId="page-state">
      <div className="content">
        <div className="header">
          <p className="title">Review your previous survey</p>
        </div>
        <div className="survey-date">
          <p>Start Date : <span>{moment(survey?.startDate!).format("DD MMMM YYYY | HH:ss")}</span></p>
          <p>End Date : <span>{moment(survey?.endDate!).format("DD MMMM YYYY | HH:ss")}</span></p>
        </div>
        <div className="answers-wrapper">
          <div className="scroll">
            {survey?.answers.map((answer, idx) => {
              const item = findQuestion(answer.questionId, answer.answerId!)
              return (
                <div className="item-wrapper" key={answer.questionId}>
                  <div className="question-number">{idx + 1}</div>
                  <div className="question">
                    <p>{item.question}</p>
                    {!!item.answer && <div className="answer"><EllipseIcon /><p>{item.answer}</p></div>}
                    {!item.answer && <div className="not-answered"><XIcon /> <p>Not answered</p></div>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="button-wrapper">
          <motion.div whileHover={{ scale: 1.1 }} className="button">
            <Button onClick={() => dispatch({ type: "CHANGE_PAGE", value: "completed" })}>Back</Button>
          </motion.div>
        </div>
      </div>
    </ReviewStyled>
  )
}

export default Review