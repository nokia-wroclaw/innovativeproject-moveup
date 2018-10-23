/*import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { register } from './UserFunctions'


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
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class TextFields extends React.Component  {
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

    getRegister = (e) => {
        e.preventDefault();
        const user = {
            first_name: e.target.elements.first_name.value,
            last_name: e.target.elements.last_name.value,
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        console.log(user);

        if(user) {
            register(user)
                .then((res) => {
                    //...
                })
        }
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} onSubmit={this.getRegister} noValidate autoComplete="off">
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
                <Button variant="outlined"  className={classes.button}>
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


*/









import React from 'react'

const RegistryForm = (props) => {
    return (
        <form onSubmit={props.getRegister}>
            <input style={{margin:"20 px auto", display:"block"}} type={"text"} name={"first_name"}/>
            <input style={{margin:"20 px auto", display:"block"}} type={"text"} name={"last_name"}/>
            <input style={{margin:"20 px auto", display:"block"}} type={"text"} name={"email"}/>
            <input style={{margin:"20 px auto", display:"block"}} type={"text"} name={"password"}/>
            <button>No dawaj</button>
        </form>
    );
}

export default RegistryForm;