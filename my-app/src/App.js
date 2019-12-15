import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Containers/Home'
import Order from './Containers/order/Order'
import Product from './Containers/product/Product'
import About from './Containers/About'

class App extends Component {

  renderRouter(){
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/orders' component={Order} />
        <Route exact path='/products' component={Product} />
        <Route exact path='/About' component={About} />
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
