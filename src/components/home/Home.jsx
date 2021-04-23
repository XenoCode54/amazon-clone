import React, {Component} from 'react';
import {HomeBody, HomeContainer} from "./homeStyles";

class Home extends Component {
    render() {
        return (
            //best way to media query in react
            <HomeBody>
                <HomeContainer>
                </HomeContainer>
            </HomeBody>
        );
    }
}

export default Home;
