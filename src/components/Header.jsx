import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='ui top menu'>
            <div className='item'>
                Logo
            </div>
            <Link to="/" className='item'>Sure-vey</Link>
            <Link to="/choose-survey" className='item'>Choose-Survey</Link>
        </div>
    )
}

export default Header