import React from 'react'
import { useParams } from 'react-router-dom';

import SceneLoader from '../components/SceneLoader';
import { SCENE_CONFIGS } from '../conf/SceneConfigs';
import SurveyQuestionArea from '../components/SurveyQuestionArea';

function Survey() {
    let { userType } = useParams();
    // todo:
    // loading bar:
    // fetch userSurveySubmissionInfo
    // loadScene
    // load questions

    return (
        <>
            <div>{userType} Survey</div>
            <div style={{ "display": "flex", "margin": "1rem", "color": "white" }}>
                <div style={{ "width": "70%", "height": "920px", "background": "black", "padding": "1rem" }}>
                    {/* Survey Model Area */}
                    <SceneLoader sceneConfigs={SCENE_CONFIGS[userType]} />
                </div>
                <div style={{ flexGrow: 1, "background": "lightBlue", "padding": "1rem", overflow: "auto", maxHeight:"920px" }}>
                    {/* Survey Question Area */}
                    <SurveyQuestionArea/>
                </div>
            </div>
        </>
    )
}

export default Survey