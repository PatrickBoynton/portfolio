import "./App.css";
import {Component} from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import {Switch, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <Switch>
                    <Route path="/works" component={Portfolio}/>
                    <Route path="/resume" component={Resume}/>
                    <Route path='/about' component={About}/>
                    <Route path="/" component={Home}/>
                </Switch>
                {/*<Footer/>*/}
            </>
        )
            ;
    }
}

export default App;
