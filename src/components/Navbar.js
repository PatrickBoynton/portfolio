import {Component} from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="p-3 navbar-dark">
                <ul className="nav navbar-collapse justify-content-center">
                    <li><a href="#">About</a></li>
                    <li className="pl-5"><a href="#">My Work</a></li>
                    <li className="pl-5"><a href="#">Resume</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
