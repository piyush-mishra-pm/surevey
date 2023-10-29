import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getQuestionIndexById, getSelectedOption } from '../../helpers/surveyHelpers';
import _ from 'lodash';
import { STATE_ANSWERED } from '../../CONSTANTS';
import { answerQuestion } from '../../state/surveySlice';

function SingleChoiceQuestion({ ques }) {
    const surveyState = useSelector(state=>state.survey.apiJson);
    ques = _.cloneDeep(surveyState.filter(q => q.id === ques.id)[0]);
    const selectedOption = getSelectedOption(ques);

    const dispatch = useDispatch();
    
    const handleOptionChange = (e) => {
        const qIndex = getQuestionIndexById(ques.id, surveyState);
        dispatch(answerQuestion({ qIndex ,state:STATE_ANSWERED, answers: [e.target.value]}))
    };

    return (
        <div>
            <div className="ui form">
                <div className="grouped fields">
                    <label htmlFor="fruit">{ques.text}</label>
                    {ques.choices.map((choice) => (
                        <div key={choice.value}>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <input
                                        type="radio"
                                        name={ques.id}
                                        value={choice.value}
                                        checked={selectedOption === choice.value}
                                        onChange={handleOptionChange}
                                    />
                                    <label htmlFor={ques.id}>{choice.text}</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                You selected: {selectedOption}
            </div>
            <br /><br />
        </div>
    )
}

export default SingleChoiceQuestion