import React from 'react'

import SceneLoader from '../components/SceneLoader';
import { SCENE_CONFIGS } from '../conf/SceneConfigs';
import SurveyQuestionArea from '../components/SurveyQuestionArea';
import { APPLIANCE_GROUPS, SCENE_BASE_OBJECTS } from '../CONSTANTS';

function Survey() {
    // todo:
    // loading bar:
    // fetch userSurveySubmissionInfo
    // loadScene
    // load questions

    return (
        <>
            <div style={{ "display": "flex", "margin": "1rem", "color": "white" }}>
                <div style={{ "width": "70%", "height": "920px", "background": "black", "padding": "1rem" }}>
                    See your home getting built
                    <SceneLoader sceneConfigs={SCENE_CONFIGS[SCENE_BASE_OBJECTS]} applianceConfigs={APPLIANCE_GROUPS}/>
                </div>
                <div style={{ flexGrow: 1, "background": "lightBlue", "padding": "1rem", overflow: "auto", maxHeight:"920px" }}>
                    Answer questions to build your home
                    <SurveyQuestionArea/>
                </div>
            </div>
        </>
    )
}

export default Survey