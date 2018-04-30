import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArtistDetail from '../../../components/Artist/ArtistDetail/ArtistDetail';
import * as artistActions from '../../../store/actions/index';

class ArtistDetailPage extends Component {

    componentDidMount() {
        if (this.props.loggedUser) {
            console.log('FETCHING_ARTIST_INFO');
            //FETCH ARTIST INFO
        }
    }

    render() {
        console.log('RENDER_PROPS', this.props);
        let artistDetail = this.props.error
            ? <p>Error loading artist info</p>
            : <p>Loading...</p>;

        if (this.props.currentArtist) {
            artistDetail = (<ArtistDetail favouriteArtists={this.props.favouriteArtists} />);
        }

        return (
            <div>
                <h1>{this.props.currentArtist.name}</h1>
                {artistDetail}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        currentArtist: state.artist.currentArtist,
        error: state.artist.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchArtistInfo: (artistMbid) => dispatch(artistActions.fetchArtistInfo(artistMbid))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetailPage);