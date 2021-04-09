import {Component} from "react";

class Home extends Component {
    render() {
        return (
            <section className="home-container d-flex">
                <aside className="square-1">
                    <img className="main-img" src={`${process.env.PUBLIC_URL}/Main1.jpeg`} alt=""/>
                    <h1 className="home-header">Hi I'm Patrick Boynton</h1>
                    <h1 className="home-header-1">Passionate programmer</h1>
                    <h1 className="home-header-2">Life long musician</h1>
                </aside>
                <aside className="square-2">
                </aside>
            </section>
        );
    }
}

export default Home;
