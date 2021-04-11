import {Component} from "react";

class Home extends Component {
    render() {
        return (
            <section className="home-container d-flex">
                <aside className="square-1">
                    <img className="main-img" src={`${process.env.PUBLIC_URL}/MeProf.jpeg`} alt=""/>
                    <h1 className="home-header">Hi I'm Patrick Boynton</h1>
                    <h1 className="home-header-1">Passionate programmer</h1>
                </aside>
                <div className="d-flex flex-column">
                    <h1 className="home-header-2">About Me</h1>
                    <p className="home-text">My name is Patrick, I am a recent graduate of Carolina Code School. Before
                        now I worked for the City of Greenville. As far back as I can remember I have been interested in
                        programming because I enjoy the challenges that it can throw at you. For years programming was a
                        hobby, but a software engineer friend convinced me that I could do this as a career. I started
                        teaching myself the basics of programming. When I wanted to expand my programming beyond what I
                        could teach myself, I enrolled in Carolina Code School. I can already see the difference between
                        how I coded before and after the class.</p>
                </div>
            </section>
        );
    }
}

export default Home;
