import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';


const styles = theme => ({
    root: {
        width: '100%',
        // backgroundColor: theme.palette.background.paper,
    },
});

class TrackList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        console.log('TRACK_LIST_PROPS', this.props);

        return (
            <div className={classes.root}>
                <List>
                    {this.props.favouriteTracks.toptracks.track.map(track => (
                        <ListItem key={track.name} dense className={classes.listItem}>
                            <Avatar src={track.image['3']['#text']} alt={track.name} />
                            <ListItemText primary={track.name} secondary={track.artist.name} />
                            <ListItemSecondaryAction>
                                <ListItemText primary={`Playcount: ${track.playcount}`} />
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

TrackList.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(TrackList);