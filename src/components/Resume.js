import {Component} from "react";

class Resume extends Component {
    render() {
        return (
            <section style={{margin: "2rem"}}>
                <div className="m-auto text-center education">
                    <h1>Education</h1>
                    <h2>Associates in Science Greenville Technical College</h2>
                    <p>This is regular science, as in geology and astronomy, not CS.</p>
                    <time style={{fontSize: "1.3rem"}}>Graduated March 2020</time>
                    <h2>Carolina Code School</h2>
                    <time style={{fontSize: "1.3rem"}}>Dec 13 2020 - April 2nd 2021</time>
                </div>
                <div className="d-flex skills mt-4 justify-content-center">
                    <div className="text-center">
                        <h1>Tech Skills</h1>
                        <ul style={{marginBottom: '3.5rem'}}>
                            <li style={{color: "#D35635"}}> <i className="fab fa-html5"/> HTML 5</li>
                            <li style={{color: "#3077B8"}}> <i className="fab fa-css3"/> CSS 3</li>
                            <li style={{color: "#D3C045"}}><i className="fab fa-js-square"/> JavaScript</li>
                            <li style={{color: "#609BB0"}}> <i className="fab fa-react"/> React</li>
                            <li className="python"> <i className="fab fa-python"/> Python</li>
                            <li style={{color: "#3E7959"}}><i className="fab fa-python"/> Django</li>
                            <h2>Extras: </h2>
                            <li style={{color: "#DA773A"}}>Handlebars</li>
                            <li style={{color: "#8B5CD0"}}><i className="fab fa-bootstrap"/> Bootstrap</li>
                            <li style={{color: "#2A6EBA"}}><i className="fa fa-database"/> SQL (Postgres, MSSQL, SQLite) and Redis</li>
                            <li style={{color: "#8D6EC9"}}><i className="fab fa-microsoft"/> C#</li>
                            <li style={{color: "#4836C6"}}><i className="fab fa-microsoft"/> .Net Core/.Net</li>
                        </ul>
                    </div>
                    <div className="soft-skills text-center">
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
