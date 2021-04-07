import "./App.css";
import {Component} from "react";
import Portfolio from "./Portfolio";
import Sidebar from "./Sidebar";

class App extends Component {
    render() {
        return (
            <>
                <div className="row m-5">
                    <Sidebar/>
                    <Portfolio/>
                </div>
            </>
        )
            ;
    }
}

export default App;
