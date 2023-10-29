import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='ui top menu'>
            <div className='item'>
                Bidgely
            </div>
            <Link to="/" className='item'>The-Volt-Survey</Link>
        </div>
    )
}

export default Header