import React, { useState } from 'react'
import { getSelectedOption } from '../../helpers/surveyHelpers';

function InputQuestion({ ques }) {
    const [selectedOption, setSelectedOption] = useState(getSelectedOption(ques));

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
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