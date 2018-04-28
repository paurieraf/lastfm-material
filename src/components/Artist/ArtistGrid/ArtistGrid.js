import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
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

        console.log('====================================');
        console.log(props);
        console.log('====================================');
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList} cols={4}>
                    {this.props.favouriteArtists.topartists.artist.map(artist => (
                        <GridListTile key={artist.name}>
                            <img src={artist.image['3']['#text']} alt={artist.name} />
                            <GridListTileBar
                                title={artist.name}
                                subtitle={<span>Playcount: {artist.playcount}</span>} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

ArtistGrid.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ArtistGrid);