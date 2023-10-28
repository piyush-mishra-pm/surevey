import { createSlice } from "@reduxjs/toolkit";

import { QUESTION_ANSWERED_STATES } from "../CONSTANTS";
import { simplifyBidgelyQuesObj } from "../helpers/surveyHelpers";
import { SAMPLE_RESPONSE } from "../conf/SampleResponse";

const initialState = {
  apiJson: SAMPLE_RESPONSE.payload.questions.map(simplifyBidgelyQuesObj),
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    answerQuestion: (s, action) => {
      const {id, state, answers} = action.payload;
      s.api[id].state = state;
      s.api[id].answers = [...answers];
    },
    resetQuestion: (s, action) => {
      const { id } = action.payload;
      s.api[id].state = QUESTION_ANSWERED_STATES.UNANSWERED;
      s.api[id].answers = [];
    },
  },
});

export const { answerQuestion, resetQuestion } = surveySlice.actions;

export default surveySlice.reducer;
