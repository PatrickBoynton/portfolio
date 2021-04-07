import {Component} from 'react';
import Education from "./Education";
import Footer from "./Footer";

class Sidebar extends Component{
    render() {
        return (
            <div style={{marginTop: '20px'}} className="text-center col-3">
                <h2>Patrick Boynton</h2>

                <img style={{width: '60%'}} className="rounded-circle my-pic mt-3 mb-3" src={`${process.env.PUBLIC_URL}/person-placeholder.jpeg`} alt="Me"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad deleniti dolorum facere facilis, perspiciatis porro quam quas sapiente sit!</p>
                <Education/>
                <Footer/>
            </div>
        );
    }
}

export default Sidebar
