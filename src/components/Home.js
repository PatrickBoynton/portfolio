import {Component} from "react";

class Home extends Component {
    render() {
        return (
            <div className="home-container d-flex">
                <div className="square-1">
                    <img className="main-img" src={`${process.env.PUBLIC_URL}/Main1.jpeg`} alt=""/>
                    <h1 className="home-header">Patrick Boynton</h1>
                </div>
                <div className="square-2">
                    <p className="home-text">
                        I am a passionate programmer, who loves solving problems and helping people. I recently graduated
                        from Carolina Code School, and learned a lot about myself and the technologies needed to be a
                        succesful programmer in today's world. If you want to find out more, either click the about, or
                        skills at the top of the page. If you are looking for a resume, click the skills page.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
