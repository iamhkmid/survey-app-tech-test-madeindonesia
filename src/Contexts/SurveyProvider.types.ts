import React from "react"
import { questions } from "../utils/dummyQuestion";

export type TNavReducerState = {
  page: "start" | "survey" | "completed" | "review",
  survey: {
    startDate: Date;
    numberOfQuestions: number;
    currentQuestion: number;
    isDone: boolean;
    answers: { questionId: string; answerId: string | null; order: number; }[]
  } | null
}
export type TNavReducerAction =
  {
    type: "CHANGE_PAGE",
    value: TNavReducerState["page"]
  } |
  {
    type: "START_SURVEY"
  } |
  {
    type: "CHECK_PREV_SURVEY"
  } |
  {
    type: "SET_ANSWER",
    value: { questionId: string; answerId: string; }
  } |
  {
    type: "NEXT_QUESTION"
  }

export type TNavReducer = (state: TNavReducerState, action: TNavReducerAction) => TNavReducerState

export interface TSurveyProvider {
  children: React.ReactNode
}

export interface TSurveyContext extends TNavReducerState {
  questions: typeof questions
  dispatch: React.Dispatch<TNavReducerAction>
}