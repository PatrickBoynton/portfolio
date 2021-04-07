import {Component} from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="col-9">
                <div className="row ml-5">
                    <div style={{marginRight: "79px"}} className="card text-center mb-3">
                        <div style={{paddingTop: "30px"}} className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code1.jpeg`} alt="Website"/>
                            <h3 style={{border: "none"}} className="card-header">Night Watch</h3>
                            <p>A full CRUD website built using React and Django, and Django-Rest-Framework, with Celery, Twilio,
                                and Skyfield API for calculating the rise and set times automatically.
                                The idea is that people will sign up, and be be alerted to the various stellar events,
                                like solar eclipses, or the rise time for your favorite planet or star. (My favorite
                                planet is mars)
                            </p>
                        </div>
                    </div>


                    <div className="card text-center ml-3 mb-3">
                        <div style={{paddingTop: "30px"}} className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code2.jpeg`} alt="Website"/>
                            <h3 style={{border: "none"}} className="card-header">Galaxy News</h3>
                            <p>A space themed news app using full CRUD and custom users. It also features filtering
                                based on article type, has a space theme, but could be any kind of news.</p>
                        </div>
                    </div>

                    <div style={{marginRight: "79px"}} className="card text-center mb-3">
                        <div className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code3.jpeg`} alt="Website"/>
                            <h3 style={{border: "none"}} className="card-header">Pixel Perfect`</h3>
                            <p>A pure HTML and CSS attempt at getting as close to the provided PDF as possible.</p>
                        </div>
                    </div>

                    <div className="card text-center ml-3 mb-3">
                        <div className="card-img-top">
                            <img src={`${process.env.PUBLIC_URL}/Code4.jpeg`} alt="Website"/>
                            <h3 style={{border: "none"}} className="card-header">Website 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur dolorem
                                est
                                illum iusto nihil praesentium quaerat quasi quibusdam sapiente?</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
