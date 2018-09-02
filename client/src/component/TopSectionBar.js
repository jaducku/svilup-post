import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const sections = [
    'Web',
    'Algorithm',
    'Design Pattern',
    'Data Science',
    'IT Trend'
  ];

const styles = theme => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
});

class TopSectionBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes:props.classes
        }
    }

    render = () => {
        return(
            <Toolbar variant="dense" className={this.state.classes.toolbarSecondary}>
                {sections.map(section => (
            <Typography color="inherit" noWrap key={section}>
                {section}
            </Typography>
            ))}
            </Toolbar>
        );
    }
}

export default withStyles(styles)(TopSectionBar);