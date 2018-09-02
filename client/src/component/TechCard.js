import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import {Card,Chip,Avatar,
        CardActions,
        CardContent,
        CardMedia,
        Typography,
        Grid,
        Collapse,
        IconButton
} from '@material-ui/core/';

import {ExpandMore,
        Share 
} from '@material-ui/icons/';
const styles = {
  card: {
    maxWidth: 345,
    headline: 300
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'contain',
  },
};

class TechCard extends Component{
  constructor(props){
    super(props);
    this.state = {
        classes:props.classes,
        expanded: false
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render(){
    return(
      <Grid item key={this.state.classes.card} sm={6} md={4} lg={3}>
      <Card className={this.state.classes.card}>
        <CardMedia
          component="img"
          className={this.state.classes.media}
          height="140"
          image={this.props.imgUrl}
          title="Contemplative Reptile"
        />
        <CardContent className={this.state.classes.cardContent}>
          <Typography gutterBottom variant="headline" component="h2">
            {this.props.name}
          </Typography>
          <Typography>
            by {this.props.foundation}
          </Typography>
        </CardContent>
        <CardActions className={this.state.classes.actions} disableActionSpacing>
          <IconButton aria-label="Share" href={this.props.url}>
            <Share />
          </IconButton>
          <IconButton
            className={classnames(this.state.classes.expand, {
              [this.state.classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more">
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Description
            </Typography>
            <Typography paragraph>
              {this.props.desc}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
    );
  }
}

TechCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TechCard);