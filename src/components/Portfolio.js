import {Component} from "react";
import Card from "./Card";

class Portfolio extends Component {
    render() {
        return (
            <div className="row align-baseline p-4" style={{height: "85vh"}}>
                <Card image='/NW.png'
                      title='Night Watch'
                      alt='Night Watch'
                      text='Night Watch is an application where the user signs up and gets
                        notifications via text to tell them when a planet star, or other celestial event is about to
                        happen. Tech used was Django, Celery (For automating texts and rise and set times), Skyfield
                        API (For calculating rise and set times) and React for the UI.'/>

                 <Card image='/Code2.jpeg'
                       title='Galaxy News'
                       alt='Galaxy News'
                       text='Galaxy News is the first Django/React project I created using custom
                            users, and filtering by some sort of status. There was no external technology used, but the
                            challenge of filtering by different things and the user accounts made this memorable. It was
                            also my first experience with React Router.'/>

                <Card image='/PixelPerfect.png'
                      alt='Pixel Perfect'
                      title='Pixel Perfect'
                      text='The first really big project I did, it took quite awhile, and while it
                            may not be exactly pixel perfect, I think it looks good enough for using little more
                            than HTML and CSS. Every bit of this was copied as nearly as exactly as I could get the text.'/>

            </div>
        );
    }
}

export default Portfolio;
