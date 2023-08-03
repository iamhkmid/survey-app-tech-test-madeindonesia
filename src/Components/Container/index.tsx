import React from "react"
import InitialForm from "../InitialForm"
import { ContainerStyled, Mark } from "./Container.styled"
import { SurveyContext } from "../../Contexts"
import { TSurveyContext } from "../../Contexts/SurveyProvider.types"
import SurveyForm from "../SurveyForm"
import SurveyCompleted from "../SurveyCompleted"
import { motion } from "framer-motion"
import Review from "../Review/Review"

const Container = () => {
  const { page } = React.useContext(SurveyContext) as TSurveyContext

  return (
    <ContainerStyled>
      <motion.div
        initial={{ y: 800, scale: 0.3 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 40
        }}>
        {page === "start" && <InitialForm />}
        {page === "survey" && <SurveyForm />}
        {page === "completed" && <SurveyCompleted />}
        {page === "review" && <Review />}
      </motion.div>
      <Mark>
        <div>
          <p>FRONT-END (REACT) TECHNICAL TEST</p>
          <p>by Muhammad Luqmanul Hakim.</p>
        </div>
      </Mark>
    </ContainerStyled>
  )
}

export default Container