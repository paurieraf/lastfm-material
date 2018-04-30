import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArtistGrid from '../../../components/Artist/ArtistGrid/ArtistGrid';
import * as artistActions from '../../../store/actions/index';

class ArtistsPage extends Component {

    componentDidMount() {
        console.log('COMPONENT_DID_MOUNT_PROPS', this.props);
        if (this.props.loggedUser) {
            console.log('FETCHING_FAV_ARTISTS');
            this.props.onFetchFavouriteArtists(this.props.loggedUser.user.name);
        }
    }

    render() {
        console.log('RENDER_PROPS', this.props);
        let artistGrid = this.props.error
            ? <p>Error loading favouriteArtists</p>
            : <p>Loading...</p>;

        if (this.props.favouriteArtists) {
            artistGrid = (<ArtistGrid favouriteArtists={this.props.favouriteArtists} />);
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
        loggedUser: state.user.loggedUser,
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