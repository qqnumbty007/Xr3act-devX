import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => { this.tick() }, 1000);
        // set วิ ใหม่ตลอดเวลาโดยเรียกฟังก์ชั่น tick();
    }

    componentWillUnmount() {
        clearInterval(this.timer); // clear timer ตลอดเวลา
    }

    tick = () => { this.setState({ date: new Date() }) }


    render() {
        let optionTime = {
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            hour12: false
        }
        return (
            <div className="container-fluid title">
                <div className="row">
                    <div className="col-8" style={{}}>
                        <div>
                            <h2 style={{ borderLeft: "4px solid red", height: "100%", paddingLeft:"10px"}} className="mt-2">
                                Else<br />
                                Society
                            </h2> 
                        </div>
                    </div>
                    <div className="col-4 text-center mt-2">

                        <h2 className="text-right">
                            {this.state.date.toLocaleTimeString('default', optionTime)}
                        </h2>
                        <ul className="list-inline text-right">
                            <li className="list-inline-item title">HOME</li>
                            <li className="list-inline-item title"> | </li>
                            <li className="list-inline-item title">About me</li>
                            <li className="list-inline-item title"> | </li>
                            <li className="list-inline-item title">contract me</li>
                            <li className="list-inline-item title"> | </li>
                            <li className="list-inline-item title">HelloWorld</li>
                        </ul>

                    </div>
                </div>

            </div>
        )
    }
}

export default Header;