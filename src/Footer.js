import {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <div style={{marginTop: '46px'}} className="text-center">
                <h2>Contact</h2>
                <ul className="list-group flex-row justify-content-center">
                    <li className="list-group-item" style={{color: '#0A66C2', border: 'none', padding:'0'}}><i className="fa fa-linkedin list-group-item" aria-hidden="true"/></li>
                    <li className="list-group-item" style={{color: '#0E8DF1', border: 'none', padding:'0'}}><i className="fa fa-facebook-square list-group-item" aria-hidden="true"/></li>
                    <li className="list-group-item" style={{border: 'none', padding:'0'}}><i className="fa fa-github list-group-item" aria-hidden="true"/></li>
                    <li className="list-group-item" style={{color:'#BB0000', border: 'none', padding:'0'}}><i className="fa fa-envelope list-group-item" aria-hidden="true"/></li>
                </ul>
            </div>
        );
    }
}

export default Footer;
