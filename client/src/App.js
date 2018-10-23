import React, { Component } from 'react';
import MenuAppBar from './components/MenuAppBar'
import './App.css';
import RegistryForm from './components/RegistryForm'
import { register } from './components/UserFunctions'



class App extends Component {
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


    }


    render() {
    return (
      <div className="App">
          <MenuAppBar/>
         <h1 className={"App-header"}>
          <RegistryForm getRegister={this.getRegister}/>
         </h1>
      </div>
    );
  }
}

export default App;
