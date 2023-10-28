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
            <div>Survey for {userType}</div>
            <div style={{ "display": "flex", "margin": "1rem", "color": "white" }}>
                <div style={{ "width": "70%", "height": "500px", "background": "green", "padding": "1rem" }}>
                    Survey Model Area
                    <SceneLoader sceneConfigs={SCENE_CONFIGS[userType]} />
                </div>
                <div style={{ flexGrow: 1, "background": "blue", "padding": "1rem", overflow: "auto", maxHeight:"500px" }}>
                    Survey Question Area
                    <SurveyQuestionArea/>
                </div>
            </div>
        </>
    )
}

export default Survey