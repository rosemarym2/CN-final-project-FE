import { Link } from "react-router-dom"

export const NavTop = () => {

    return (
        <nav>
            <li><Link to="/home">LOGO</Link></li>
            <li><Link to="/aboutUs"><i class="bi bi-info-circle"></i> About us</Link></li>
            <li><Link to="/settings"><i class="bi bi-gear"></i> Settings</Link></li>
            <li><Link to="/logOut"><i class="bi bi-box-arrow-right"></i> Log out</Link></li>
        </nav>
    )
}