import { Link } from "react-router-dom"

export const NavBottom = () => {

    return (
        <nav>
            <li><Link to="/home"><i class="bi bi-house-door"></i></Link></li>
            <li><Link to="/aboutUs"><i class="bi bi-search"></i></Link></li>
            <li><Link to="/settings"><i class="bi bi-plus-circle"></i></Link></li>
            <li><Link to="/#"><i class="bi bi-send"></i></Link></li>
            <li><Link to="/logOut"><i class="bi bi-person"></i></Link></li>
        </nav>
    )
}