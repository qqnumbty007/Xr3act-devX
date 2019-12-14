import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Containers/Home'
import Order from './Containers/order/Order'

class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/orders' component={Order} />
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
