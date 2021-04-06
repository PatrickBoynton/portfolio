import {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <div className="text-center">
                <h2>Contact</h2>
                <ul className="list-group d-flex">
                    <li className="list-group-item" >LinkedIn</li>
                    <li className="list-group-item" >Facebook</li>
                    <li className="list-group-item" >GitHub</li>
                </ul>
            </div>
        );
    }
}

export default Footer
