import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { withRouter } from 'react-router'


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        //backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class ArtistGrid extends Component {

    constructor(props) {
        super(props);
    }

    onHandleArtistTileClick(artistMbid) {
        this.props.history.push('/artists/' + artistMbid);
    }

    render() {
        const { classes, match, location, history } = this.props;

        return (
            <div className={classes.root}>
                <GridList
                    cellHeight={180}
                    cols={4}
                    className={classes.gridList}>
                    {this.props.favouriteArtists.topartists.artist.map(artist => (
                        <GridListTile
                            key={artist.name}>
                            <img src={artist.image['3']['#text']} alt={artist.name} />
                            <GridListTileBar
                                title={artist.name}
                                subtitle={<span>Playcount: {artist.playcount}</span>}
                                actionIcon={
                                    <IconButton
                                        className={classes.icon}
                                        onClick={(artistMbid) => this.onHandleArtistTileClick(artist.mbid)} >
                                        <InfoIcon />
                                    </IconButton>
                                } />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

ArtistGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};


export default compose(withRouter, withStyles(styles))(ArtistGrid);