import { Link } from "react-router-dom"
import { useState } from "react"
import "./topNav.css"

export const TopNav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const logOut = () => {
        localStorage.clear()
        setTimeout(1000)
    };


    return (
        <div>
            <nav className="navBar">
                <h1 className="navBarLogo"><Link to="/home">LOGO</Link></h1>
                <div className="navbarSection">
                    <button className="burgerBtn" onClick={handleToggle}>{navbarOpen ? <i class="bi bi-x"></i> : <i class="bi bi-list"></i>}</button>
                    <ul className={`menuNav ${navbarOpen ? "showNavMenu" : "hideNavMenu"}`}>
                        <li className="navBarLi"><Link to="/about"><i class="bi bi-info-circle"></i> About us</Link></li>
                        <li className="navBarLi"><Link to="/settings"><i class="bi bi-gear"></i> Settings</Link></li>
                        <li onClick={logOut} className="navBarLi"><Link to="/login"><i class="bi bi-box-arrow-right"></i> Log out</Link></li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

