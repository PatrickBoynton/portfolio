import {Component} from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="col-6">
                <div className="row">
                    <div className="card text-center mb-3">
                        <div className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code1.jpeg`} alt="Website"/>
                            <h3 className="card-header">Website 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dolorem
                                est
                                illum iusto nihil praesentium quaerat quasi quibusdam sapiente?</p>
                        </div>
                    </div>


                    <div className="card text-center ml-3 mb-3">
                        <div className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code2.jpeg`} alt="Website"/>
                            <h3 className="card-header">Website 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dolorem est
                                illum iusto nihil praesentium quaerat quasi quibusdam sapiente?</p>
                        </div>
                    </div>

                    <div className="card text-center mb-3">
                        <div className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code3.jpeg`} alt="Website"/>
                            <h3 className="card-header">Website 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dolorem est
                                illum iusto nihil praesentium quaerat quasi quibusdam sapiente?</p>
                        </div>
                    </div>

                    <div className="card text-center ml-3 mb-3">
                        <div className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code4.jpeg`} alt="Website"/>
                            <h3 className="card-header">Website 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dolorem est
                                illum iusto nihil praesentium quaerat quasi quibusdam sapiente?</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
