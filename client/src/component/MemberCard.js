import React,{ Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
const styles = theme => ({
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
  });

class MemberCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes:props.classes
        }
    }

    render=()=>{
        return(
            <Grid item key={this.props.key} xs={12} md={6}>
            <Card className={this.state.classes.card}>
              <div className={this.state.classes.cardDetails}>
                <CardContent>
                  <Typography variant="headline">{this.props.name}</Typography>
                  <Typography variant="subheading" color="textSecondary">
                    {this.props.section}
                  </Typography>
                  <Typography variant="subheading" color="primary" paragraph>
                    {this.props.intro}
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                  className={this.state.classes.cardMedia}
                  image={this.props.imgUrl} // eslint-disable-line max-len
                  title='Image title'/>
            </Card>
          </Grid>
        );
    }
}

MemberCard.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
  export default withStyles(styles)(MemberCard);
