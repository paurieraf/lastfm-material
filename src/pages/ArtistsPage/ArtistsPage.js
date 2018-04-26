import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtistGrid from '../../components/Artist/ArtistGrid/ArtistGrid';
import axios from 'axios';
import * as actionTypes from '../../store/actions';

class ArtistsPage extends Component {
    state = {
        posts: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //     axios.get('https://jsonplaceholder.typicode.com/posts')
        //         .then(response => {
        //             this.setState({ posts: response.data });
        //         });
        this.props.getFavouriteArtists;
    }

    render() {
        return (
            <div>
                <ArtistGrid favouriteArtists={this.props.favouriteArtists} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        favouriteArtists: state.favouriteArtists
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getFavouriteArtists: () => dispatch({ type: actionTypes.GET_FAVOURITE_ARTISTS })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);