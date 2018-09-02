import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getTeches } from '../queries/queries';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import {CssBaseline,
        Grid,
        Typography
} from '@material-ui/core/';

import TechCard from './TechCard';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

class TechCardList extends Component {
    constructor(props){
        super(props);
        this.state = {
            classes:props.classes
        }
    }

    displayTeches = ()=>{
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading teches...</div> );
        } else {
            return data.teches.map(tech => {
                return (
                  <TechCard key={tech.id} 
                            id={tech.id} 
                            name={tech.name}
                            url={tech.url}
                            foundation={tech.foundation}
                            imgUrl={tech.imgUrl}
                            type={tech.type}
                            desc={tech.desc}/>
                );
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                <main>
                    <div className={classNames(this.state.classes.layout, this.state.classes.cardGrid)}>
                    <Typography variant="display1" align="center" color="textPrimary" gutterBottom>
                        사용기술
                    </Typography>
                    <Grid container spacing={40}>
                        {this.displayTeches()}
                    </Grid>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

TechCardList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default graphql(getTeches)(withStyles(styles)(TechCardList));