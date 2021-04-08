import {Component} from "react";
import {NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <nav className="p-3 navbar-dark">
                <ul className="nav navbar-collapse justify-content-center">
                    <li><NavLink to="#"><i className="fa fa-linkedin" aria-hidden="true"/></NavLink></li>
                    <li className="pl-5"><NavLink to="#"><i className="fa fa-github" aria-hidden="true"/></NavLink></li>
                    <li className="pl-5"><NavLink to="#"><i className="fa fa-file" aria-hidden="true"/></NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Footer;
