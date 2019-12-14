import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    );
  }
  
  render(){
    return (
      <BrowserRouter>
        {this.renderRouter()}
      </BrowserRouter>
    )
  }
}

export default App;
