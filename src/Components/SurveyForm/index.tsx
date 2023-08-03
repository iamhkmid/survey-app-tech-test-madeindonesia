import React from "react"
import Button from "../BasicInput/Button"
import { BarLevel, CustomCountdown, SurveyFormStyled } from "./SurveyForm.styled"
import { SurveyContext } from "../../Contexts"
import { TSurveyContext } from "../../Contexts/SurveyProvider.types"
import { AnimatePresence } from "framer-motion"
import RadioGroup from "../BasicInput/RadioGroup"
import Radio from "../BasicInput/Radio"
import { motion } from "framer-motion"
import Countdown from "../Countdown/Countdown"
import { CountdownRendererProps } from "../Countdown/Countdown.types"
import { zeroPad } from "../Countdown/Countdown.heplers"

const SurveyForm = () => {
  const { survey, questions, dispatch } = React.useContext(SurveyContext) as TSurveyContext
  const [mounted, setMounted] = React.useState(false)

  const expireDate = React.useMemo(() => new Date(survey?.expireIn!), [survey?.expireIn])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const currentAnswer = React.useCallback((id: string) => {
    return survey?.answers.find((val) => val.questionId === id)?.answerId as string
  }, [survey?.answers])

  const disabledButton = React.useMemo(() => {
    const findAnswer = survey?.answers.find((val) => val.order === survey.currentQuestion)
    return !findAnswer?.answerId
  }, [survey?.answers, survey?.currentQuestion])

  return (
    <SurveyFormStyled layoutId="page-state">
      <div className="bar-level-wrapper">
        {questions.map((question) => (
          <BarLevel key={question.id} $active={question.order <= survey?.currentQuestion!} className="bar-level" />
        ))}
      </div>
      <div className="modal">
        <div className="content">
          <div className="header">
            <p className="title">{`Q${survey?.currentQuestion}`}</p>
            <Countdown date={expireDate} renderer={RenderCountdown} />
          </div>
          <div className="form">
            <AnimatePresence mode="popLayout">
              {questions.map((question) => question.order === survey?.currentQuestion && (
                <motion.div className="question-wrapper" key={question.id} initial={{ x: mounted ? 250 : 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <p className="question">{question.question}</p>
                  <div className="answers-wrapper">
                    <RadioGroup value={currentAnswer(question.id)} onChange={(value) => dispatch({ type: "SET_ANSWER", value: { questionId: question.id, answerId: value as string } })}>
                      {question.options.map((answer) => (
                        <Radio key={answer.id} label={answer.answer} value={answer.id} />
                      ))}
                    </RadioGroup>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <motion.div whileTap={{ scale: 1.05 }} className="button">
              <Button onClick={() => dispatch({ type: "NEXT_QUESTION" })} disabled={disabledButton}>Next</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </SurveyFormStyled>
  )
}

export default SurveyForm

const RenderCountdown = (props: CountdownRendererProps) => {
  return (
    <CustomCountdown $isRunningOut={!props.completed && props.seconds !== 0 && props.seconds < 10}>
      {props.completed && <div className="completed">{"Time's up!"}</div>}
      {!props.completed && <div className="running">{`${zeroPad(props.minutes, 2)}: ${zeroPad(props.seconds, 2)}`}</div>}
    </CustomCountdown>
  )
}