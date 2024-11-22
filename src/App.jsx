import React from 'react'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Router from './component/Allrouter/Router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router/>
    
      <Footer/>
    </div>
  )
}

export default App