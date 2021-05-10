import {Component} from 'react';

class Card extends Component{
    render() {
        return (
            <div className="overlay-card" style={{marginTop: '5rem'}}>
                <img className="image" src={`${process.env.PUBLIC_URL}${this.props.image}`} alt="A website"/>
                <div style={{padding: '2rem'}} className="overlay">
                    <h2 style={{fontSize: '3.4rem'}}>{this.props.title}</h2>
                    <p className="card-text">{this.props.text}</p>
                    <div className="d-flex">
                        {
                            this.props.githubHref
                            ?
                                <a style={{cursor: 'pointer'}} className="card-icon" href={this.props.githubHref}><i className="fab fa-2x fa-github"/></a>
                           :
                           null
                        }
                        {
                            this.props.viewSite
                            ?
                                <a style={{cursor: 'pointer'}} className="card-icon" href={this.props.viewSite}><i className="fa fa-2x fa-eye"/></a>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Card
