import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlbumGrid from '../../../components/Album/AlbumGrid/AlbumGrid';
import * as albumActions from '../../../store/actions/index';

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
        favouriteAlbums: state.album.favouriteAlbums,
        error: state.album.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavouriteAlbums: (username) => dispatch(albumActions.fetchFavouriteAlbums(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);