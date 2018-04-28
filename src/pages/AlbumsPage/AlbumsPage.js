import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumGrid from '../../components/Album/AlbumGrid/AlbumGrid';
import * as artistActions from '../../store/actions/index';

class AlbumsPage extends Component {


    componentDidMount() {
        console.log('COMPONENT_DID_MOUNT_PROPS', this.props);
        if (this.props.loggedUser) {
            this.props.onFetchFavouriteAlbums(this.props.loggedUser.user.name);
        }

    }

    render() {
        console.log('RENDER_PROPS', this.props);
        let albumGrid = this.props.error ? <p>Error loading favourite albums</p> : <p>Loading...</p>;

        if (this.props.favouriteAlbums) {
            albumGrid = (
                <AlbumGrid favouriteAlbums={this.props.favouriteAlbums} />
            );
        }

        return (
            <div>
                <h1>Favourite albums</h1>
                {albumGrid}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        favouriteAlbums: state.artist.favouriteAlbums,
        error: state.artist.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavouriteAlbums: (username) => dispatch(artistActions.fetchFavouriteArtists(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);