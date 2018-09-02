import {React, Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {TextField} from '@material-ui/core/';
 
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  }
});

const shares = [
  {
    value: 'ML',
    label: '업무리더',
  },
  {
    value: 'MA',
    label: '부서원',
  },
];

class AddPost extends React.Component {
    constructor(props){
        super(props);
        const dateFormat = require('dateformat');
        const now = dateFormat(new Date(),'yyyy-mm-dd');

        this.state = {
            share: '업무리더',
            now: now
        }
    }
    
    componentDidMount(){
        
    }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.now);
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
            id="share"
            select
            label="공유대상"
            fullWidth
            value={this.state.share}
            onChange={this.handleChange('share')}
            SelectProps={{
                native: true,
                MenuProps: {
                className: classes.menu,
                },
            }}
            InputLabelProps={{
                shrink: true,
            }}
            margin="normal">
            {shares.map(option => (
                <option key={option.value} value={option.value}>
                {option.label}
                </option>
            ))}
            ))}
        </TextField>
        <TextField
            id="date"
            label="완료일"
            type="date"
            fullWidth
            defaultValue={this.state.now}
            InputLabelProps={{
            shrink: true,
            }}/>
        <TextField
            id="title"
            label="제목"
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
            placeholder="제목을 입력하세요"
            margin="normal"   
        />
        <TextField
            id="content"
            label="내용"
            InputLabelProps={{
                shrink: true,
            }}
            placeholder="내용을 입력하세요"
            fullWidth
            multiline
            margin="normal"
        />
      </form>
    );
  }
}

AddPost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddPost);