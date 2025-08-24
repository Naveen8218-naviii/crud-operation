import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import User from './user'
import Createuser from "../src/createuser"
import Updateuser from "../src/updateuser"


const App = () => {
  return (
    <div className='m-0 p-0 h-screen w-full'>
    
      <BrowserRouter>
      <Routes>
       <Route path='/'  element={<User/>}></Route>
      <Route path='/create'  element={<Createuser/>}></Route>
      <Route path='/update'  element={<Updateuser/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
