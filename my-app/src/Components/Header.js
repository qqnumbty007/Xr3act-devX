import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        const style = { height: 70 };
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <h1><img style={style} src="/images/logo/logo.png" alt="" /> <span className="text-uccess">เฮลตี้ คาเฟ่</span> </h1>
                    </div>
                    <div className="col-4 text-right">
                        <h5 className="text-muted mt-4">
                            {this.state.date.toLocaleTimeString()}
                        </h5>
                        <ul className="list-inline">
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
                <hr />
            </div>
        )
    }
}

export default Header;