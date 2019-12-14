import React, { Component } from 'react';
import Calculator from './Calculator';
import ProductList from '../Product/ProductList';
import axios from 'axios';

class Monitor extends Component {
    constructor(props){
        super(props);
        this.state = {
            totalPrice: 0,
            orders: [],
            confirm: false,
            msg: ''
        };
    }
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">
                            MONITOR SIDE
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} /> {/* ส่งรายการไปที่หน้า ProductList */}
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDelOrder={this.delOrder} onConfirmOrder={this.confirmOrder} onCancelOrder={this.cancelOrder} />
                    </div> {/* ส่งราคาของรายการไปที่หน้า CalCulator */}
                </div>
            </div>
        )
    }
}

export default Monitor;