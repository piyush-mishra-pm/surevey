import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css';

function Home() {
    return (
        <div>
            <div className="home-page">
                <h1 className="heading">Get Started! Let's build your home!!!</h1>
                <div className="image-container">
                 <img src="https://d13hc4rsp6iv99.cloudfront.net/survey_hackathon_image/model_image.png" alt="Homepage" className="image" />
                </div>
                <Link className="positive ui button" to="/survey/RESI">Start Survey !</Link>
            </div>

        </div>
    )
}

export default Home