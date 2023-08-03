import { questions } from "../utils/dummyQuestion";
import { TNavReducer, TNavReducerState } from "./SurveyProvider.types";

export const reducer: TNavReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_PAGE": {
      if (action.value === "start") localStorage.removeItem("survey")
      return { ...state, page: action.value }
    }
    case "START_SURVEY": {
      const survey: TNavReducerState["survey"] = {
        answers: questions.map((question) => ({ questionId: question.id, answerId: null, order: question.order })),
        currentQuestion: 1,
        numberOfQuestions: questions.length ?? 0,
        startDate: new Date(),
        isDone: false
      }
      localStorage.setItem("survey", JSON.stringify(survey))
      return {
        ...state,
        page: "survey",
        survey
      };
    }
    case "CHECK_PREV_SURVEY": {
      try {
        const survey: TNavReducerState["survey"] = JSON.parse(localStorage.getItem("survey") as string)
        if (!survey) throw Error()
        return {
          ...state,
          page: survey.isDone ? "completed" : "survey",
          survey
        };
      } catch {
        return state
      }
    }
    case "SET_ANSWER": {
      const survey: TNavReducerState["survey"] = {
        ...state.survey!,
        answers: state.survey?.answers.map((answer) => {
          if (answer.questionId === action.value.questionId) return { ...answer, answerId: action.value.answerId }
          return answer
        })!
      }
      localStorage.setItem("survey", JSON.stringify(survey))
      return {
        ...state,
        survey
      }
    }
    case "NEXT_QUESTION": {
      const findQuestion = questions.find((val) => val.order === state.survey?.currentQuestion)
      const isAnswered = !!state.survey?.answers.find((val) => val.questionId === findQuestion?.id)?.answerId
      const currentQuestion = state.survey?.currentQuestion! + 1
      if (currentQuestion <= questions.length && isAnswered) {
        const survey: TNavReducerState["survey"] = { ...state.survey!, currentQuestion }
        localStorage.setItem("survey", JSON.stringify(survey))
        return { ...state, survey }
      } else if (questions.length === findQuestion?.order) {
        const newState: TNavReducerState = { ...state, page: "completed", survey: { ...state.survey!, isDone: true } }
        localStorage.setItem("survey", JSON.stringify(newState.survey))
        return newState
      }
      return state
    }
    default:
      return state;
  }
};

export const initialState: TNavReducerState = {
  page: "start",
  survey: null
};