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

});

class ArtistDetail extends Component {

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

            </div>
        );
    }
}

ArtistDetail.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ArtistDetail);