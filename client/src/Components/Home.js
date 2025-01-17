import React from 'react';
import Header from './Header'
import Monitor from './Monitor/Monitor'
import Footer from './Footer'

function Home() {
  console.log(this.props)
  return (
    <div>
      <Header />
        <Monitor products={this.props.products} />
      <Footer email="test@jsk.net" company="SK8" />
    </div>
  )
}

export default Home;
