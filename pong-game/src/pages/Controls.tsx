import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";

const Controls = () => {
    return (
        <div className="App">
        <body>
            <div className="main"></div>
        </body>
        <p> 
            <Link to="/" className="Home-Logo"><IoHomeOutline /></Link>
        </p>
        <header className="App-header">
            <h1>Controls Page</h1>
        </header>
        <header className="Co-Op">
            <h1>Local Co-Op:</h1>
            <p className='Co-Op-body'>Left:</p>
            <p className='Co-Op-instructions'>Player 1 controls the left paddle using the 'W' key to move upwards and 'S' key to move downwards.</p>
            <p className='Co-Op-body'>Right:</p>
            <p className='Co-Op-instructions'>Player 2 controls the right paddle using the 'UP Arrow' key to move upwards and 'DOWN Arrow' key to move downwards.</p>
        </header>
        </div>
    )
}

export default Controls;