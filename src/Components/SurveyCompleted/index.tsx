import React from "react"
import Button from "../BasicInput/Button"
import { SurveyCompletedStyled } from "./SurveyCompleted.styled"
import { SurveyContext } from "../../Contexts"
import { TSurveyContext } from "../../Contexts/SurveyProvider.types"
import { motion } from "framer-motion"

const SurveyCompleted = () => {
  const { survey, dispatch } = React.useContext(SurveyContext) as TSurveyContext

  const isCompleted = React.useMemo(() => !!survey?.answers?.every((val) => !!val.answerId), [survey?.answers])

  return (
    <SurveyCompletedStyled layoutId="page-state">
      <div className="content">
        <p className="title">{`${isCompleted ? "Survey Completed!" : "Your time is up!"} Thank You!`}</p>
        <p className="sub-title">
          {`${isCompleted ? "Congratulations on completing the survey!" : "Thanks for filling out the survey!"} Your valuable feedback will help us improve our services and provide you with a better shopping experience. Happy shopping!`}
        </p>
        <div className="button-wrapper">
          <motion.div whileHover={{ scale: 1.1 }} className="button">
            <Button onClick={() => dispatch({ type: "CHANGE_PAGE", value: "review" })}>Review</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="button">
            <Button variant="secondary" onClick={() => dispatch({ type: "START_SURVEY" })}>Try again</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="button">
            <Button variant="secondary" onClick={() => dispatch({ type: "CHANGE_PAGE", value: "start" })}>Close</Button>
          </motion.div>
        </div>
      </div>
    </SurveyCompletedStyled>
  )
}

export default SurveyCompleted