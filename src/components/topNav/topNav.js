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
    <>
      <div className="nav-bar">
        <nav className="navigation-bar">
          <Link to="/home"><img src="https://res.cloudinary.com/cn-project/image/upload/v1641915487/output-onlinepngtools_r2el6k.png" /></Link>
          <button className="burgerBtn" onClick={handleToggle}>{navbarOpen ? <i class="bi bi-x"></i> : <i class="bi bi-list"></i>}</button>
        </nav>
      </div>
      <div className="drop-down-menu-container">
        <div className="drop-down-menu">
          <ul className={`menuNav ${navbarOpen ? "showNavMenu" : "hideNavMenu"} ul-list`}>
            <li className="navBarLi"><Link to="/home"><i class="bi bi-house-door"></i> Home</Link></li>
            <li className="navBarLi"><Link to="/profile"><i class="bi bi-person"></i> Profile</Link></li>
            <li className="navBarLi"><Link to="/about"><i class="bi bi-info-circle"></i> About us</Link></li>
            <li className="navBarLi"><Link to="/settings"><i class="bi bi-gear"></i> Settings</Link></li>
            <li onClick={logOut} className="navBarLi"><Link to="/login"><i class="bi bi-box-arrow-right"></i> Log out</Link></li>

          </ul>
        </div>
      </div>
    </>
  )
}
