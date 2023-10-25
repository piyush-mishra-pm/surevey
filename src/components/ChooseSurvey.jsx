import React from 'react'

function ChooseSurvey() {
    return (
        <div>
            <h1>Please choose a Survey type you want to take:</h1>
            <div className="ui middle aligned selection list">
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/helen.jpg" /> */}
                    <div className="content">
                        <div className="header">RESI</div>
                    </div>
                </div>
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/christian.jpg" /> */}
                    <div className="content">
                        <div className="header">SMB</div>
                    </div>
                </div>
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" /> */}
                    <div className="content">
                        <div className="header">LMI</div>
                    </div>
                </div>
                <div className="item">
                    {/* <img className="ui avatar image" src="/images/avatar/small/daniel.jpg" /> */}
                    <div className="content">
                        <div className="header">EV</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseSurvey