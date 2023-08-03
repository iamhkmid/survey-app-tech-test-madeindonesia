import React from "react"
import { TSurveyContext, TSurveyProvider } from "./SurveyProvider.types"
import { initialState, reducer } from "./Survey.reducer"

export const SurveyContext = React.createContext<TSurveyContext | null>(null)

const SurveyProvider: React.FC<TSurveyProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { ...state, dispatch }

  React.useEffect(() => {
    dispatch({ type: "CHECK_PREV_SURVEY" })
  }, [])

  return (
    <SurveyContext.Provider value={value}>
      {children}
    </SurveyContext.Provider>
  )
}

export default SurveyProvider