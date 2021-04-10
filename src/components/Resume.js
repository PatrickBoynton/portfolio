import {Component} from "react";

class Resume extends Component {
    render() {
        return (
            <section>
                <h1>Education</h1>
                <p>Associates in Science Greenville Technical College</p>
                <p>Carolina Code School</p>
                <h1>Tech Skills</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Handlebars</li>
                    <li>Bootstrap</li>
                    <li>SQL (Postgres, MSSQL, SQLite)</li>
                </ul>

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
            </section>
        );
    }
}

export default Resume;
