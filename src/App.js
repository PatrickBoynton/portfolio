import "./App.css";
import {Component} from "react";
import Navbar from "./components/Navbar";
import About from './components/About';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <About/>
                <Footer/>
            </>
        )
            ;
    }
}

export default App;
