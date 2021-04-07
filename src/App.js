import "./App.css";
import {Component} from "react";
import Portfolio from "./Portfolio";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <>
                <Sidebar/>
                <Portfolio/>
                <Footer/>
            </>
        )
            ;
    }
}

export default App;
