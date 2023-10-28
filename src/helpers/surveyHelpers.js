import _ from "lodash";

import { SAMPLE_RESPONSE } from "../conf/SampleResponse";

export function getQuestionsForAppliance(applianceGroup) {
  if(applianceGroup == null){
    return [];
  }
  
  const cloned = _.cloneDeep(SAMPLE_RESPONSE.payload.questions);
    return cloned
        .filter((ques) => ques.group == applianceGroup)
        .map(simplifyBidgelyQuesObj);
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
