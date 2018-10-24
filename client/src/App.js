import React, { Component } from 'react';
import MenuAppBar from './components/MenuAppBar'
import SimpleTabs from './components/SimpleTabs'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MenuAppBar/>
                <SimpleTabs/>
            </div>
        );
    }
}

export default App;
