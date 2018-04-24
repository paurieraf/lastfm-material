import React, { Component } from 'react';
import ArtistGrid from '../../components/Artist/ArtistGrid/ArtistGrid';
import axios from 'axios';

class ArtistsPage extends Component {
    state = {

    }

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <ArtistGrid />
            </div>
        );
    }
}

export default ArtistsPage;