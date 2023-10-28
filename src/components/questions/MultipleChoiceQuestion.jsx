import React, { useState } from 'react'

import { STATE_ANSWERED } from '../../CONSTANTS';

function getSelectedOption(ques){
    if(ques.state === STATE_ANSWERED && ques.answers){
        return ques.answers[0];
    }
    return '';
}

function MultipleChoiceQuestion({ ques }) {
    const [selectedOption, setSelectedOption] = useState(()=>getSelectedOption(ques));

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const renderCheckbox = (ques, choice) => (
        <div key={choice.value}>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                name={ques.id}
                value={choice.text}
                //checked={selectedOptions[ques.id]?.[choice.text] || false}
                onChange={handleOptionChange}
              />
              <label>{choice.text}</label>
            </div>
          </div>
        </div>
      );
    
      return (
        <div className="ui form">
          <div className="grouped fields">
            <label htmlFor="fruit">{ques.text}</label>
            {ques.choices.map((choice) => renderCheckbox(ques, choice))}
          </div>
        </div>
      );
    }

export default MultipleChoiceQuestion