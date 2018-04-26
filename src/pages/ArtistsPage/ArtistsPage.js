import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtistGrid from '../../components/Artist/ArtistGrid/ArtistGrid';
import axios from 'axios';
import * as actionCreators from '../../store/actions/actions';

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
                this.props.onGetFavouriteArtists(response);
            });
    }

    render() {
        return (
            <div>

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
        onGetFavouriteArtists: (response) => dispatch(actionCreators.getFavouriteArtists(response))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);