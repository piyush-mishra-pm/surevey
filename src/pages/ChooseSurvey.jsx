import React from 'react'
import { Link } from 'react-router-dom'
import * as CONSTANTS from '../CONSTANTS'

function ChooseSurvey() {
    return (
        <div>
            <h1>Please choose a Survey type you want to take:</h1>
            <div className="ui middle aligned selection list">
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/helen.jpg" /> */}
                    <div className="content">
                        <Link to={`/survey/${CONSTANTS.USER_TYPE_RESI}`} className="header">RESI</Link>
                    </div>
                </div>
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/christian.jpg" /> */}
                    <div className="content">
                        <Link to={`/survey/${CONSTANTS.USER_TYPE_SMB}`} className="header">SMB</Link>
                    </div>
                </div>
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" /> */}
                    <div className="content">
                        <Link to={`/survey/${CONSTANTS.USER_TYPE_LMI}`} className="header">LMI</Link>
                    </div>
                </div>
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" /> */}
                    <div className="content">
                        <Link to={`/survey/${CONSTANTS.USER_TYPE_EV}`} className="header">EV</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSurvey