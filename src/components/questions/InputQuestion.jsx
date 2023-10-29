import React from 'react'
import { getQuestionIndexById, getSelectedOption } from '../../helpers/surveyHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../../state/surveySlice';
import _ from 'lodash';
import { STATE_ANSWERED } from '../../CONSTANTS';

function InputQuestion({ ques }) {
    const surveyState = useSelector(state => state.survey.apiJson);
    ques = _.cloneDeep(surveyState.filter(q => q.id === ques.id)[0]);
    const selectedOption = getSelectedOption(ques);

    const dispatch = useDispatch();

    const handleOptionChange = (e) => {
        const qIndex = getQuestionIndexById(ques.id, surveyState);
        dispatch(answerQuestion({ qIndex, state: STATE_ANSWERED, answers: [e.target.value] }))
    };

    return (
        <div>
            <div className="ui form">
                <div className="grouped fields">
                    <label htmlFor="fruit">{ques.text}</label>
                    <div >
                            <div className="field">
                            <div className="ui input">
                                <input type="text" placeholder="Response..."
                                name={ques.id}
                                value={selectedOption}
                                onChange={handleOptionChange}/>
                            </div>
                            </div>
                        </div>
                  
                    {/* {ques.choices.map((choice) => ( */}
                        
                </div>
                You selected: {selectedOption}
            </div>
            <br /><br />
        </div>
    )
}

export default InputQuestion