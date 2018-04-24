import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

class ArtistGrid extends Component {
    styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        gridList: {
            width: '100%',
            overflowY: 'auto',
        },
    };

    tilesData = [];

    constructor(props) {
        super(props);
        this.tilesData = props.posts;
        console.log(props);
    }

    render() {
        return (
            <div style={this.styles.root}>
                <GridList
                    cols={2}
                    cellHeight={200}
                    padding={1}
                    style={this.styles.gridList}>

                    {this.tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            actionIcon={<IconButton></IconButton>}
                            actionPosition="left"
                            titlePosition="top"
                            titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            cols={tile.featured ? 2 : 1}
                            rows={tile.featured ? 2 : 1}>
                            <img src={tile.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default ArtistGrid;