import React from "react"
import { TSurveyContext, TSurveyProvider } from "./SurveyProvider.types"
import { initialState, reducer } from "./Survey.reducer"
import { questions } from "../utils/dummyQuestion"

export const SurveyContext = React.createContext<TSurveyContext | null>(null)

const SurveyProvider: React.FC<TSurveyProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { ...state, dispatch, questions }
  const timeOut = React.useRef<NodeJS.Timeout>()

  React.useEffect(() => {
    dispatch({ type: "CHECK_PREV_SURVEY" })
  }, [])

  React.useEffect(() => {
    if (!!state.survey && !state.survey.isDone) {
      const datenow = new Date()
      const distance = new Date(state.survey.expireIn)!.getTime() - datenow.getTime();
      const ms = distance <= 0 ? 0 : distance
      timeOut.current = setTimeout(() => {
        dispatch({ type: "FORCE_FINISHED" })
      }, ms)
    }
    return () => {
      clearTimeout(timeOut.current)
    }
  }, [state.survey])

  return (
    <SurveyContext.Provider value={value}>
      {children}
    </SurveyContext.Provider>
  )
}

export default SurveyProvider