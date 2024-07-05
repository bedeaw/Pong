import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="App">
        <body>
            <div className="main"></div>
        </body>
        <p> 
           <Link to="/" className="Home-Logo"><IoHomeOutline /></Link>
        </p>
        <header className="App-header">
            <h1>About Page</h1>
            <p className="about-text">Author: bedeaw</p>
            <p>
                <a className="App-link"
                href="https://github.com/bedeaw/Pong_Client"
                target="_blank"
                rel="noopener noreferrer">
                    Client Repo
                </a>
            </p>
        </header>
        </div>
    )
}

export default About;