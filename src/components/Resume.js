import {Component} from "react";

class Resume extends Component {
    render() {
        return (
            <section style={{margin: "2rem"}}>
                <div className="m-auto text-center education">
                    <h1>Education</h1>
                    <h2 className="mt-3">Carolina Code School</h2>
                    <p>
                        This course prepared me for a full stack web development position. I
                        was taught skills like best practices and popular modern
                        technologies like React and Django.
                    </p>
                    <time style={{fontSize: "1.3rem", marginBottom: "2rem"}}>Graduated April 2nd 2021</time>
                    <h2>Associates in Science</h2>
                    <h3>Greenville Technical College</h3>
                    <p>This is regular science, as in geology and astronomy, not CS.</p>
                    <time className="mb-5" style={{fontSize: "1.3rem"}}>
                        Graduated March 2020
                    </time>
                    <h1>Skills</h1>
                </div>
                <div className="d-flex skills justify-content-center">
                    <div className="tech-skills">
                        <h1>Tech Skills</h1>
                        <ul style={{marginBottom: "3.5rem"}}>
                            <li>
                                <i style={{color: "#D35635"}} className="fab fa-html5"/> HTML
                                5
                            </li>
                            <li>
                                <i style={{color: "#3077B8"}} className="fab fa-css3"/> CSS 3
                            </li>
                            <li>
                                <i style={{color: "#D3C045"}} className="fab fa-js-square"/>{" "}
                                JavaScript
                            </li>
                            <li>
                                <i style={{color: "#609BB0"}} className="fab fa-react"/>{" "}
                                React
                            </li>
                            <li>
                                <i className="fab fa-python python"/> Python
                            </li>
                            <li>
                                <i style={{color: "#3E7959"}} className="fab fa-python"/>{" "}
                                Django
                            </li>
                            <h2>Extras: </h2>
                            <li>
                                <i style={{color: "#D35635"}} className="fab fa-js-square"/>{" "}
                                Handlebars
                            </li>
                            <li>
                                <i style={{color: "#8B5CD0"}} className="fab fa-bootstrap"/>{" "}
                                Bootstrap
                            </li>
                            <li>
                                <i style={{color: "#2A6EBA"}} className="fa fa-database"/>{" "}
                                SQL
                            </li>
                            <li>
                                <i style={{color: "#88291F"}} className="fa fa-database"/>{" "}
                                Redis
                            </li>
                            <li>
                                <i style={{color: "#8D6EC9"}} className="fab fa-microsoft"/>{" "}
                                C#
                            </li>
                            <li>
                                <i style={{color: "#4836C6"}} className="fab fa-microsoft"/>{" "}
                                .Net Core/.Net
                            </li>
                        </ul>
                    </div>
                    <div className="soft-skills">
                        <h1>Soft Skills</h1>
                        <p>These are some, but not all of my soft skills.</p>
                        <ul>
                            <li>Hard Worker</li>
                            <li>Problem Solver</li>
                            <li>Team Player</li>
                            <li>Quick Learner</li>
                            <li>Easy Going</li>
                            <li>Adaptable</li>
                            <li>Creative</li>
                            <li>Flexible</li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
