import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="text-center title text-uppercase">
                    <font color="red">powered by : {this.props.company}</font> | email : {this.props.email}
                </div>
            </div>
        )
    }
}

export default Footer;