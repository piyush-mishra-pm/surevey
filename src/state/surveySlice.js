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
      const {qIndex, state, answers} = action.payload;
      console.log({ qIndex, state, answers });
      s.apiJson[qIndex].state = state;
      s.apiJson[qIndex].answers = [...answers];
    },
    resetQuestion: (s, action) => {
      const { id } = action.payload;
      s.apiJson[id].state = QUESTION_ANSWERED_STATES.UNANSWERED;
      s.apiJson[id].answers = [];
    },
  },
});

export const { answerQuestion, resetQuestion } = surveySlice.actions;

export const getQuestionsForSelectedAppliance = applianceGroup => state => state.apiJson.filter(q =>q.group === applianceGroup) ;
export const getSurveyStateSlice = state => state.apiJson;

export default surveySlice.reducer;
