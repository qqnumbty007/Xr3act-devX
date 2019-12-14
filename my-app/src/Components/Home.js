import React from 'react';
import Header from './Header'
import Monitor from './Monitor/Monitor'
import Footer from './Footer'

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
