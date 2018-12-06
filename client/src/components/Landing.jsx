import React, { Component } from 'react'
import './Landing.css';

export default class Landing extends Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="textCenter">WELCOME</h1>
                    </div>
                </div>
            </div>
        )
    }
}

