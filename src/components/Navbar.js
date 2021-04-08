import {Component} from "react";
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="p-3 navbar-dark">
                <ul className="nav navbar-collapse justify-content-center">
                    <li><NavLink exact to="/">About</NavLink></li>
                    <li className="pl-5"><NavLink to="/works">My Work</NavLink></li>
                    <li className="pl-5"><NavLink to="/resume">Skills</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
