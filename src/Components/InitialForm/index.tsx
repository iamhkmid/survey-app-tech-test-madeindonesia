import React from "react"
import Button from "../BasicInput/Button"
import { InitialFormStyled } from "./InitialForm.styled"
import { SurveyContext } from "../../Contexts"
import { TSurveyContext } from "../../Contexts/SurveyProvider.types"
import { motion } from "framer-motion"

const InitialForm = () => {
  const { dispatch } = React.useContext(SurveyContext) as TSurveyContext

  return (
    <InitialFormStyled layoutId="page-state">
      <div className="content">
        <p className="title">Quick Survey</p>
        <p className="sub-title">Please kindly spare your availability to participate in this survey for the sake of improving your shopping experience.</p>
        <motion.div whileHover={{ scale: 1.1 }} className="button">
          <Button onClick={() => dispatch({ type: "START_SURVEY" })}>Start</Button>
        </motion.div>
      </div>
    </InitialFormStyled>
  )
}

export default InitialForm