import React, { Component } from 'react';
import Header from '../Components/Header'
import Monitor from '../Components/Monitor/Monitor'
import Footer from '../Components/Footer'
import { connect } from 'react-redux';
import { productsFetch } from '../actions'


class Home extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.productsFetch();
    }
    render(){
        return (
            <div>
            <Header />
                <Monitor products={this.props.products} />
            <Footer email="test@jsk.net" company="SK8" />
            </div>
        )
    }
}

function mapStateToProps({ products }) {
    // console.log(state);
    return { products }
  }
  
export default connect(mapStateToProps, { productsFetch })(Home);
