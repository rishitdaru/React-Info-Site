import React from 'react';
import reactLogo from "../images/react-icon-small.png";

export default function NavBar(props) {
    console.log(props)
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img
                src={reactLogo}
                alt="React Logo"
                className="nav--icon"
            />
            <h2 className="nav--logo_text">ReactFacts</h2>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}