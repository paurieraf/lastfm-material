import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackList from '../../../components/Track/TrackList/TrackList';
import * as trackActions from '../../../store/actions/index';

class TracksPage extends Component {

    componentDidMount() {
        if (this.props.loggedUser) {
            this.props.onFetchFavouriteTracks(this.props.loggedUser.user.name);
        }

    }

    render() {
        let trackList = this.props.error ? <p>Error loading favourite albums</p> : <p>Loading...</p>;

        if (this.props.favouriteTracks) {
            trackList = (
                <TrackList favouriteTracks={this.props.favouriteTracks} />
            );
        }

        return (
            <div>
                <h1>Favourite tracks</h1>
                {trackList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.user.loggedUser,
        favouriteTracks: state.track.favouriteTracks,
        error: state.track.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavouriteTracks: (username) => dispatch(trackActions.fetchFavouriteTracks(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksPage);