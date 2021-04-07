import {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <nav className="p-3 navbar-dark">
                <ul className="nav navbar-collapse justify-content-center">
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"/></a></li>
                    <li className="pl-5"><a href="#"><i className="fa fa-github" aria-hidden="true"/></a></li>
                    <li className="pl-5"><a href="#"><i className="fa fa-file" aria-hidden="true"/></a></li>
                </ul>
            </nav>
        );
    }
}

export default Footer;
