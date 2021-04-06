import {Component} from 'react';

class Sidebar extends Component{
    render() {
        return (
            <div className="text-center col-2">
                <h2>Patrick Boynton</h2>
                <img src={process.env.PUBLIC_URL + '/person-placeholder.jpeg'} alt="Me"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deleniti dolorum facere facilis, perspiciatis porro quam quas sapiente sit!</p>
            </div>
        );
    }
}

export default Sidebar
