import "./404.css";
import { TopNav } from "../topNav/topNav";
import { BottomNav } from "../bottomNav/bottomNav.js"

export const Error404 = () => {
    return (
        <div>
            <TopNav />
            <h1>Error - 404</h1>
            <h4>Page not found</h4>
            <img className="errImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641917788/pana/errors/Monster_404_Error-pana_tvercg.png"></img>
            <BottomNav />
        </div>
    )
}