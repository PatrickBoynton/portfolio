import {Component} from "react";
import {NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <nav className="p-3 position-fixed fixed-bottom">
                <ul className="nav navbar-collapse justify-content-center">
                    <li><NavLink to="#"><i className="fab fa-linkedin" aria-hidden="true"/></NavLink></li>
                    <li className="pl-5"><NavLink to="#"><i className="fab fa-github" aria-hidden="true"/></NavLink></li>
                    <li className="pl-5"><NavLink to="#"><i className="fa fa-file" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Click to download resume"
                                                            aria-hidden="true"/></NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Footer;
