import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AddComment from '@material-ui/icons/AddComment';

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
});

class Form extends React.Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        const newText = e.target.value;
        console.log(newText);
        this.setState({
            text: newText
        });
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            this.props.submit(this.state.text);
            this.setState({
                text: ''
            })
        }
    }
    render(){
        const { classes } = this.props;
        const { text } = this.state;
        return(
            <div className={classes.margin}>
                <Grid container spacing={8} alignItems="flex-end" justify = "center">
                    <Grid item>
                        <AddComment />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="TODO" fullWidth
                                    value = {text} onChange = {this.handleChange} onKeyDown = {this.handleKeyDown}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Form.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);