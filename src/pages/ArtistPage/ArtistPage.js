import React, { Component } from 'react';
import ArtistGrid from '../../components/Artist/ArtistGrid/ArtistGrid';

class ArtistPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ArtistGrid />
            </div>
        );
    }
}

export default ArtistPage;