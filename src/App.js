import "./App.css";
import {Component} from "react";
import Portfolio from "./Portfolio";
import Aside from "./Aside";
import Sidebar from "./Sidebar";

class App extends Component {
    render() {
        return (
            <>
                <div className="row mt-5 mx-4">
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
