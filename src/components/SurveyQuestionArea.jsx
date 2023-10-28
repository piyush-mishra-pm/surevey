import React, { useState } from 'react'

import * as CONSTANTS from '../CONSTANTS';
import { getQuestionsForAppliance } from '../helpers/surveyHelpers';
import SingleChoiceQuestion from './questions/SingleChoiceQuestion';

function SurveyQuestionArea() {
  // Selected Appliances:
  const [selectedAppliance, setSelectedAppliance] = useState(CONSTANTS.APPLIANCE_GROUPS.SOLAR);

  // Load all questions for that appliance:
  const questionsForAppliance = getQuestionsForAppliance(selectedAppliance);
  // Fill answers for those questions:

  function renderApplianceGroups() {
    const applianceGroups = Object.keys(CONSTANTS.APPLIANCE_GROUPS);

    return applianceGroups.map((appGroup, i) =>
      <div className="ui horizontal relaxed list" key={i}>
        <div className="item" style={{ margin: '.3rem' }}>
          <div className="content">
            <a className="ui label">
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

      } else if (ques.numberQuestion) {

      } else {
        console.error("Survey UI not configured for the question type.");
      }
    })}</>
  }
  return (
    <div>
      <h2>SurveyQuestionArea</h2>
      {renderApplianceGroups()}
      {renderQuestions()}
    </div>
  )
}

export default SurveyQuestionArea