import React, { Component } from 'react';
import ArtistGrid from '../../components/Artist/ArtistGrid/ArtistGrid';
import axios from 'axios';

class ArtistsPage extends Component {
    state = {
        posts: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data });
            });
    }

    render() {
        const posts = this.state.posts;
        console.log('POSTS', posts);
        return (
            <div>
                <ArtistGrid posts={posts} />
            </div>
        );

    }
}

export default ArtistsPage;