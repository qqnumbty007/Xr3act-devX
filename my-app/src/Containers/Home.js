import React from 'react';
import Header from '../Components/Header'
import Monitor from '../Components/Monitor/Monitor'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Header />
        <Monitor />
      <Footer email="test@jsk.net" company="SK8" />
    </div>
  )
}

export default Home;
