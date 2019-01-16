import AppBar from "@material-ui/core/AppBar/AppBar";
import {Link} from "react-router-dom";
import React from "react";
import SvgIcon from '@material-ui/core/SvgIcon';


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export const loginRegLink = (

    <AppBar position="static">
        <ul>
            <div>
                <Link to="/">
                    <HomeIcon color="action" className="itemNav"/>
                </Link>
            </div>
            <div>
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </div>
            <div>
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </div>
        </ul>
    </AppBar>

)