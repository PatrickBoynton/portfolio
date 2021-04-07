import {Component} from "react";

class Aside extends Component {
    render() {
        return (
            <div style={{border: '4px solid red'}} className="col-2 text-center">
                <h2>Tech skills</h2>
                <ul className="list-group">
                    <li style={{border: "none"}} className="list-group-item">HTML</li>
                    <li style={{border: "none"}} className="list-group-item">CSS</li>
                    <li style={{border: "none"}} className="list-group-item">JavaScript</li>
                    <li style={{border: "none"}} className="list-group-item">React</li>
                    <li style={{border: "none"}} className="list-group-item">Python</li>
                    <li style={{border: "none"}} className="list-group-item">Django</li>
                </ul>
                <h2>Soft Skills</h2>
                <ul className="list-group">
                    <li style={{border: "none"}} className="list-group-item">Hard Worker</li>
                    <li style={{border: "none"}} className="list-group-item">Team Player</li>
                    <li style={{border: "none"}} className="list-group-item">Problem Solver</li>
                </ul>
            </div>
        );
    }
}

export default Aside;
