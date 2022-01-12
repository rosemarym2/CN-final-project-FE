import "./about.css";
import { TopNav } from "../topNav/topNav";
import { BottomNav } from "../bottomNav/bottomNav";

export const About = () => {

    return (
        <div>
            <TopNav />
        <div className="about">
            <img className="aboutImg" src="https://res.cloudinary.com/cn-project/image/upload/v1641917408/pana/misc/FAQs-pana_h4mv1y.png"></img>
            <h3>What is List Junkie?</h3>
            <h5>This is a space for you to go wild with your bucket lists! Always wanted to sky dive? Visit the Amazon? Have the bragging rights of reading all of the classics? Show off all the awesome thing's you've done and plan to do? Have fun with our scratch off lists! Use our existing lists or create your own! 
            </h5>
            <h3>Who are we?</h3>
            <h5>Based in Nottingham UK, Rosie, Rachel, Julija and Holly met at work and found a shared interest in creating websites and also making lists! Join them as they delve into the world of online lists!</h5>
        </div>
        </div>
    )
}