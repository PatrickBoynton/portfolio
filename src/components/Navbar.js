import {Component} from "react";
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="p-3 position-fixed fixed-top">
                <ul className="nav navbar-collapse justify-content-center">
                    <li><NavLink style={{fontSize: '30px'}} exact to="/about">About</NavLink></li>
                    <li className="pl-5"><NavLink style={{fontSize: '30px'}} to="/works">My Work</NavLink></li>
                    <li className="pl-5"><NavLink style={{fontSize: '30px'}} to="/resume">Skills</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
