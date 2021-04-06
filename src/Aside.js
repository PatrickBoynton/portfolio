import {Component} from 'react';

class Aside extends Component {
    render() {
        return (
            <div className="col-2">
                <h2>Tech skills</h2>
                <ul className="list-group">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item" >CSS</li>
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item" >React</li>
                    <li className="list-group-item">Python</li>
                    <li className="list-group-item" >Django</li>
                </ul>
            </div>
        );
    }
}

export default  Aside
