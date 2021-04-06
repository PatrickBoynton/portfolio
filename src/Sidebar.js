import {Component} from 'react';

class Sidebar extends Component{
    render() {
        return (
            <div className="text-center col-4">
                <h2>Patrick Boynton</h2>

                <img className="rounded-circle my-pic mt-3 mb-3" src={`${process.env.PUBLIC_URL}/person-placeholder.jpeg`} alt="Me"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deleniti dolorum facere facilis, perspiciatis porro quam quas sapiente sit!</p>
            </div>
        );
    }
}

export default Sidebar
