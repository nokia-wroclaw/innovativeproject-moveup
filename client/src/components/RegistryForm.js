import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: "42%",
        marginRight: "42%",
        width: "16%",
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: 20,
        marginLeft: "42%",
        marginRight: "42%",
        width: "16%",
    },
    input: {
        display: 'none',
    },
});


class TextFields extends React.Component{
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };



    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} onSubmit={this.props.getRegister} noValidate autoComplete="off">
                <TextField
                    id="first_name"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.first_name}
                    onChange={this.handleChange('first_name')}
                    margin="normal"
                />
                <TextField
                    id="last_name"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.last_name}
                    onChange={this.handleChange('last_name')}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                />
                <Button variant="contained" color="primary" type={"submit"} className={classes.button}>
                    Send
                </Button>
            </form>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);