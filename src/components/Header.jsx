import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">Sure-vey</Link>
            <Link to="/choose-survey">Choose-Survey</Link>
        </nav>
    )
}

export default Header