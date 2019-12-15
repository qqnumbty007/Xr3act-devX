import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Containers/Home'
import Order from './Containers/order/Order'
import Product from './Containers/product/Product'
import About from './Containers/About'
import ProductEdit from './Containers/product/ProductEdit'
import NotFound from './Containers/error/NotFound';

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />

        <Route exact path="/products" component={Product} />
        <Route exact path="/products/add" component={ProductEdit} />
        <Route exact path="/products/edit/:id" component={ProductEdit} />

        <Route component={NotFound} />
        {/* exact เป็นการกำหนดให้พาร์ทไปตามเส้นทางเท่านั้น */}
      </Switch>
    )
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
