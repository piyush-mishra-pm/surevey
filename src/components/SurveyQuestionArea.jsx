import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import * as CONSTANTS from '../CONSTANTS';
import { getQuestionsForAppliance } from '../helpers/surveyHelpers';
import SingleChoiceQuestion from './questions/SingleChoiceQuestion';
import InputQuestion from './questions/InputQuestion';
import { setSelectedAppliance, selectedAppliaceSelector } from '../state/sceneSlice';

function SurveyQuestionArea() {
  // Selected Appliances:
  const selectedAppliance = useSelector(selectedAppliaceSelector);
  const dispatch = useDispatch();
  
  function selectAppliance(appGroup){
    dispatch(setSelectedAppliance(appGroup));
  }

  // Load all questions for that appliance:
  const questionsForAppliance = getQuestionsForAppliance(selectedAppliance);
  // Fill answers for those questions:

  function renderApplianceGroups() {
    const applianceGroups = Object.keys(CONSTANTS.APPLIANCE_GROUPS);

    return applianceGroups.map((appGroup, i) =>
      <div className="ui horizontal relaxed list" key={i}>
        <div className="item" style={{ margin: '.3rem' }}>
          <div className="content">
            <a className={`ui ${selectedAppliance===appGroup?'blue':''} label`} onClick={()=>selectAppliance(appGroup)}>
              <img className="ui right spaced avatar image" src={CONSTANTS.APP_GROUPS_IMAGES[appGroup]} />
              {appGroup}
            </a>
          </div>
        </div>
      </div>
    );
  }

  function renderQuestions() {
    return <>{questionsForAppliance.map((ques, index) => {
      if (ques.singleChoiceQuestion) {
        return <SingleChoiceQuestion key={index} ques={ques} />
      } else if (ques.multipleChoiceQuestion) {

      } else if (ques.multipleWithSubChoiceQuestion) {

      } else if (ques.textQuestion) {
        return <InputQuestion key={index} ques={ques}/>
      } else if (ques.numberQuestion) {
        return <InputQuestion key={index} ques={ques}/>
      } else {
        console.error("Survey UI not configured for the question type.");
      }
    })}</>
  }
  return (
    <div>
      <h3>Select an appliance</h3>
      {renderApplianceGroups()}
      <hr/>

      {selectedAppliance &&
        <>
          <h3>Answer questions for your {selectedAppliance} appliance:</h3>
          {renderQuestions()}
        </>
      }

    </div>
  )
}

export default SurveyQuestionArea