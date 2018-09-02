import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Import MD Components
import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

class Intro extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes:props.classes
        }
    }
    render(){
      return(
        <Paper className={this.state.classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={this.state.classes.mainFeaturedPostContent}>
                  <Typography variant="display2" color="inherit" gutterBottom>
                    Team Svilup...
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    잠실에선 저희를 온벤저스라 부릅니다.
                    그런 말씀 말아주세요. 저희는 &apos;Svilup&apos;입니다.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          
      );
    }
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Intro);