import "./about.css";
import { TopNav } from "../topNav/topNav";

export const About = () => {

    return (
        <div className="about">
            <TopNav />
            <h1>About us</h1>
            <h3>What is List Junkie?</h3>
            <h5>This is a space for you to go wild with your bucket lists! Always wanted to sky dive? Visit the Amazon? Have the bragging rights of reading all of the classics? Show off all the awesome thing's you've done and plan to do? Have fun with our scratch off lists! Use our existing lists or create your own! 
            </h5>
            <h3>Meet the team</h3>
            <h5>Based in Nottingham UK, Rosie, Rachel, Julija and Holly met at work and found a shared interest in creating websites and also making lists! Join them as they delve into the world of online lists!</h5>
        </div>
    )
}