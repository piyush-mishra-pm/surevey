import { size } from 'lodash';
import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='ui top menu'>
            <div className='item'>
                <img src= "https://s3.amazonaws.com/bidgelyna-email-images/Homebeat-Logo.png" width={200} height={17}></img>
            </div>
            <Link to="/" className='item'>Survey</Link>
        </div>
    )
}

export default Header