import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
    card: {
        maxWidth: 345,

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};

class ProfileCard extends Component {


    constructor(props) {
        super(props);
        console.log('====================================');
        console.log(props);
        console.log('====================================');
    }


    render() {
        const { classes } = this.props;

        let cardMedia = (<div />)

        if (this.props.user.user.image[3]['#text']) {
            cardMedia = (
                <CardMedia
                    className={classes.media}
                    image={this.props.user.user.image[3]['#text']}
                    title="Contemplative Reptile"
                />
            )
        }

        return (
            <Card className={classes.card} justify="center">

                {cardMedia}
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.user.user.name}
                    </Typography>
                    <Typography component="p">
                        Playcount: {this.props.user.user.playcount}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

ProfileCard.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ProfileCard);