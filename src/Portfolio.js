import {Component} from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="col-6">
                <h2>Portfolio</h2>
                <img src={process.env.PUBLIC_URL + "/Code1.jpeg"} alt="Website"/>
                <img src={process.env.PUBLIC_URL + "/Code2.jpeg"} alt="Website"/>
                <img src={process.env.PUBLIC_URL + "/Code3.jpeg"} alt="Website"/>
                <img src={process.env.PUBLIC_URL + "/Code4.jpeg"} alt="Website"/>
            </div>
        );
    }
}

export default Portfolio;
