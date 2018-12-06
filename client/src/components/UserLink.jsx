import {Component} from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {Link} from "react-router-dom";
import React from "react";


    export const userLink = (

            <AppBar position="static">
                <ul>
                    <li>
                        <Link to="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="nav-link">
                            User
                        </Link>
                    </li>
                    <li>

                            Logout

                    </li>
                    <li>
                        <Link to="/createEvent" className="nav-link">
                            Create event
                        </Link>
                    </li>
                </ul>
            </AppBar>

        )

