import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtistGrid from '../../components/Artist/ArtistGrid/ArtistGrid';
import * as artistActions from '../../store/actions/index';

class ArtistsPage extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onFetchFavouriteArtists();
    }

    render() {
        console.log('PROPS', this.props);
        let artistGrid = this.props.error ? <p>Error loading favouriteArtists</p> : <p>Loading...</p>;

        if (this.props.favouriteArtists) {
            artistGrid = (
                <ArtistGrid favouriteArtists={this.props.favouriteArtists} />
            );
        }
        return (
            <div>
                {artistGrid}
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        favouriteArtists: state.favouriteArtists,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchFavouriteArtists: () => dispatch(artistActions.fetchFavouriteArtists())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);