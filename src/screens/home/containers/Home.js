import React, { Component } from 'react';
import { HomeComponent } from '../components'
import { getVideos } from '../actions';

class HomeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: {},
            shouldShowModal: false,
            keyword: 'react.js'
        }
    }

    componentDidMount() {
        getVideos(this.state.keyword, (videos) => {
            this.setState({ videos })
        })
    }

    searchVideos = () => {
        getVideos(this.state.keyword, (videos) => {
            this.setState({ videos })
        })
    }

    handleChange=(key, value)=>{
        this.setState({[key]: value})
    }

    render() {
        const { videos, selectedVideo, shouldShowModal, keyword } = this.state
        return (
            <HomeComponent videos={videos}
            handleChange={this.handleChange}
            shouldShowModal={shouldShowModal}
            selectedVideo={selectedVideo}
            searchVideos={this.searchVideos}
            keyword={keyword}/>

        )
    }
}

export default HomeContainer;
