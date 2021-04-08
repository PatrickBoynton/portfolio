import {Component} from "react";
import Footer from "./Footer";

class About extends Component {
    render() {
        return (
            <>
                <div style={{height: '85vh'}} className="d-flex">
                    <img style={{height: '80%'}} className="p-5 img-fluid rounded" src={`${process.env.PUBLIC_URL}/me.jpeg`} alt="Me"/>
                    <h1 style={{whiteSpace: 'nowrap'}} className="p-5">About Me</h1>
                    <p style={{fontSize: "20px"}} className="p-5">For most of my adult life I worked for the City of
                        Greenville with Parking Services. At some point I
                        began wanting something more. I started talking to a friend of mine who told me that I didn't need a
                        CS Degree to earn a job programming which is something I've kind of always wanted to do for a
                        career. That's what lead me down the road of first teaching myself the basics of programming, then
                        going to Carolina Code School for further training. It's my intention to eventually become a back
                        end web developer.</p>
                </div>
            </>
        );
    }
}

export default About;
