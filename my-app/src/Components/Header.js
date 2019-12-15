import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HeaderLogo from './HeaderLogo';

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
                        <h1>
                           <HeaderLogo />
                        </h1>
                    </div>
                    <div className="col-4 text-center mt-2">

                        <h2 className="text-right">
                            {this.state.date.toLocaleTimeString('default', optionTime)}
                        </h2>
                        <ul className="list-inline text-right">
                            <li className="list-inline-item title"><Link to="/">หน้าหลัก</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/orders">รายการสั่งซื้อ</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/products">สินค้า</Link></li>
                            <li className="list-inline-item title">|</li>
                            <li className="list-inline-item title"><Link to="/about">เกี่ยวกับเรา</Link></li>
                            <li className="list-inline-item title">|</li>
                        </ul>

                    </div>
                </div>

            </div>
        )
    }
}

export default Header;