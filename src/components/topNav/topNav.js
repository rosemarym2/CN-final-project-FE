import { Link } from "react-router-dom"
import { useState } from "react"
import "./topNav.css"

export const TopNav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <div>
            <nav className="navBar">
            <li><Link to="/home">LOGO</Link></li>
            <div>
                    <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
                        <li><Link to="/aboutUs"><i class="bi bi-info-circle"></i> About us</Link></li>
                        <li><Link to="/settings"><i class="bi bi-gear"></i> Settings</Link></li>
                        <li><Link to="/logOut"><i class="bi bi-box-arrow-right"></i> Log out</Link></li>
                </ul>
                <button onClick={handleToggle}>{navbarOpen ? <i class="bi bi-x"></i> : <i class="bi bi-list"></i>}</button>
            </div>
            </nav>
        </div>
    )
}

