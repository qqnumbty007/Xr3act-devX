import React, { Component } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeaderLogo from '../Components/HeaderLogo';

const About = () => {
    return (
        <div>
            <Header />
            <div className="container col-md-5">
                <h3>สวัสดีครับ</h3>
                <p className="title text-justify mt-4 mb-4">
                    เราคือร้านอาหาร ที่เน้นอาหารอร่อยเท่านั้นจริง ๆ
                    ไม่ให้ความสำคัญกับสุขภาพเท่าไร
                    เพราะสุขภาพที่ดีนั้นคุณสามารถสร้างได้ด้วยการ "ออกกำลังกาย"
                    ดังนั้นกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำในสิ่งที่คุณรัก ครับผม
                </p>
                <h4 className="text-success"><HeaderLogo /></h4>
            </div>
            <Footer company="SK8Soft" email="sk8@jsk.com" />
        </div>
    )
}

export default About;