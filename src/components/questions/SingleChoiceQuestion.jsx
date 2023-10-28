import React, { useState } from 'react'

import { getSelectedOption } from '../../helpers/surveyHelpers';

function SingleChoiceQuestion({ ques }) {
    const [selectedOption, setSelectedOption] = useState(()=>getSelectedOption(ques));

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
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