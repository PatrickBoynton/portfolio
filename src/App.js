import "./App.css";
import {Component} from "react";
import Portfolio from "./Portfolio";
import Aside from "./Aside";
import Sidebar from "./Sidebar";

class App extends Component {
    render() {
        return (
            <>
                <Sidebar/>
                <Portfolio/>
                <Aside/>
            </>
        );
    }
}

export default App;
