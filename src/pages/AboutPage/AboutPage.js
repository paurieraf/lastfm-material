import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import Typography from 'material-ui/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class AboutPage extends Component {
    componentDidMount() {
        console.log('COMPONENT_DID_MOUNT_PROPS', this.props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h1>About</h1>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         loggedUser: state.user.loggedUser,
//         favouriteAlbums: state.album.favouriteAlbums,
//         error: state.album.error
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchFavouriteAlbums: (username) => dispatch(albumActions.fetchFavouriteAlbums(username))
//     };
// }

AboutPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
export default withStyles(styles)(AboutPage);
