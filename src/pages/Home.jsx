import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div>Home</div>
            <Link className="positive ui button" to="/choose-survey">Start Survey !</Link>
        </div>
    )
}

export default Home