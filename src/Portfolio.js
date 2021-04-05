import {Component} from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Portfolio</h2>
                    <div className="col-12">
                        <img src={process.env.PUBLIC_URL + '/Code1.jpeg'} alt="Website"/>
                        <img src={process.env.PUBLIC_URL + '/Code2.jpeg'} alt="Website"/>
                        <img src={process.env.PUBLIC_URL + '/Code3.jpeg'} alt="Website"/>
                        <img src={process.env.PUBLIC_URL + '/Code4.jpeg'} alt="Website"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
