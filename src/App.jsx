import React from 'react'
import Task from './component/Task'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Router from './component/Allrouter/Router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router/>
      <Task/>
      <Footer/>
    </div>
  )
}

export default App