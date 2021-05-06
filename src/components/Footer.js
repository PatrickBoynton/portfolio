import {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <nav className="p-3 position-fixed fixed-bottom">
                <ul className="nav navbar-collapse justify-content-center">
                    <li><a href="https://www.linkedin.com/in/patrick-boynton-a0a532119/"><i className="fab fa-linkedin"
                                                                                            aria-hidden="true"/>
                    </a>
                    </li>
                    <li className="pl-5"><a href="https://github.com/PatrickBoynton/"><i className="fab fa-github"
                                                                                         aria-hidden="true"/>
                    </a>
                    </li>
                    <li className="pl-5"><a href={process.env.PUBLIC_URL + '/resume1.docx'}><i className="fa fa-file" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Click to download resume"
                                                        aria-hidden="true"/>
                    </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Footer;
