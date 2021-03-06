import "./comingSoon.css";
import { TopNav } from "../topNav/topNav";
import { Footer } from "../footer/footer"

export const ComingSoon = () => {
    return (
        <div>
            <TopNav />
            <div className="ComingSoonBody">
            <h1>We're working on it!</h1>
            <h4>This feature is coming soon</h4>
            <img className="image" src="https://res.cloudinary.com/cn-project/image/upload/v1641980352/pana/misc/Under_construction-pana_whf2bg.png"></img>
            </div>
            <Footer />
        </div>
    )
}