import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArtistGrid from '../../components/Artist/ArtistGrid/ArtistGrid';
import * as artistActions from '../../store/actions/index';

class ArtistsPage extends Component {


    componentDidMount() {
        console.log('COMPONENT_DID_MOUNT_PROPS', this.props);
        this.props.onFetchFavouriteArtists(this.props.user);
    }

    render() {
        console.log('RENDER_PROPS', this.props);
        let artistGrid = this.props.error ? <p>Error loading favouriteArtists</p> : <p>Loading...</p>;

        if (this.props.favouriteArtists) {
            artistGrid = (
                <ArtistGrid favouriteArtists={this.props.favouriteArtists} />
            );
        }

        return (
            <div>
                <h1>Favourite artists</h1>
                {artistGrid}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.loggedUser.user.name,
        favouriteArtists: state.artist.favouriteArtists,
        error: state.artist.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavouriteArtists: (username) => dispatch(artistActions.fetchFavouriteArtists(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);