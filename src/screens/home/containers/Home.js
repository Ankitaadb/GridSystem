import React, { Component } from 'react';
import { HomeComponent } from '../components'
import '../styles/style.css';

class HomeContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <HomeComponent/>

        )
    }
}

export default HomeContainer;
