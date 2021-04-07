import "./App.css";
import {Component} from "react";
import Portfolio from "./Portfolio";
import Aside from "./Aside";
import Sidebar from "./Sidebar";

class App extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <Sidebar/>
                    <Portfolio/>
                </div>
                <Aside/>
            </>
        )
            ;
    }
}

export default App;
