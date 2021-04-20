import { Component } from "react";
import Card from "./Card";

class Portfolio extends Component {
  render() {
    return (
      <div
        className="row align-baseline card-container"
        style={{ height: "85vh" }}>
        <Card
          image="/NW.png"
          title="Night Watch"
          alt="Night Watch"
          githubHref="https://github.com/PatrickBoynton/night_watch"
          viewSite="https://night-watch-jpb3.herokuapp.com/celestial-list"
          text="Night Watch is an application where the user signs up and gets
                        notifications via text to tell them when a planet star, or other celestial event is about to
                        happen. Currently the Twilio notifications are turned off.  However the rise and set times should be current.
                        There is also a filter/search because there are just some names I can't spell, and I assume others can't either.
                        This application also features full crud, a user can create their own events to be reminded of, whether that be an astronomy party, or some thing in the night sky not featured on my site.
                        Tech used was Django, Celery (For automating texts and rise and set times), Skyfield
                        API (For calculating rise and set times), Twilio for the text messages,  and React for the UI. This was my final project at Carolina Code School."
        />

        <Card
          image="/Code2.jpeg"
          title="Galaxy News"
          alt="Galaxy News"
          githubHref="https://github.com/PatrickBoynton/news-app/"
          text="Galaxy News is the first Django/React project I created using custom
                            users, and filtering by some sort of status. There was no external technology used, but the
                            challenge of filtering by different things and the user accounts made this memorable.
                            You will notice that I used some things I learned from this application in the Night Watch application. This particular has a good bit of work in the back end,
                            so it is more about the code than the way it looks. It was
                            also my first experience with React Router. This was one of the final projects for Carolina Code School"
        />

        <Card
          image="/PixelPerfect.png"
          alt="Pixel Perfect"
          title="Pixel Perfect"
          githubHref="https://github.com/PatrickBoynton/pixel-perfect"
          viewSite="https://patrickboynton.github.io/pixel-perfect/"
          text="Pixel Perfect was the first large project I did for Carolina Code School.
                      The goal was to get it as close to the pdf as possible.
                      The tech used was plain HTML and CSS, with an app that you could check to see how closely you were to the actual design of the mockup.
                      You could if you wanted change the theme to whatever you wanted,
                      but the original theme was travel blogs, and I like travel, so that was my theme."
        />

        <Card
          image="/Code4.jpeg"
          title="Color Clock"
          text='This was one of the first "big" projects we did at CCS, it was nothing more than a simple JS Clock that had a little moving progress bar.
                            Nothing more than pure JavaScript HTML, and CSS.
                            It is a good example of how ar I have come from the start of class.
                            Basically the clock changes color depending on the time of day, and the progress bar moves with the seconds.'
        />
      </div>
    );
  }
}

export default Portfolio;
