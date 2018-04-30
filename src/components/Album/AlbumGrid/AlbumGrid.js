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
        //backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class AlbumGrid extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <GridList cellHeight={180} className={classes.gridList} cols={4}>
                    {this.props.favouriteAlbums.topalbums.album.map(album => (
                        <GridListTile key={album.name}>
                            <img src={album.image['3']['#text']} alt={album.name} />
                            <GridListTileBar
                                title={album.name}
                                subtitle={<span>Playcount: {album.playcount}</span>} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

AlbumGrid.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(AlbumGrid);