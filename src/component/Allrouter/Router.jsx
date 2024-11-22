import React from "react"
import { Route,Routes } from "react-router-dom"

import Task from "../../component/Task"
import Register from "../Register"
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Task/>}/>
      </Routes>
    </div>
  )
}

export default Router