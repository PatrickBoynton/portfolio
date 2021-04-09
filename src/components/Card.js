import {Component} from 'react';

class Card extends Component{
    render() {
        return (
            <div className="card w-25 h-75 m-4">
                <img src={`${process.env.PUBLIC_URL}${this.props.image}`} className="card-img-top card-img" alt={this.props.alt}/>
                <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2>
                    <p className="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Card
