import { Link } from "react-router-dom"
import "./bottomNav.css"
import { useHistory } from "react-router-dom";

export const BottomNav = () => {
    const history = useHistory();
    return (
        <div className="footerBody">
            <footer className="footerInside">
                <li onClick={() => history.goBack()} className="bottomNavLi"><Link to="/home"><i class="bi bi-arrow-left-short"></i><div className="tooltipBottomnav">Back</div></Link></li>
                <li className="bottomNavLi"><Link to="/home"><i class="bi bi-house-door"></i><div className="tooltipBottomnav">Home</div></Link></li>
                <li className="bottomNavLi"><Link to="/lists/create"><i class="bi bi-plus-circle"></i><div className="tooltipBottomnav">New List</div></Link></li>
                <li className="bottomNavLi"><Link to="/logOut"><i class="bi bi-person"></i><div className="tooltipBottomnav">Profile</div></Link></li>
                <li className="bottomNavLi"><Link to="/settings"><i class="bi bi-gear"></i><div className="tooltipBottomnav">Settings</div></Link></li>
            </footer>
        </div>
    )
}