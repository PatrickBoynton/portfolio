import {Component} from "react";

class Resume extends Component {
    render() {
        return (
            <section style={{margin: '10rem'}}>
                <div className="education">
                    <h1>Education</h1>
                    <h2>Associates in Science Greenville Technical College</h2>
                    <time style={{fontSize: '1.3rem'}}>Graduated March 2020</time>
                    <h2>Carolina Code School</h2>
                    <time style={{fontSize: '1.3rem'}}>Dec 13 2020 - April 2nd 2021</time>
                </div>
                    <h1>Tech Skills</h1>
                <ul className="d-flex">
                    <li style={{color: '#D35635'}}>HTML</li>
                    <li style={{color: '#3077B8'}}> CSS</li>
                    <li style={{color: '#D3C045'}}>JavaScript</li>
                    <li style={{color: '#609BB0'}}> React</li>
                    <li className="python"> Python</li>
                    <li style={{color: '#3E7959'}}>Django</li>
                    <h2>Extras: </h2>
                    <li style={{color: '#DA773A'}}>Handlebars</li>
                    <li style={{color: '#8B5CD0'}}>Bootstrap</li>
                    <li style={{color: '#2A6EBA'}}>SQL (Postgres, MSSQL, SQLite)</li>
                    <li style={{color: '#8D6EC9'}}>C#</li>
                    <li style={{color: '#4836C6'}}>.Net Core/.Net</li>
                </ul>

                <h1>Soft Skills</h1>
                <p>These are some, but not all of my soft skills.</p>
                <ul className="d-flex">
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
