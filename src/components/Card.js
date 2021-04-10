import {Component} from 'react';

class Card extends Component{
    render() {
        return (
            <div className="overlay-card">
                <img className="image" src={`${process.env.PUBLIC_URL}${this.props.image}`} alt="A website"/>
                <div className="overlay">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                    <div className="d-flex">
                        <a className="card-icon" href={this.props.githubHref}><i className="fa fa-2x fa-github"/></a>
                        <a className="card-icon" href={this.props.viewSite}><i className="fa fa-2x fa-eye"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card
