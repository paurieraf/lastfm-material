import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';


const styles = theme => ({
    root: {},
    card: {
        maxWidth: '50%',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
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
            <Grid container justify="center" className={classes.root}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={this.props.currentArtist.image[3]['#text']}
                        title={this.props.currentArtist.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {this.props.currentArtist.name}
                        </Typography>
                        <Typography component="p" dangerouslySetInnerHTML={{ __html: this.props.currentArtist.bio.summary }}>
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
        );
    }
}

ArtistDetail.propTypes = {
    classes: PropTypes.object.isRequired
};


export default withStyles(styles)(ArtistDetail);