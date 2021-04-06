import {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <div className="text-center">
                <h2>Contact</h2>
                <ul className="list-group">
                    <li style={{color: '#0A66C2'}} className="list-group-item"><i className="fa fa-linkedin" aria-hidden="true"></i></li>
                    <li style={{color: '#0E8DF1'}} className="list-group-item"><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
                    <li className="list-group-item"><i className="fa fa-github" aria-hidden="true"></i></li>
                    <li className="list-group-item"><i className="fa fa-envelope" aria-hidden="true"></i></li>
                </ul>
            </div>
        );
    }
}

export default Footer;
