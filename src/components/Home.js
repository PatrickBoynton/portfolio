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
                    <p className="home-text">My name is Patrick, I am a recent graduate of Carolina Code School. Before now I
                        worked for the City of Greenville Parking Services for many years. It was a good job, but
                        eventually I felt I could do more, and wanted more than a part time job that didn't seem that
                        fulfilling.I have as far back as I can remember I have been interested in technology, specifically
                        programming, because I enjoy the challenges that it can throw at you. In the past I have always
                        considered it a hobby and not something that I could do as a career, but not all that long ago a
                        friend of mine who was then currently working as a software engineer said that a lot of
                        companies were dropping the requirement of a CS Degree and that got me thinking that maybe I
                        could finally do this as a career. I started teaching myself the basics of programming that I
                        felt I should know to become a programmer. The path was difficult, and at the time there weren't
                        as many resources as there are now, and eventually I got to the point where I felt I needed help
                        getting the extra training I didn't know how to find. My brother originally went to the Iron
                        Yard and got a job through that, and that's what led me to sign up for the course at Carolina
                        Code School. I can already see the difference between how I coded before and after the
                        class.</p>
                </div>
            </section>
        );
    }
}

export default Home;
