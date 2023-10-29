import _ from "lodash";

import { SAMPLE_RESPONSE } from "../conf/SampleResponse";
import { STATE_ANSWERED } from "../CONSTANTS";

export function getQuestionsForAppliance(applianceGroup) {
  if(applianceGroup == null){
    return [];
  }
  
  return _.cloneDeep(SAMPLE_RESPONSE.payload.questions).filter((ques) => ques.group == applianceGroup);
}

export function simplifyBidgelyQuesObj(bidgelyQuestion) {
  const shortened = _.pick(bidgelyQuestion, [
      "id",
      "state",
      "parent",
      "choices",
      "answers",
      "singleChoiceQuestion",
      "multipleChoiceQuestion",
      "multipleWithSubChoiceQuestion",
      "textQuestion",
      "numberQuestion",
      "type",
      "group",
      "text",
    ]);
    
    shortened.choices = shortened.choices?.map(choice => simplifyBidgelyAnswerChoice(choice));
    return shortened;
}

function simplifyBidgelyAnswerChoice(choice) {
  return _.pick(choice, ["text", "value", "renderProp"]);
}

export function getSelectedOption(ques) {
  if (ques.state === STATE_ANSWERED && ques.answers) {
    return ques.answers[0];
  }
  return "";
}

export function getQuestionIndexById(id, quesState){
  return quesState.findIndex(q => q.id === id);
}