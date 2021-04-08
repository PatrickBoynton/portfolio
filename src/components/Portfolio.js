import {Component} from "react";

class Portfolio extends Component {
    render() {
        return (
            <div className="row align-baseline" style={{height: "85vh"}}>
                <div className="card w-25 h-75 m-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/NW.png`} className="card-img-top" alt="Night Watch"/>
                    <div className="card-body">
                        <h5 className="card-title">Night Watch</h5>
                        <p className="card-text">Night Watch is an application where the user signs up and gets
                            notifications via text to tell them when a planet star, or other celestial event is about to
                            happen. Tech used was Django, Celery (For automating texts and rise and set times), Skyfield
                            API (For calculating rise and set times) and React for the UI.</p>
                        <a href="#" className="btn btn-primary">Night Watch</a>
                    </div>
                </div>

                <div className="card w-25 h-75 m-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/Code2.jpeg`} className="card-img-top" alt="Night Watch"/>
                    <div className="card-body">
                        <h5 className="card-title">Galaxy News</h5>
                        <p className="card-text">Galaxy News is the first Django/React project I created using custom
                            users, and filtering by some sort of status. There was no external technology used, but the
                            challenge of filtering by different things and the user accounts made this memorable. It was
                            also my first experience with React Router.</p>
                        <a href="#" className="btn btn-primary">Galaxy News</a>
                    </div>
                </div>

                <div className="card w-25 h-75 m-4 text-center">
                    <img src={`${process.env.PUBLIC_URL}/PixelPerfect.png`} className="card-img-top" alt="Night Watch"/>
                    <div className="card-body">
                        <h5 className="card-title">Pixel Perfect</h5>
                        <p className="card-text">The first really big project I did, it took quite awhile, and while it
                            may not be exactly pixel perfect, I think it looks good enough for using little more
                            than HTML and CSS. Every bit of this was copied as nearly as exactly as I could get the text.</p>
                        <a href="#" className="btn btn-primary">Pixel Perfect</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;
