import React, { Component } from "react";
import Testimonials from './Testimonials/testimonials';

class Home extends Component {
    render() {
        return (
            <div className="bg" id='Home' style={{background:'#24283d', height:730}}>
                <Testimonials />
            </div>
        );
    }
}

export default Home;
