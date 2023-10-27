import React, { useState } from 'react'

import * as CONSTANTS from '../CONSTANTS';
import { getQuestionsForAppliance } from '../helpers/surveyHelpers';
import SingleChoiceQuestion from './questions/SingleChoiceQuestion';

function SurveyQuestionArea() {
    // Selected Appliances:
    const [selectedAppliance, setSelectedAppliance] = useState(CONSTANTS.APP_GROUP_SOLAR);

    // Load all questions for that appliance:
    const questionsForAppliance = getQuestionsForAppliance(selectedAppliance);
        // Fill answers for those questions:
  return (
    <div style={{overflow:'auto', maxHeight:'400px'}}>
          <h2>SurveyQuestionArea</h2>
          {questionsForAppliance.map((ques, index)=>{
            if(ques.singleChoiceQuestion){
              return <SingleChoiceQuestion key={index} ques={ques}/>
            }else if(ques.multipleChoiceQuestion){

            }else if(ques.multipleWithSubChoiceQuestion){
              
            }else if(ques.textQuestion){
              
            }else if(ques.numberQuestion){
              
            }else{
              console.error("Survey UI not configured for the question type.");
            }
          })}
    </div>
  )
}

export default SurveyQuestionArea