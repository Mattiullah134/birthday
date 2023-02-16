import React from 'react'
import { Link } from 'react-router-dom'
import music from './bg-tune.mp3';
const NavBar = () => {
    const audio = new Audio(music);
    const audioHandler=()=>{
        audio.play();
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark text-white border-bottom ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-white" style={{ width: '100%', textAlign: 'center' }} >
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-3" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-3" onClick={audioHandler} to="/image">Images</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fs-3" to="/video">Videos</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
